import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">isfinans.trade</div>
      </div>
      
      <div className="header-search">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder="Quick search"
        />
      </div>
      
      <div className="header-right">
        <Bell className="notification-icon" size={24} />
        <div className="user-profile">
          Dominique Ch.
          <ChevronDown className="dropdown-icon" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
