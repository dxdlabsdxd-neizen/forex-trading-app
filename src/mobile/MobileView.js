import React, { useState } from 'react'
import './MobileView.css'

const MobileView = () => {
  const [activeMenuButton, setActiveMenuButton] = useState('Menu')
  const [activeBottomNav, setActiveBottomNav] = useState('Market')
  const [showDepositModal, setShowDepositModal] = useState(false)
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false)
  const [showAccountModal, setShowAccountModal] = useState(false)
  const [showTradeModal, setShowTradeModal] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)

  const handleMenuClick = (menuType) => {
    setActiveMenuButton(menuType)
    console.log('Menu clicked:', menuType)
    
    // Open modals based on menu type
    switch (menuType) {
      case 'Deposit':
        setShowDepositModal(true)
        break
      case 'Trade':
        setShowTradeModal(true)
        break
      default:
        break
    }
  }

  const handleMenuItemClick = (item) => {
    console.log('Menu item clicked:', item)
    
    // Open modals based on menu item
    switch (item) {
      case 'account-info':
        setShowAccountModal(true)
        break
      case 'withdrawal':
        setShowWithdrawalModal(true)
        break
      case 'deposit':
        setShowDepositModal(true)
        break
      case 'trade-transaction':
        setShowTradeModal(true)
        break
      case 'help-desk':
        setShowHelpModal(true)
        break
      default:
        break
    }
  }

  const handleBottomNavClick = (navItem) => {
    setActiveBottomNav(navItem)
    console.log('Bottom nav clicked:', navItem)
  }

  return (
    <div className="mobile-view-container">
      {/* Blue Header Section */}
      <div className="mobile-header">
        <div className="header-shadow"></div>
      </div>

      {/* Main Content */}
      <div className="mobile-main-content">
        {/* Top Navigation Buttons */}
        <div className="top-navigation">
          <div 
            className={`nav-button ${activeMenuButton === 'Menu' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Menu')}
          >
            <div className="nav-icon-container active">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-label">Menu</span>
          </div>

          <div 
            className={`nav-button ${activeMenuButton === 'Deposit' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Deposit')}
          >
            <div className="nav-icon-container">
              <svg className="nav-icon" width="23" height="24" viewBox="0 0 23 24" fill="none">
                <path d="M12 1V23M1 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-label">Deposit</span>
          </div>

          <div 
            className={`nav-button ${activeMenuButton === 'Trade' ? 'active' : ''}`}
            onClick={() => handleMenuClick('Trade')}
          >
            <div className="nav-icon-container">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 3L4 7L8 11M16 21L20 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-label">Trade</span>
          </div>
        </div>

        {/* User Information */}
        <div className="user-info">
          <span>EMMA BROWN 90993789 - USD</span>
        </div>

        {/* Menu Options Container */}
        <div className="menu-container">
          <div className="menu-options">
            <div className="menu-item" onClick={() => handleMenuItemClick('account-info')}>
              <span>Account information</span>
            </div>
            <div className="menu-item" onClick={() => handleMenuItemClick('withdrawal')}>
              <span>Withdrawal</span>
            </div>
            <div className="menu-item" onClick={() => handleMenuItemClick('deposit')}>
              <span>Deposit</span>
            </div>
            <div className="menu-item" onClick={() => handleMenuItemClick('trade-transaction')}>
              <span>Trade & transaction</span>
            </div>
            <div className="menu-item" onClick={() => handleMenuItemClick('help-desk')}>
              <span>Help desk</span>
            </div>
          </div>

          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-icon">$</div>
              <span className="logo-text">FINANS.TRADE</span>
            </div>
          </div>

          {/* Footer */}
          <div className="footer-section">
            <div className="footer-links">
              <a href="#" className="footer-link">Terms of use</a>
              <a href="#" className="footer-link">Privacy Policy</a>
            </div>
            
            <div className="disclaimer">
              <p className="disclaimer-text">
                Trade responsibly: Trading CFDs is risky and may lead to permanent capital loss. 
                Make sure you understand the risks before trading.
              </p>
              <div className="copyright">
                <span>2025 Edgetrade™</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <div 
          className={`bottom-nav-item ${activeBottomNav === 'Market' ? 'active' : ''}`}
          onClick={() => handleBottomNavClick('Market')}
        >
          <div className="bottom-nav-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L16.5 10.5L25 13L16.5 15.5L14 24L11.5 15.5L3 13L11.5 10.5L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="bottom-nav-label">Market</span>
        </div>

        <div 
          className={`bottom-nav-item ${activeBottomNav === 'Chart' ? 'active' : ''}`}
          onClick={() => handleBottomNavClick('Chart')}
        >
          <div className="bottom-nav-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M3 20L9 14L13 18L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 8H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="bottom-nav-label">Chart</span>
        </div>

        <div 
          className={`bottom-nav-item ${activeBottomNav === 'Positions' ? 'active' : ''}`}
          onClick={() => handleBottomNavClick('Positions')}
        >
          <div className="bottom-nav-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2V6M12 2V6M8 2V6M4 10H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="bottom-nav-label">Positions</span>
        </div>

        <div 
          className={`bottom-nav-item ${activeBottomNav === 'History' ? 'active' : ''}`}
          onClick={() => handleBottomNavClick('History')}
        >
          <div className="bottom-nav-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M3 12C3 7.58172 6.58172 4 11 4H17C21.4183 4 25 7.58172 25 12C25 16.4183 21.4183 20 17 20H11C6.58172 20 3 16.4183 3 12Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 12L7 16L11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="bottom-nav-label">History</span>
        </div>
      </div>

      {/* Modals */}
      {showDepositModal && (
        <div className="mobile-modal-overlay" onClick={() => setShowDepositModal(false)}>
          <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-modal-header">
              <h3>Deposit Funds</h3>
              <button onClick={() => setShowDepositModal(false)}>×</button>
            </div>
            <div className="mobile-modal-content">
              <p>Deposit functionality coming soon!</p>
              <button className="mobile-modal-btn" onClick={() => setShowDepositModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showWithdrawalModal && (
        <div className="mobile-modal-overlay" onClick={() => setShowWithdrawalModal(false)}>
          <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-modal-header">
              <h3>Withdraw Funds</h3>
              <button onClick={() => setShowWithdrawalModal(false)}>×</button>
            </div>
            <div className="mobile-modal-content">
              <p>Withdrawal functionality coming soon!</p>
              <button className="mobile-modal-btn" onClick={() => setShowWithdrawalModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showAccountModal && (
        <div className="mobile-modal-overlay" onClick={() => setShowAccountModal(false)}>
          <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-modal-header">
              <h3>Account Information</h3>
              <button onClick={() => setShowAccountModal(false)}>×</button>
            </div>
            <div className="mobile-modal-content">
              <p><strong>Account:</strong> EMMA BROWN 90993789</p>
              <p><strong>Currency:</strong> USD</p>
              <p><strong>Balance:</strong> $10,500.00</p>
              <button className="mobile-modal-btn" onClick={() => setShowAccountModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showTradeModal && (
        <div className="mobile-modal-overlay" onClick={() => setShowTradeModal(false)}>
          <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-modal-header">
              <h3>Trade & Transaction</h3>
              <button onClick={() => setShowTradeModal(false)}>×</button>
            </div>
            <div className="mobile-modal-content">
              <p>Trade functionality coming soon!</p>
              <button className="mobile-modal-btn" onClick={() => setShowTradeModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showHelpModal && (
        <div className="mobile-modal-overlay" onClick={() => setShowHelpModal(false)}>
          <div className="mobile-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-modal-header">
              <h3>Help Desk</h3>
              <button onClick={() => setShowHelpModal(false)}>×</button>
            </div>
            <div className="mobile-modal-content">
              <p>Contact support for assistance!</p>
              <button className="mobile-modal-btn" onClick={() => setShowHelpModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileView
