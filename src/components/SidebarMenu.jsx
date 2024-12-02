import React from 'react';
import '../styles/SidebarMenu.css';

const SidebarMenu = () => {
  const menuItems = [
    { id: 1, name: 'Internal Audit', icon: 'file-search-02', active: false },
    { id: 2, name: 'UAT Testing', icon: 'file-check-02', active: false },
    { id: 3, name: 'Intract', icon: 'link-03', active: false },
    { id: 4, name: 'Queue', icon: 'users', active: true },
    { id: 5, name: 'Workflow', icon: 'sitemap', active: false },
    { id: 6, name: 'Admin', icon: 'user', active: false },
    { id: 7, name: 'Asset', icon: 'box', active: false },
    { id: 8, name: 'Parent', icon: 'users-2', active: false },
    { id: 9, name: 'Option One', icon: 'circle-off', active: false },
    { id: 10, name: 'Option Two', icon: 'circle-off-2', active: false },
    { id: 11, name: 'All Accessories', icon: 'wrench', active: false },
    { id: 12, name: 'Internal Audit', icon: 'file-search-02-2', active: false },
    { id: 13, name: 'Decorating', icon: 'star-06', active: false },
    { id: 14, name: 'Presenting', icon: 'gift', active: false },
  ];

  return (
    <div className="sidebar-menu">
      <div className="logo">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z00ODbLVBCaRbmYc" alt="Risk Hawk Logo" width="270" height="80" />
      </div>
      {menuItems.map(item => (
        <MenuItem key={item.id} iconId={item.icon} text={item.name} />
      ))}
    </div>
  );
};

const MenuItem = ({ iconId, text }) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconTextContainer}>
        <img 
          src={`https://placeholder.pics/svg?${iconId}`} 
          alt="icon" 
          style={styles.icon}
        />
        <span style={styles.text}>{text}</span>
      </div>
      <img 
        src={`https://dashboard.codeparrot.ai/api/assets/Z00ODbLVBCaRbmYd`} 
        alt="arrow" 
        style={styles.arrow}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '7px 25px',
    backgroundColor: '#1a1d2e',
    height: '48px',
    color: '#9ea0b3',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  icon: {
    width: '34px',
    height: '34px',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
  },
  arrow: {
    width: '24px',
    height: '24px',
  }
};

export default SidebarMenu;

