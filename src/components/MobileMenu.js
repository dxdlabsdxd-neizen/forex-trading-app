import React, { useState, useEffect } from 'react'
import './MobileMenu.css'
import '../views/home.css'
import financeTradeImage from '../in.png'
import HistoryPage from './HistoryPage'
import PositionPage from './PositionPage'

const MobileMenu = ({ onNavigate, currentPage, onOpenDepositModal }) => {
  const [activeNavItem, setActiveNavItem] = useState('Market')
  const [currentModal, setCurrentModal] = useState(null) // null, 'History', 'Positions', 'AccountInfo', etc.
  const [showMenuContainer, setShowMenuContainer] = useState(false)
  const [helpDeskForm, setHelpDeskForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleNavClick = (navItem) => {
    setActiveNavItem(navItem)
    if (navItem === 'History') {
      setCurrentModal('History')
    } else if (navItem === 'Positions') {
      setCurrentModal('Positions')
    } else if (navItem === 'Market') {
      setCurrentModal('Market')
    } else if (navItem === 'Deposit') {
      if (onOpenDepositModal) {
        onOpenDepositModal()
      }
    } else if (navItem === 'Help Desk') {
      setCurrentModal('HelpDesk')
    } else {
      setCurrentModal(null)
    }
    console.log(`Navigating to ${navItem}`)
  }

  // Help Desk Form Functions
  const handleHelpDeskFormChange = (field, value) => {
    setHelpDeskForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleHelpDeskSubmit = () => {
    console.log('Help desk form submitted:', helpDeskForm)
    setCurrentModal(null)
  }

  const handleMenuClick = () => {
    setShowMenuContainer(!showMenuContainer)
    if (!showMenuContainer) {
      setCurrentModal(null)
    }
  }

  const handleMenuItemClick = (item) => {
    console.log(`Menu item clicked: ${item}`)
    if (item === 'Account Information') {
      setCurrentModal('AccountInfo')
    } else if (item === 'Withdrawal') {
      setCurrentModal('Withdrawal')
    } else if (item === 'Deposit') {
      setCurrentModal('Deposit')
    } else if (item === 'Trade & Transaction') {
      setCurrentModal('TradeTransaction')
    } else if (item === 'Help Desk') {
      setCurrentModal('HelpDesk')
    }
  }

  const handleCloseModal = () => {
    setCurrentModal(null)
    setActiveNavItem('Market')
  }

  // Handle window resize to close modals if screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && currentModal) {
        setCurrentModal(null)
        setActiveNavItem('Market')
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentModal])

  // Render different content based on current modal
  const renderModalContent = () => {
    switch (currentModal) {
      case 'History':
        return <HistoryPage onClose={handleCloseModal} onNavigateToPosition={() => handleNavClick('Positions')} />
      case 'Positions':
        return <PositionPage onClose={handleCloseModal} onNavigateToHistory={() => handleNavClick('History')} />
      case 'AccountInfo':
        return (
          <div className="mobile-modal-content">
            <div className="account-verification-container">
              <div className="nav-tabs">
                <div className="tab active">Personal Information</div>
              </div>
              
              <div className="account-verification-content">
                <div className="profile-icon-container">
                  <div className="profile-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="form-group inline-fields">
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="Emma Brown" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Emma Brown" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail Address</label>
                  <input type="email" id="email" className="form-control" placeholder="edgetrade@gmail.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="idNumber">ID Number</label>
                  <input type="text" id="idNumber" className="form-control" placeholder="0218704976265" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="text" id="dob" className="form-control" placeholder="dd/mm/yyyy" />
                </div>
                
                <button className="btn-upload">Upload Documents</button>
              </div>
            </div>
          </div>
        )
      case 'Withdrawal':
        return <div className="mobile-modal-content">Withdrawal Modal - Coming Soon</div>
      case 'Deposit':
        return <div className="mobile-modal-content">Deposit Modal - Coming Soon</div>
      case 'TradeTransaction':
        return <div className="mobile-modal-content">Trade & Transaction Modal - Coming Soon</div>
      case 'HelpDesk':
        return (
          <div className="mobile-modal-content">
            <div className="help-desk-container">
              <div className="help-desk-tab-container">
                <button className="help-desk-tab-button active">Contact Now</button>
              </div>
              
              <div className="help-desk-content">
                <h2 className="help-desk-section-title">Get in Touch</h2>
                <p className="help-desk-section-subtitle">We're here to help with any questions you might have</p>

                <div className="help-desk-contact-info-box">
                  <div className="help-desk-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M14.25 6C13.625 6 13.0938 5.78125 12.6562 5.34375C12.2188 4.90625 12 4.375 12 3.75C12 3.125 12.2188 2.59375 12.6562 2.15625C13.0938 1.71875 13.625 1.5 14.25 1.5C14.875 1.5 15.4062 1.71875 15.8438 2.15625C16.2812 2.59375 16.5 3.125 16.5 3.75C16.5 4.375 16.2812 4.90625 15.8438 5.34375C15.4062 5.78125 14.875 6 14.25 6ZM3 15C2.5875 15 2.23438 14.8531 1.94063 14.5594C1.64688 14.2656 1.5 13.9125 1.5 13.5V4.5C1.5 4.0875 1.64688 3.73438 1.94063 3.44063C2.23438 3.14688 2.5875 3 3 3H10.575C10.525 3.25 10.5 3.5 10.5 3.75C10.5 4 10.525 4.25 10.575 4.5C10.6625 4.9 10.8063 5.27188 11.0063 5.61563C11.2063 5.95938 11.45 6.2625 11.7375 6.525L9 8.25L3 4.5V6L9 9.75L12.9563 7.275C13.1688 7.35 13.3813 7.40625 13.5938 7.44375C13.8062 7.48125 14.025 7.5 14.25 7.5C14.65 7.5 15.0438 7.4375 15.4313 7.3125C15.8188 7.1875 16.175 7 16.5 6.75V13.5C16.5 13.9125 16.3531 14.2656 16.0594 14.5594C15.7656 14.8531 15.4125 15 15 15H3Z" fill="#1D6CE9"/>
                    </svg>
                  </div>
                  <div className="help-desk-contact-details">
                    <div className="help-desk-contact-label">Email Support</div>
                    <div className="help-desk-contact-email">support@forex.com</div>
                    <div className="help-desk-contact-status">Available 24/5</div>
                  </div>
                </div>

                <div className="help-desk-form">
                  <div className="help-desk-form-row">
                    <div className="help-desk-form-group">
                      <label htmlFor="helpDeskFullName" className="help-desk-form-label">Fast Name</label>
                      <input 
                        type="text" 
                        id="helpDeskFullName" 
                        className="help-desk-form-input" 
                        placeholder="Emma Brown"
                        value={helpDeskForm.fullName}
                        onChange={(e) => handleHelpDeskFormChange('fullName', e.target.value)}
                      />
                    </div>
                    <div className="help-desk-form-group">
                      <label htmlFor="helpDeskEmail" className="help-desk-form-label">Last Name</label>
                      <input 
                        type="text" 
                        id="helpDeskEmail" 
                        className="help-desk-form-input" 
                        placeholder="Emma Brown"
                        value={helpDeskForm.email}
                        onChange={(e) => handleHelpDeskFormChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="help-desk-form-group help-desk-full-width" style={{marginBottom: '1rem'}}>
                    <label htmlFor="helpDeskSubject" className="help-desk-form-label">E-mail Address</label>
                    <input 
                      type="email" 
                      id="helpDeskSubject" 
                      className="help-desk-form-input"
                      placeholder="edgetrade@gmail.com"
                      value={helpDeskForm.subject}
                      onChange={(e) => handleHelpDeskFormChange('subject', e.target.value)}
                    />
                  </div>

                  <div className="help-desk-form-group help-desk-full-width">
                    <label htmlFor="helpDeskMessage" className="help-desk-form-label">Message</label>
                    <textarea 
                      id="helpDeskMessage" 
                      className="help-desk-form-textarea"
                      placeholder=""
                      value={helpDeskForm.message}
                      onChange={(e) => handleHelpDeskFormChange('message', e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <button className="help-desk-send-button" onClick={handleHelpDeskSubmit}>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="mobile-menu-container">
      {/* Fixed Top Navigation - Hide for History and Position pages */}
      {currentModal !== 'History' && currentModal !== 'Positions' && (
        <div className="mobile-header">
          <div className="mobile-header-bg"></div>
          
          {/* Main Menu Buttons */}
          <div className="mobile-main-buttons">
          <div className="mobile-button-group">
            <div className="mobile-menu-btn active" onClick={handleMenuClick}>
              <div className="mobile-btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.65116 0H1.95349C1.43539 0 0.938514 0.205813 0.572164 0.572164C0.205813 0.938514 0 1.43539 0 1.95349V8.65116C0 8.9077 0.0505283 9.16172 0.1487 9.39873C0.246872 9.63574 0.390765 9.85109 0.572164 10.0325C0.753562 10.2139 0.968913 10.3578 1.20592 10.456C1.44293 10.5541 1.69695 10.6047 1.95349 10.6047H8.65116C8.9077 10.6047 9.16172 10.5541 9.39873 10.456C9.63574 10.3578 9.85109 10.2139 10.0325 10.0325C10.2139 9.85109 10.3578 9.63574 10.456 9.39873C10.5541 9.16172 10.6047 8.9077 10.6047 8.65116V1.95349C10.6047 1.69695 10.5541 1.44293 10.456 1.20592C10.3578 0.968913 10.2139 0.753562 10.0325 0.572164C9.85109 0.390765 9.63574 0.246872 9.39873 0.1487C9.16172 0.0505283 8.9077 0 8.65116 0ZM8.93023 8.65116C8.93023 8.72518 8.90083 8.79616 8.8485 8.8485C8.79616 8.90083 8.72518 8.93023 8.65116 8.93023H1.95349C1.87947 8.93023 1.80849 8.90083 1.75616 8.8485C1.70382 8.79616 1.67442 8.72518 1.67442 8.65116V1.95349C1.67442 1.87947 1.70382 1.80849 1.75616 1.75616C1.80849 1.70382 1.87947 1.67442 1.95349 1.67442H8.65116C8.72518 1.67442 8.79616 1.70382 8.8485 1.75616C8.90083 1.80849 8.93023 1.87947 8.93023 1.95349V8.65116ZM22.0465 0H15.3488C14.8307 0 14.3339 0.205813 13.9675 0.572164C13.6012 0.938514 13.3953 1.43539 13.3953 1.95349V8.65116C13.3953 8.9077 13.4459 9.16172 13.544 9.39873C13.6422 9.63574 13.7861 9.85109 13.9675 10.0325C14.1489 10.2139 14.3643 10.3578 14.6013 10.456C14.8383 10.5541 15.0923 10.6047 15.3488 10.6047H22.0465C22.303 10.6047 22.5571 10.5541 22.7941 10.456C23.0311 10.3578 23.2464 10.2139 23.4278 10.0325C23.6092 9.85109 23.7531 9.63574 23.8513 9.39873C23.9495 9.16172 24 8.9077 24 8.65116V1.95349C24 1.43539 23.7942 0.938514 23.4278 0.572164C23.0615 0.205813 22.5646 0 22.0465 0ZM22.3256 8.65116C22.3256 8.72518 22.2962 8.79616 22.2438 8.8485C22.1915 8.90083 22.1205 8.93023 22.0465 8.93023H15.3488C15.2748 8.93023 15.2038 8.90083 15.1515 8.8485C15.0992 8.79616 15.0698 8.72518 15.0698 8.65116V1.95349C15.0698 1.87947 15.0992 1.80849 15.1515 1.75616C15.2038 1.70382 15.2748 1.67442 15.3488 1.67442H22.0465C22.1205 1.67442 22.1915 1.70382 22.2438 1.75616C22.2962 1.80849 22.3256 1.87947 22.3256 1.95349V8.65116ZM8.65116 13.3953H1.95349C1.43539 13.3953 0.938514 13.6012 0.572164 13.9675C0.205813 14.3339 0 14.8307 0 15.3488V22.0465C0 22.5646 0.205813 23.0615 0.572164 23.4278C0.938514 23.7942 1.43539 24 1.95349 24H8.65116C8.9077 24 9.16172 23.9495 9.39873 23.8513C9.63574 23.7531 9.85109 23.6092 10.0325 23.4278C10.2139 23.2464 10.3578 23.0311 10.456 22.7941C10.5541 22.5571 10.6047 22.303 10.6047 22.0465V15.3488C10.6047 15.0923 10.5541 14.8383 10.456 14.6013C10.3578 14.3643 10.2139 14.1489 10.0325 13.9675C9.85109 13.7861 9.63574 13.6422 9.39873 13.544C9.16172 13.4459 8.9077 13.3953 8.65116 13.3953ZM8.93023 22.0465C8.93023 22.1205 8.90083 22.1915 8.8485 22.2438C8.79616 22.2962 8.72518 22.3256 8.65116 22.3256H1.95349C1.87947 22.3256 1.80849 22.2962 1.75616 22.2438C1.70382 22.1915 1.67442 22.1205 1.67442 22.0465V15.3488C1.67442 15.2748 1.70382 15.2038 1.75616 15.1515C1.80849 15.0992 1.87947 15.0698 1.95349 15.0698H8.65116C8.72518 15.0698 8.79616 15.0992 8.8485 15.1515C8.90083 15.2038 8.93023 15.2748 8.93023 15.3488V22.0465ZM22.0465 13.3953H15.3488C14.8307 13.3953 14.3339 13.6012 13.9675 13.9675C13.6012 14.3339 13.3953 14.8307 13.3953 15.3488V22.0465C13.3953 22.5646 13.6012 23.0615 13.9675 23.4278C14.3339 23.7942 14.8307 24 15.3488 24H22.0465C22.5646 24 23.0615 23.7942 23.4278 23.4278C23.7942 23.0615 24 22.5646 24 22.0465V15.3488C24 14.8307 23.7942 14.3339 23.4278 13.9675C23.0615 13.6012 22.5646 13.3953 22.0465 13.3953ZM22.3256 22.0465C22.3256 22.1205 22.2962 22.1915 22.2438 22.2438C22.1915 22.2962 22.1205 22.3256 22.0465 22.3256H15.3488C15.2748 22.3256 15.2038 22.2962 15.1515 22.2438C15.0992 22.1915 15.0698 22.1205 15.0698 22.0465V15.3488C15.0698 15.2748 15.0992 15.2038 15.1515 15.1515C15.2038 15.0992 15.2748 15.0698 15.3488 15.0698H22.0465C22.1205 15.0698 22.1915 15.0992 22.2438 15.1515C22.2962 15.2038 22.3256 15.2748 22.3256 15.3488V22.0465Z" fill="white"/>
                </svg>
              </div>
              <span className="mobile-btn-text">Menu</span>
            </div>
            
            <div className="mobile-menu-btn" onClick={() => handleNavClick('Deposit')}>
              <div className="mobile-btn-icon">
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3571 4.46512H2.58163C2.27041 4.46512 1.97193 4.31811 1.75186 4.05643C1.5318 3.79475 1.40816 3.43984 1.40816 3.06977C1.40816 2.6997 1.5318 2.34479 1.75186 2.08311C1.97193 1.82143 2.27041 1.67442 2.58163 1.67442H18.5408C18.7276 1.67442 18.9066 1.58621 19.0387 1.42921C19.1707 1.2722 19.2449 1.05925 19.2449 0.837209C19.2449 0.615168 19.1707 0.40222 19.0387 0.245213C18.9066 0.0882056 18.7276 0 18.5408 0H2.58163C1.89694 0 1.24029 0.323421 0.756142 0.899114C0.271992 1.47481 0 2.25561 0 3.06977V20.9302C0 21.7444 0.271992 22.5252 0.756142 23.1009C1.24029 23.6766 1.89694 24 2.58163 24H21.3571C21.7929 24 22.2107 23.7942 22.5188 23.4278C22.8269 23.0615 23 22.5646 23 22.0465V6.4186C23 5.90051 22.8269 5.40363 22.5188 5.03728C22.2107 4.67093 21.7929 4.46512 21.3571 4.46512ZM21.5918 22.0465C21.5918 22.1205 21.5671 22.1915 21.5231 22.2438C21.4791 22.2962 21.4194 22.3256 21.3571 22.3256H2.58163C2.27041 22.3256 1.97193 22.1786 1.75186 21.9169C1.5318 21.6552 1.40816 21.3003 1.40816 20.9302V5.80326C1.77122 6.02484 2.17354 6.14013 2.58163 6.13953H21.3571C21.4194 6.13953 21.4791 6.16894 21.5231 6.22127C21.5671 6.27361 21.5918 6.34459 21.5918 6.4186V22.0465ZM18.3061 13.6744C18.3061 13.9504 18.2373 14.2202 18.1084 14.4496C17.9794 14.6791 17.7961 14.8579 17.5817 14.9636C17.3673 15.0692 17.1314 15.0968 16.9037 15.043C16.6761 14.9891 16.467 14.8562 16.3029 14.6611C16.1388 14.4659 16.027 14.2173 15.9817 13.9466C15.9365 13.676 15.9597 13.3954 16.0485 13.1404C16.1373 12.8855 16.2877 12.6676 16.4807 12.5142C16.6737 12.3609 16.9006 12.2791 17.1327 12.2791C17.4439 12.2791 17.7424 12.4261 17.9624 12.6878C18.1825 12.9494 18.3061 13.3043 18.3061 13.6744Z" fill="white"/>
                </svg>
              </div>
              <span className="mobile-btn-text">Deposit</span>
            </div>
            
            <div className="mobile-menu-btn">
              <div className="mobile-btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 1.78723V15.0638C24 15.5378 23.8117 15.9924 23.4765 16.3276C23.1414 16.6628 22.6868 16.8511 22.2128 16.8511H7.72213L9.47745 18.6077C9.5527 18.6778 9.61306 18.7623 9.65493 18.8563C9.69679 18.9503 9.7193 19.0517 9.72112 19.1545C9.72293 19.2574 9.70401 19.3595 9.66549 19.4549C9.62696 19.5503 9.56962 19.6369 9.49689 19.7097C9.42416 19.7824 9.33752 19.8397 9.24214 19.8783C9.14677 19.9168 9.04461 19.9357 8.94176 19.9339C8.83892 19.9321 8.73749 19.9096 8.64354 19.8677C8.54958 19.8258 8.46502 19.7655 8.39489 19.6902L5.33106 16.6264C5.18763 16.4828 5.10706 16.2881 5.10706 16.0851C5.10706 15.8821 5.18763 15.6874 5.33106 15.5438L8.39489 12.48C8.54009 12.3447 8.73214 12.271 8.93058 12.2745C9.12901 12.278 9.31834 12.3584 9.45868 12.4988C9.59901 12.6391 9.6794 12.8284 9.6829 13.0269C9.6864 13.2253 9.61275 13.4174 9.47745 13.5626L7.72213 15.3191H22.2128C22.2805 15.3191 22.3454 15.2922 22.3933 15.2444C22.4412 15.1965 22.4681 15.1315 22.4681 15.0638V1.78723C22.4681 1.71952 22.4412 1.65458 22.3933 1.6067C22.3454 1.55881 22.2805 1.53191 22.2128 1.53191H7.91489C7.84718 1.53191 7.78224 1.55881 7.73436 1.6067C7.68647 1.65458 7.65957 1.71952 7.65957 1.78723V2.80851C7.65957 3.01166 7.57888 3.20648 7.43523 3.35012C7.29159 3.49377 7.09676 3.57447 6.89362 3.57447C6.69047 3.57447 6.49565 3.49377 6.352 3.35012C6.20836 3.20648 6.12766 3.01166 6.12766 2.80851V1.78723C6.12766 1.31323 6.31596 0.85864 6.65113 0.523469C6.9863 0.188297 7.44089 0 7.91489 0H22.2128C22.6868 0 23.1414 0.188297 23.4765 0.523469C23.8117 0.85864 24 1.31323 24 1.78723ZM17.1064 20.4255C16.9032 20.4255 16.7084 20.5062 16.5648 20.6499C16.4211 20.7935 16.3404 20.9883 16.3404 21.1915V22.2128C16.3404 22.2805 16.3135 22.3454 16.2656 22.3933C16.2178 22.4412 16.1528 22.4681 16.0851 22.4681H1.78723C1.71952 22.4681 1.65458 22.4412 1.6067 22.3933C1.55881 22.3454 1.53191 22.2805 1.53191 22.2128V8.93617C1.53191 8.86845 1.55881 8.80351 1.6067 8.75563C1.65458 8.70775 1.71952 8.68085 1.78723 8.68085H16.2779L14.5226 10.4374C14.4473 10.5076 14.3869 10.5921 14.3451 10.6861C14.3032 10.78 14.2807 10.8815 14.2789 10.9843C14.2771 11.0872 14.296 11.1893 14.3345 11.2847C14.373 11.3801 14.4304 11.4667 14.5031 11.5394C14.5758 11.6122 14.6625 11.6695 14.7579 11.708C14.8532 11.7466 14.9554 11.7655 15.0582 11.7637C15.1611 11.7619 15.2625 11.7393 15.3565 11.6975C15.4504 11.6556 15.535 11.5953 15.6051 11.52L18.6689 8.45617C18.8124 8.31255 18.8929 8.11787 18.8929 7.91489C18.8929 7.71191 18.8124 7.51723 18.6689 7.37362L15.6051 4.30979C15.4599 4.17449 15.2679 4.10083 15.0694 4.10433C14.871 4.10783 14.6817 4.18822 14.5413 4.32856C14.401 4.46889 14.3206 4.65822 14.3171 4.85666C14.3136 5.05509 14.3873 5.24714 14.5226 5.39234L16.2779 7.14894H1.78723C1.31323 7.14894 0.85864 7.33723 0.523469 7.6724C0.188297 8.00758 0 8.46217 0 8.93617V22.2128C0 22.6868 0.188297 23.1414 0.523469 23.4765C0.85864 23.8117 1.31323 24 1.78723 24H16.0851C16.5591 24 17.0137 23.8117 17.3489 23.4765C17.684 23.1414 17.8723 22.6868 17.8723 22.2128V21.1915C17.8723 20.9883 17.7916 20.7935 17.648 20.6499C17.5044 20.5062 17.3095 20.4255 17.1064 20.4255Z" fill="white"/>
                </svg>
              </div>
              <span className="mobile-btn-text">Trade</span>
            </div>
          </div>
        </div>
        
          {/* User Info */}
          <div className="mobile-user-info">
            <span className="mobile-user-text">EMMA BROWN 90993789 - USD</span>
          </div>
          
          {/* Fixed Gap Space */}
          <div className="mobile-gap-space"></div>
        </div>
      )}

      {/* Dynamic Content Area - Where all modals will open */}
      <div className={`mobile-content-area ${currentModal === 'History' || currentModal === 'Positions' ? 'full-screen' : ''}`}>
       
        {currentModal ? (
          renderModalContent()
        ) : showMenuContainer ? (
          // Default menu content when menu is opened
          
          <div className="mobile-menu-content">
            <div className="mobile-menu-items">
              <button className="mobile-menu-item" onClick={() => handleMenuItemClick('Account Information')}>
                <span className="mobile-menu-text">Account Information</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="mobile-menu-item" onClick={() => handleMenuItemClick('Withdrawal')}>
                <span className="mobile-menu-text">Withdrawal</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="mobile-menu-item" onClick={() => handleMenuItemClick('Deposit')}>
                <span className="mobile-menu-text">Deposit</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="mobile-menu-item" onClick={() => handleMenuItemClick('Trade & Transaction')}>
                <span className="mobile-menu-text">Trade & Transaction</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="mobile-menu-item" onClick={() => handleMenuItemClick('Help Desk')}>
                <span className="mobile-menu-text">Help Desk</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Footer Section with Logo and Disclaimer */}
            <div className="mobile-footer-section">
              <div className="mobile-logo-section">
                <div className="mobile-logo">
                  <img 
                    src={financeTradeImage} 
                    alt="Finance Trade Logo" 
                    className="mobile-logo-image"
                  />
                </div>
                
                <div className="mobile-legal-links">
                  <a href="#" className="mobile-legal-link">TERMS OF USE</a>
                  <a href="#" className="mobile-legal-link">PRIVACY POLICY</a>
                </div>
                
                <div className="mobile-disclaimer">
                  <p className="mobile-disclaimer-text">
                    TRADE RESPONSIBLY: TRADING CFDS IS RISKY AND MAY LEAD TO PERMANENT CAPITAL LOSS. 
                    MAKE SURE YOU UNDERSTAND THE RISKS BEFORE TRADING.
                  </p>
                </div>
                
                <div className="mobile-copyright">
                  <span className="mobile-copyright-text">2025 EDGETRADE™</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Fixed Bottom Navigation - Exact copy from Position page */}
      <div className="position-bottom-nav">
        <div className={`nav-item ${activeNavItem === 'Market' ? 'active' : ''}`} onClick={() => handleNavClick('Market')}>
          <div className="nav-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 5.55774V11.507C25 11.6549 24.9367 11.7967 24.8241 11.9013C24.7115 12.0059 24.5588 12.0647 24.3996 12.0647C24.2404 12.0647 24.0876 12.0059 23.975 11.9013C23.8624 11.7967 23.7992 11.6549 23.7992 11.507V6.90375L15.2173 14.8757C15.1048 14.9801 14.9522 15.0388 14.7931 15.0388C14.6339 15.0388 14.4813 14.9801 14.3688 14.8757L10.7903 11.5525L4.00972 17.8503C3.8959 17.9488 3.74536 18.0025 3.58982 17.9999C3.43427 17.9974 3.28586 17.9388 3.17586 17.8366C3.06585 17.7345 3.00284 17.5966 3.00009 17.4521C2.99735 17.3076 3.05509 17.1678 3.16114 17.062L10.366 10.3692C10.4786 10.2647 10.6312 10.2061 10.7903 10.2061C10.9494 10.2061 11.102 10.2647 11.2146 10.3692L14.7931 13.6924L22.9506 6.11548H17.9952C17.836 6.11548 17.6833 6.05672 17.5707 5.95212C17.4581 5.84752 17.3948 5.70566 17.3948 5.55774C17.3948 5.40982 17.4581 5.26795 17.5707 5.16336C17.6833 5.05876 17.836 5 17.9952 5H24.3996C24.5588 5 24.7115 5.05876 24.8241 5.16336C24.9367 5.26795 25 5.40982 25 5.55774Z" fill={activeNavItem === 'Market' ? '#1D6CE9' : 'white'}/>
              <path d="M19.9346 23H1.93457H26.0654" stroke={activeNavItem === 'Market' ? '#1D6CE9' : 'white'}/>
            </svg>
          </div>
          <span className="nav-text">Market</span>
        </div>
        
        <div className={`nav-item ${activeNavItem === 'Chart' ? 'active' : ''}`} onClick={() => handleNavClick('Chart')}>
          <div className="nav-icon">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.5" y="0.5" width="5" height="9" transform="matrix(-1 0 0 1 8.66669 15)" stroke={activeNavItem === 'Chart' ? '#1D6CE9' : 'white'}/>
              <rect x="-0.5" y="0.5" width="5" height="15" transform="matrix(-1 0 0 1 16.6667 9)" stroke={activeNavItem === 'Chart' ? '#1D6CE9' : 'white'}/>
              <rect x="-0.5" y="0.5" width="5" height="21" transform="matrix(-1 0 0 1 24.6667 3)" stroke={activeNavItem === 'Chart' ? '#1D6CE9' : 'white'}/>
            </svg>
          </div>
          <span className="nav-text">Chart</span>
        </div>
        
        <div className={`nav-item ${activeNavItem === 'Positions' ? 'active' : ''}`} onClick={() => handleNavClick('Positions')}>
          <div className="nav-icon">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_158_286)">
                <path d="M6.6949 24.9854C5.81283 24.9933 4.96364 24.6526 4.3335 24.038C3.70335 23.4235 3.34367 22.5853 3.33331 21.7072L3.33331 6.28812C3.34238 5.4087 3.70134 4.56875 4.33148 3.95239C4.96162 3.33604 5.81154 2.99358 6.6949 3.00009H21.9815C22.8649 2.99358 23.7148 3.33604 24.345 3.95239C24.9751 4.56875 25.3341 5.4087 25.3431 6.28812V12.9668H23.8709V6.28812C23.8619 5.79743 23.658 5.33026 23.304 4.98877C22.9499 4.64728 22.4745 4.45924 21.9815 4.46578H6.6949C6.20198 4.45924 5.72651 4.64728 5.37246 4.98877C5.01841 5.33026 4.81458 5.79743 4.80554 6.28812V21.7072C4.81586 22.1966 5.02041 22.662 5.37446 23.0017C5.72852 23.3413 6.20327 23.5276 6.6949 23.5197V24.9854Z" fill={activeNavItem === 'Positions' ? '#1D6CE9' : 'white'}/>
                <path d="M20.9219 7.34326H7.54425V8.78941H20.9219V7.34326Z" fill={activeNavItem === 'Positions' ? '#1D6CE9' : 'white'}/>
                <path d="M20.9219 10.3628H7.54425V11.8089H20.9219V10.3628Z" fill={activeNavItem === 'Positions' ? '#1D6CE9' : 'white'}/>
                <path d="M9.05048 24.9853H7.57825V14.8379H11.4208C11.9683 14.8392 12.4931 15.0563 12.8802 15.4418C13.2674 15.8272 13.4855 16.3496 13.4868 16.8947V18.4191C13.4843 18.9911 13.2559 19.5391 12.851 19.945C12.4461 20.3508 11.8971 20.5819 11.3226 20.5883H9.05048V24.9853ZM9.05048 16.2889V19.1226H11.3128C11.4994 19.1213 11.6779 19.0466 11.8093 18.9148C11.9408 18.783 12.0146 18.6048 12.0146 18.4191V16.8947C12.0146 16.738 11.952 16.5876 11.8406 16.4767C11.7293 16.3659 11.5782 16.3036 11.4208 16.3036L9.05048 16.2889Z" fill={activeNavItem === 'Positions' ? '#1D6CE9' : 'white'}/>
                <path d="M17.9378 14.5059L15.0032 25.0002H13.477L16.4116 14.5059H17.9378Z" fill={activeNavItem === 'Positions' ? '#1D6CE9' : 'white'}/>
                <path d="M23.8513 24.9853H21.0001C20.6096 24.9853 20.2351 24.8309 19.959 24.556C19.6829 24.2812 19.5278 23.9084 19.5278 23.5197V16.3133C19.5278 15.9246 19.6829 15.5518 19.959 15.2769C20.2351 15.0021 20.6096 14.8477 21.0001 14.8477H23.8709C24.2614 14.8477 24.6358 15.0021 24.9119 15.2769C25.188 15.5518 25.3431 15.9246 25.3431 16.3133V23.5197C25.3432 23.7138 25.3044 23.906 25.2292 24.0851C25.154 24.2642 25.0438 24.4267 24.905 24.563C24.7662 24.6994 24.6016 24.8069 24.4207 24.8794C24.2398 24.9519 24.0463 24.9879 23.8513 24.9853ZM21.0001 16.3036V23.5197H23.8807V16.3085L21.0001 16.3036Z" fill={activeNavItem === 'Positions' ? '#1D6CE9' : 'white'}/>
              </g>
              <defs>
                <clipPath id="clip0_158_286">
                  <rect width="22" height="22" fill="white" transform="translate(3.33331 3)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="nav-text">Positions</span>
        </div>
        
        <div className={`nav-item ${activeNavItem === 'History' ? 'active' : ''}`} onClick={() => handleNavClick('History')}>
          <div className="nav-icon">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 1.61354V6.04541C19.5 6.19234 19.4361 6.33325 19.3224 6.43714C19.2087 6.54103 19.0544 6.5994 18.8936 6.5994H14.0426C13.8817 6.5994 13.7275 6.54103 13.6138 6.43714C13.5001 6.33325 13.4362 6.19234 13.4362 6.04541C13.4362 5.89849 13.5001 5.75758 13.6138 5.65369C13.7275 5.5498 13.8817 5.49143 14.0426 5.49143H17.4302L15.606 3.82948C14.0659 2.41622 11.9747 1.61923 9.79181 1.61354H9.74532C7.5812 1.6073 5.50132 2.37943 3.95537 3.763C3.89911 3.81665 3.83161 3.85942 3.75689 3.88875C3.68217 3.91809 3.60175 3.93339 3.52042 3.93375C3.4391 3.93411 3.35852 3.91952 3.28349 3.89084C3.20846 3.86217 3.14051 3.82 3.08369 3.76685C3.02686 3.71369 2.98232 3.65064 2.95271 3.58144C2.92311 3.51223 2.90904 3.4383 2.91135 3.36403C2.91366 3.28976 2.93231 3.21667 2.96617 3.14911C3.00003 3.08156 3.04842 3.02092 3.10846 2.9708C4.87907 1.38197 7.26348 0.494303 9.74532 0.500028H9.79787C12.3022 0.505859 14.7015 1.42017 16.4681 3.04189L18.2872 4.70385V1.61354C18.2872 1.46661 18.3511 1.3257 18.4648 1.22181C18.5786 1.11792 18.7328 1.05955 18.8936 1.05955C19.0544 1.05955 19.2087 1.11792 19.3224 1.22181C19.4361 1.3257 19.5 1.46661 19.5 1.61354ZM16.0446 14.237C14.4997 15.6226 12.4197 16.3968 10.2547 16.392H10.2082C8.02531 16.3863 5.93414 15.5893 4.39399 14.1761L2.56979 12.5086H5.95745C6.11827 12.5086 6.27251 12.4502 6.38622 12.3463C6.49994 12.2424 6.56383 12.1015 6.56383 11.9546C6.56383 11.8077 6.49994 11.6668 6.38622 11.5629C6.27251 11.459 6.11827 11.4006 5.95745 11.4006H1.10638C0.94556 11.4006 0.791324 11.459 0.677605 11.5629C0.563887 11.6668 0.5 11.8077 0.5 11.9546V16.3865C0.5 16.5334 0.563887 16.6743 0.677605 16.7782C0.791324 16.8821 0.94556 16.9404 1.10638 16.9404C1.26721 16.9404 1.42144 16.8821 1.53516 16.7782C1.64888 16.6743 1.71277 16.5334 1.71277 16.3865V13.2915L3.53191 14.9581C5.29849 16.5798 7.69778 17.4941 10.2021 17.5H10.2547C12.7365 17.5057 15.1209 16.618 16.8915 15.0292C16.9516 14.9791 17 14.9184 17.0338 14.8509C17.0677 14.7833 17.0863 14.7102 17.0886 14.636C17.091 14.5617 17.0769 14.4878 17.0473 14.4186C17.0177 14.3494 16.9731 14.2863 16.9163 14.2332C16.8595 14.18 16.7915 14.1378 16.7165 14.1092C16.6415 14.0805 16.5609 14.0659 16.4796 14.0663C16.3982 14.0666 16.3178 14.0819 16.2431 14.1112C16.1684 14.1406 16.1009 14.1833 16.0446 14.237Z" fill={activeNavItem === 'History' ? '#1D6CE9' : 'white'}/>
            </svg>
          </div>
          <span className="nav-text">History</span>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu