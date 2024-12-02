
import React, { useState } from 'react';

import '../styles/userprofile.css';


const ConversationTab = () => {
    const [activeTab, setActiveTab] = useState('Conversation');

  const tabs = [
    { name: 'Conversation', color: '#0f8bfdff', weight: 600 },
    { name: 'Address Update', color: '#676b89ff', weight: 500 },
    { name: 'Fee Reversal', color: '#676b89ff', weight: 500 },
    { name: 'Retail Onboarding', color: '#676b89ff', weight: 500 },
  ];

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={`tab-item ${activeTab === tab.name ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.name)}
          style={{
            color: tab.color,
            fontWeight: tab.weight,
            fontFamily: 'Inter',
            fontSize: '14px',
            lineHeight: '21px',
            padding: '15px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: activeTab === tab.name ? '2px solid #0f8bfdff' : 'none',
          }}
        >
          {tab.name} <span className="close-icon">×</span>
        </div>
      ))}
    </div>
  );
 
}

export default ConversationTab