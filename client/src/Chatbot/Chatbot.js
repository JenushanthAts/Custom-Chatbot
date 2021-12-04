import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { saveMessage } from '../_actions/message_actions';
import Message from './Sections/Message';
//import { List } from 'antd';
//import { List, Icon, Avatar } from 'antd';
import Card from "./Sections/Card";
import Button from "./Sections/Button";
import ScrollToBottom from 'react-scroll-to-bottom';

//import SendIcon from '@mui/icons-material/Send';
//import IconButton from '@mui/material/IconButton';
//import { element } from 'prop-types';



function Chatbot() {

    const dispatch = useDispatch();
    const messagesFromRedux = useSelector(state => state.message.messages)
    const [userText, setUserText] = useState(null)


    useEffect(() => {

        eventQuery('welcomeToMyWebsite')

    }, [])


    const textQuery = async (text) => {
        //console.log(text)
        //  First  Need to  take care of the message I sent     
        let conversation = {
            who: 'user',
            content: {
                text: {
                    text: text
                }
            }
        }

        dispatch(saveMessage(conversation))
        // console.log('text I sent', conversation)

        // We need to take care of the message Chatbot sent 
        const textQueryVariables = {
            text
        }
        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/textQuery', textQueryVariables)

            for (let content of response.data.fulfillmentMessages) {

                conversation = {
                    who: 'bot',
                    content: content
                }

                dispatch(saveMessage(conversation))
            }
        } catch (error) {
            conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem"
                    }
                }
            }
            dispatch(saveMessage(conversation))
        }
    }

    //auto filled msg from dialogflow
    const eventQuery = async (event) => {

        // We need to take care of the message Chatbot sent 
        const eventQueryVariables = {
            event
        }
        try {
            //I will send request to the textQuery ROUTE 
            const response = await Axios.post('/api/dialogflow/eventQuery', eventQueryVariables)
            for (let content of response.data.fulfillmentMessages) {

                let conversation = {
                    who: 'bot',
                    content: content
                }

                dispatch(saveMessage(conversation))
            }


        } catch (error) {
            let conversation = {
                who: 'bot',
                content: {
                    text: {
                        text: " Error just occured, please check the problem again"
                    }
                }
            }
            dispatch(saveMessage(conversation))
        }

    }


    const filedOnChange = (event) => {
        let value = event.target.value;
        setUserText(value);
    }

    const keyPressHanlder = (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('you need to type somthing first')
            }

            //we will send request to text query route 
            textQuery(userText);
            setUserText("");
        }
    }

    const butClickSend = (event) => {
        //console.log(userText);
        if (userText === null || userText === "") {
            return alert('you need to type somthing first')
        }

        //we will send request to text query route 
        textQuery(userText)
        setUserText("")
    }
    
    /* when clicking button on chatbot, it will work */
    const btnclick = (a) => {
        textQuery(a);
    }
    const renderCards = (cards) => {
        return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />)
    }
    const renderChips = (chips) => {
        return chips.map((chip, i) => <Button key={i} chipInfo={chip.structValue} buttonclick={() => btnclick(chip.structValue.fields.text.stringValue)} />)
    }

    const renderOneMessage = (message, i) => {
        //console.log('message', message)

        // we need to give some condition here to separate message kinds 

        // template for normal text 
        if (message.content && message.content.text && message.content.text.text) {
            return <Message key={i} who={message.who} text={message.content.text.text} />
        } else if (message.content && message.content.payload.fields.card) {

            //const AvatarSrc = message.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />

            return <div>
                {/* <List.Item style={{ padding: '0.1rem' }}>
                    <List.Item.Meta */}
                {/* //avatar={<Avatar icon={AvatarSrc} />}
                        //title={message.who} */}
                {/* description= */}
                {renderCards(message.content.payload.fields.card.listValue.values)}
                {/* />
                </List.Item> */}
            </div>
            //template for card message
        }
        else if (message.content && message.content.payload.fields.button) {
            //const AvatarSrc = message.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />
            return <div style={{
                width: 'auto',
                margin: 'auto',
            }} >

                {/* <List.Item style={{ padding: '0.4rem', margin: '0.2rem' }}> */}
                {/* <List.Item.Meta */}
                {/* avatar={<Avatar icon={AvatarSrc} />} */}
                {/* //title={message.who} */}
                {renderChips(message.content.payload.fields.button.listValue.values)}
                {/* /> */}
                {/* </List.Item> */}

            </div>
        }
        // template for suggestion chips message 
    }

    const renderMessage = (returnedMessages) => {

        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return renderOneMessage(message, i);
            })
        } else {
            return null;
        }
    }

    var currentdate = new Date().toLocaleString('en-US', { month: 'short' }) + " " + new Date().getDate();
    return (
        <div>
            <ScrollToBottom style={{ height: '50px' }}>
                <div className="chat-body hide" style={{ height: '370px' }} >

                    <div className="chat-start">{currentdate}, {new Date().toLocaleTimeString([], { timeStyle: 'short' })}</div>

                    {renderMessage(messagesFromRedux)}

                </div>
            </ScrollToBottom>
            <div className="chat-input hide">
                <input type="text" placeholder="Type a message..."
                    value={userText == null ? '' : userText}
                    onChange={(event => filedOnChange(event))}
                    onKeyPress={keyPressHanlder} />
                <div className="input-action-icon" >
                    <a href={() => false} onClick={butClickSend} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
                </div>
            </div>
        </div>
    )
}

export default Chatbot;
