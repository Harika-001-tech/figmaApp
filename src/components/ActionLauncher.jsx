import React from 'react'
import "../styles/userprofile.css";


const ActionLauncher = () => {
  return (
    <div className="action-launcher">
    <h2>Action Launcher</h2>
    <div className="search-bar">
      <img src="https://dashboard.codeparrot.ai/api/assets/Z0yCJ7LVBCaRbmX3" alt="search icon" width="24" height="24" />
      <input type="text" placeholder="Search actions..." />
    </div>
    <div className="action-buttons">
      <button className="action-button add-action">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0yCJ7LVBCaRbmX4" alt="add icon" width="24" height="24" /> Add Action
      </button>
      <button className="action-button">Fee Reversal</button>
      <button className="action-button">Retail Onboarding</button>
      <button className="action-button">Address Update</button>
    </div>
  </div>
   
  )
}

export default ActionLauncher