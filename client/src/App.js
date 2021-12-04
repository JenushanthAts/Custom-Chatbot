//import { requirePropFactory } from "@material-ui/core";
import React from "react";
//import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';
//import logo from '../public/assets/img/kaayaltek.jpeg';
//const { Title } = Typography;

function App() {
  return (
    <div >
      <div className="chat-screen" id="chat-wid">
        <div className="chat-header">
          <div style={{ width: '32px', height: '0px' }}>
            <img src='/assets/img/kaayaltek.jpeg' alt='logo' style={{ width: '32px', height: '32px', borderRadius: '15px' }}></img>
          </div>
          <div className="chat-header-title">
            KaayalTek
            <p style={{ color: 'white', marginBottom: '-1rem', fontSize: '10px' }}>Online</p>
          </div>
          <div className="chat-header-option hide">
            <span className="dropdown custom-dropdown">
              <a className="dropdown-toggle" href={'5'} role="button" id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink1" style={{ 'willChange': 'transform' }} >
                <a className="dropdown-item" href={'5'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bc32ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path strokeLinecap="butt" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Send Transcriptions
                </a>
                {/* href={() => false} */}
                <a className="dropdown-item end-chat" href={'5'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bc32ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                  End Chat
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className="chat-mail">
          <div className="row">
            <div className="col-md-12 text-center mb-2">
              <p>Hi <span role="img" aria-label="sheep">👋</span>! Please fill out the form below to start chatting with the next available agent.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email"/>
              </div>
            </div>
            <div className="col-md-12">
              <select className="form-control  select2_el">
                <option value="selected">Select Option</option>
                <option>Report Abuse</option>
                <option>Other</option>
              </select>
            </div>
            
            
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary btn-rounded btn-block">Start Chat</button>
            </div>

          </div>
        </div>
        {/* <div className="chat-body hide">
          
           <Chatbot />
        </div> */}
        <div><Chatbot /></div>

        <div className="chat-session-end hide">
          <h5>This chat session has ended</h5>
          <p>Thank you for chatting with us, If you can take a minute and rate this chat:</p>
          <div className="rate-me">
            <div className="rate-bubble great">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></span>
              Great
            </div>
            <div className="rate-bubble bad">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></span>
              Bad
            </div>
          </div>
          <a className="transcript-chat" href={() => false}>Need a Transcript?</a>
          <div className="powered-by">Powered by KaayalTEK</div>
        </div>
      </div>
      {/* <div className="chat-bot-icon">
        <img src="./assets/img/we-are-here.svg" alt=" " />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square animate"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x "><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </div> */}
    </div>
  )
}

export default App
