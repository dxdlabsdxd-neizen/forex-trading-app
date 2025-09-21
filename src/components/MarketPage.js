import React, { useState } from 'react';
import './MarketPage.css';

// SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.65116 0H1.95349C1.43539 0 0.938514 0.205813 0.572164 0.572164C0.205813 0.938514 0 1.43539 0 1.95349V8.65116C0 8.9077 0.0505283 9.16172 0.1487 9.39873C0.246872 9.63574 0.390765 9.85109 0.572164 10.0325C0.753562 10.2139 0.968913 10.3578 1.20592 10.456C1.44293 10.5541 1.69695 10.6047 1.95349 10.6047H8.65116C8.9077 10.6047 9.16172 10.5541 9.39873 10.456C9.63574 10.3578 9.85109 10.2139 10.0325 10.0325C10.2139 9.85109 10.3578 9.63574 10.456 9.39873C10.5541 9.16172 10.6047 8.9077 10.6047 8.65116V1.95349C10.6047 1.69695 10.5541 1.44293 10.456 1.20592C10.3578 0.968913 10.2139 0.753562 10.0325 0.572164C9.85109 0.390765 9.63574 0.246872 9.39873 0.1487C9.16172 0.0505283 8.9077 0 8.65116 0ZM8.93023 8.65116C8.93023 8.72518 8.90083 8.79616 8.8485 8.8485C8.79616 8.90083 8.72518 8.93023 8.65116 8.93023H1.95349C1.87947 8.93023 1.80849 8.90083 1.75616 8.8485C1.70382 8.79616 1.67442 8.72518 1.67442 8.65116V1.95349C1.67442 1.87947 1.70382 1.80849 1.75616 1.75616C1.80849 1.70382 1.87947 1.67442 1.95349 1.67442H8.65116C8.72518 1.67442 8.79616 1.70382 8.8485 1.75616C8.90083 1.80849 8.93023 1.87947 8.93023 1.95349V8.65116ZM22.0465 0H15.3488C14.8307 0 14.3339 0.205813 13.9675 0.572164C13.6012 0.938514 13.3953 1.43539 13.3953 1.95349V8.65116C13.3953 8.9077 13.4459 9.16172 13.544 9.39873C13.6422 9.63574 13.7861 9.85109 13.9675 10.0325C14.1489 10.2139 14.3643 10.3578 14.6013 10.456C14.8383 10.5541 15.0923 10.6047 15.3488 10.6047H22.0465C22.303 10.6047 22.5571 10.5541 22.7941 10.456C23.0311 10.3578 23.2464 10.2139 23.4278 10.0325C23.6092 9.85109 23.7531 9.63574 23.8513 9.39873C23.9495 9.16172 24 8.9077 24 8.65116V1.95349C24 1.43539 23.7942 0.938514 23.4278 0.572164C23.0615 0.205813 22.5646 0 22.0465 0ZM22.3256 8.65116C22.3256 8.72518 22.2962 8.79616 22.2438 8.8485C22.1915 8.90083 22.1205 8.93023 22.0465 8.93023H15.3488C15.2748 8.93023 15.2038 8.90083 15.1515 8.8485C15.0992 8.79616 15.0698 8.72518 15.0698 8.65116V1.95349C15.0698 1.87947 15.0992 1.80849 15.1515 1.75616C15.2038 1.70382 15.2748 1.67442 15.3488 1.67442H22.0465C22.1205 1.67442 22.1915 1.70382 22.2438 1.75616C22.2962 1.80849 22.3256 1.87947 22.3256 1.95349V8.65116ZM8.65116 13.3953H1.95349C1.43539 13.3953 0.938514 13.6012 0.572164 13.9675C0.205813 14.3339 0 14.8307 0 15.3488V22.0465C0 22.5646 0.205813 23.0615 0.572164 23.4278C0.938514 23.7942 1.43539 24 1.95349 24H8.65116C8.9077 24 9.16172 23.9495 9.39873 23.8513C9.63574 23.7531 9.85109 23.6092 10.0325 23.4278C10.2139 23.2464 10.3578 23.0311 10.456 22.7941C10.5541 22.5571 10.6047 22.303 10.6047 22.0465V15.3488C10.6047 15.0923 10.5541 14.8383 10.456 14.6013C10.3578 14.3643 10.2139 14.1489 10.0325 13.9675C9.85109 13.7861 9.63574 13.6422 9.39873 13.544C9.16172 13.4459 8.9077 13.3953 8.65116 13.3953ZM8.93023 22.0465C8.93023 22.1205 8.90083 22.1915 8.8485 22.2438C8.79616 22.2962 8.72518 22.3256 8.65116 22.3256H1.95349C1.87947 22.3256 1.80849 22.2962 1.75616 22.2438C1.70382 22.1915 1.67442 22.1205 1.67442 22.0465V15.3488C1.67442 15.2748 1.70382 15.2038 1.75616 15.1515C1.80849 15.0992 1.87947 15.0698 1.95349 15.0698H8.65116C8.72518 15.0698 8.79616 15.0992 8.8485 15.1515C8.90083 15.2038 8.93023 15.2748 8.93023 15.3488V22.0465ZM22.0465 13.3953H15.3488C14.8307 13.3953 14.3339 13.6012 13.9675 13.9675C13.6012 14.3339 13.3953 14.8307 13.3953 15.3488V22.0465C13.3953 22.5646 13.6012 23.0615 13.9675 23.4278C14.3339 23.7942 14.8307 24 15.3488 24H22.0465C22.5646 24 23.0615 23.7942 23.4278 23.4278C23.7942 23.0615 24 22.5646 24 22.0465V15.3488C24 14.8307 23.7942 14.3339 23.4278 13.9675C23.0615 13.6012 22.5646 13.3953 22.0465 13.3953ZM22.3256 22.0465C22.3256 22.1205 22.2962 22.1915 22.2438 22.2438C22.1915 22.2962 22.1205 22.3256 22.0465 22.3256H15.3488C15.2748 22.3256 15.2038 22.2962 15.1515 22.2438C15.0992 22.1915 15.0698 22.1205 15.0698 22.0465V15.3488C15.0698 15.2748 15.0992 15.2038 15.1515 15.1515C15.2038 15.0992 15.2748 15.0698 15.3488 15.0698H22.0465C22.1205 15.0698 22.1915 15.0992 22.2438 15.1515C22.2962 15.2038 22.3256 15.2748 22.3256 15.3488V22.0465Z" fill="white"/>
  </svg>
);

