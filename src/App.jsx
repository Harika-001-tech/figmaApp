import React from 'react';
import './styles/userprofile.css';
import './styles/SidebarMenu.css'
import UserProfileCard from './components/UserProfileCard';
import ConversationTab from './components/ConversationTab';
import MessageInput from './components/MessageInput';
import ActionLauncher from './components/ActionLauncher';
import SidebarMenu from './components/SideBarMenu';


const App = () => {
  return (
    <div className="final-component">
      < SidebarMenu />
      <UserProfileCard  />
      <ConversationTab />
      <MessageInput />
      <ActionLauncher />
    </div>
    
  )
}

export default App
