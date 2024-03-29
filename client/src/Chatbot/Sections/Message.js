import React from 'react'
//import { List, Icon, Avatar } from 'antd';

function Message(props) {

    //const AvatarSrc = props.who === 'bot' ? <Icon type="robot" /> : <Icon type="smile" />
    const text = props.who
    return (
        <div>
            {text === "bot" ? (
               <div className="chat-bubble you">{props.text}</div>
            ) : (
                <div className="chat-bubble me">{props.text}</div>
            )}
            
           
        </div>

        // <List.Item style={{ padding: '1rem' }}>
        //     <List.Item.Meta
        //         avatar={<Avatar icon={AvatarSrc} />}
        //         title={props.who}
        //         description={props.text}
        //     />
        // </List.Item>
    )
}

export default Message
