import React from 'react';
import '../styles/userprofile.css';

const UserProfileCard = () => {
  return (
    <div className='maincontainer'>
    <div className="user-profile-card">
      <div className="profile-header">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z0yCJrLVBCaRbmX0" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>Hannibal Smith</h2>
          <p>1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-item">
          <span>Customer ID</span>
          <span>12345</span>
        </div>
        <div className="profile-item">
          <span>Email Address</span>
          <span>rachel@sample.com</span>
        </div>
        <div className="profile-item">
          <span>Phone Number</span>
          <span>8051298905</span>
        </div>
        <button className="add-button">Add</button>
      </div>
      <div className="profile-section">
        <div className="profile-item">
          <span>Loyalty Tier</span>
          <span>Silver</span>
        </div>
        <div className="profile-item">
          <span>Segment</span>
          <span>Sleepy Customer</span>
        </div>
        <button className="add-button">Add</button>
      </div>
      <div className="profile-section">
        <div className="profile-item">
          <span>Lifetime Value</span>
          <span>$ 1M</span>
        </div>
        <div className="profile-item">
          <span>Propensity to Purchase</span>
          <span>75%</span>
        </div>
        <button className="add-button">Add</button>
      </div>
      <div className="profile-section">
        <div className="profile-item">
          <span>Engagement Score</span>
          <span>80%</span>
        </div>
        <button className="add-button">Add</button>
      </div>
      <button className="assign-button">Assign other Agent</button>
      <button className="new-widget-button">Add New Widget</button>
    </div>
    </div>
    
  )
}

export default UserProfileCard