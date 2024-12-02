import React from 'react'
import '../styles/userprofile.css';

const MessageInput = () => {
  return (
    <div className="message-input-container">
    <div className="input-group">
      <input type="text" className="message-input" placeholder="Type a message..." />
    </div>
    <button className="attachment-button">
      <img src="https://dashboard.codeparrot.ai/api/assets/Z0yCJ7LVBCaRbmX1" alt="Attachment" width="24" height="24" />
    </button>
    <button className="send-button">
      <img src="https://dashboard.codeparrot.ai/api/assets/Z0yCJ7LVBCaRbmX2" alt="Send" width="24" height="24" />
      <span>Send</span>
    </button>
  </div>
    
  )
}

export default MessageInput