const DepositIcon = () => (
  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 0C5.149 0 0 5.149 0 11.5C0 17.851 5.149 23 11.5 23C17.851 23 23 17.851 23 11.5C23 5.149 17.851 0 11.5 0ZM11.5 21C6.253 21 2 16.747 2 11.5C2 6.253 6.253 2 11.5 2C16.747 2 21 6.253 21 11.5C21 16.747 16.747 21 11.5 21Z" fill="white"/>
    <path d="M11.5 6L7 10.5H10V17H13V10.5H16L11.5 6Z" fill="white"/>
  </svg>
);

const TradeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" fill="white"/>
    <path d="M12 6L8 10H11V17H13V10H16L12 6Z" fill="white"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MarketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L3 8V14C3 19.55 6.84 24.74 12 26C17.16 24.74 21 19.55 21 14V8L14 2Z" fill="white"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="18" width="6" height="10" fill="white"/>
    <rect x="11" y="14" width="6" height="14" fill="white"/>
    <rect x="18" y="6" width="6" height="22" fill="white"/>
  </svg>
);

const PositionIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0L0 8V22H28V8L14 0Z" fill="white"/>
  </svg>
);

const HistoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2C20.627 2 26 7.373 26 14S20.627 26 14 26 2 20.627 2 14 7.373 2 14 2ZM14 24C19.523 24 24 19.523 24 14S19.523 4 14 4 4 8.477 4 14 8.477 24 14 24Z" fill="white"/>
    <path d="M14 8V14L18 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MarketPage = ({ onMenuClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Watchlist', 'Endex', 'Exchange', 'Commodity', 'Stock'];

  const marketData = [
    {
      symbol: 'AUDUSD',
      price: '0.65419',
      change: '+15.06%',
      changeType: 'positive',
      logo: 'A'
    },
    {
      symbol: 'ASELSAN',
      price: '0.65419',
      change: '+15.06%',
      changeType: 'negative',
      logo: 'A'
    },
    {
      symbol: 'GARAN',
      price: 'Market Closed',
      change: '',
      changeType: 'closed',
      logo: 'G'
    }
  ];

  return (
    <div className="market-page">
      {/* Header with Blue Background */}
      <div className="market-header">
        <div className="equity-section">
          <div className="equity-label">Equity</div>
          <div className="equity-amount">$10,000.00</div>
        </div>

        {/* Main Menu Buttons */}
        <div className="main-menu-buttons">
          <div className="menu-button" onClick={onMenuClick}>
            <div className="menu-icon-box">
              <MenuIcon />
            </div>
            <div className="menu-button-text">Menu</div>
          </div>
          <div className="menu-button">
            <div className="menu-icon-box">
              <DepositIcon />
            </div>
            <div className="menu-button-text">Deposit</div>
          </div>
          <div className="menu-button">
            <div className="menu-icon-box">
              <TradeIcon />
            </div>
            <div className="menu-button-text">Trade</div>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <div className="search-content">
            <SearchIcon />
            <span className="search-placeholder">Try "aselsan"</span>
          </div>
        </div>
      </div>

      {/* Market Data */}
      <div className="market-data-container">
        <div className="market-data-header">
          <div className="header-column">Symbol</div>
          <div className="header-column">Price</div>
          <div className="header-column">Change</div>
        </div>

        <div className="market-data-list">
          {marketData.map((item, index) => (
            <div key={index} className="market-data-row">
              <div className="symbol-section">
                <div className="symbol-logo">{item.logo}</div>
                <div className="symbol-name">{item.symbol}</div>
              </div>
              <div className="price-section">
                <div className={`price ${item.changeType === 'closed' ? 'market-closed' : ''}`}>
                  {item.price}
                </div>
              </div>
              <div className="change-section">
                {item.change && (
                  <div className={`change ${item.changeType}`}>
                    {item.change}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <div className="nav-button active">
          <div className="nav-icon-box">
            <MarketIcon />
          </div>
          <div className="nav-button-text">Market</div>
        </div>
        <div className="nav-button">
          <div className="nav-icon-box">
            <ChartIcon />
          </div>
          <div className="nav-button-text">Chart</div>
        </div>
        <div className="nav-button">
          <div className="nav-icon-box">
            <PositionIcon />
          </div>
          <div className="nav-button-text">Positions</div>
        </div>
        <div className="nav-button">
          <div className="nav-icon-box">
            <HistoryIcon />
          </div>
          <div className="nav-button-text">History</div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
