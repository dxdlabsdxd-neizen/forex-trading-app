import React, { useState } from 'react'
import './HistoryPage.css'

const HistoryPage = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('Transaction')
  const [selectedTrade, setSelectedTrade] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [modalHeight, setModalHeight] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [startHeight, setStartHeight] = useState(0)

  // Trade History Data (for Trade tab)
  const tradeData = [
    {
      id: 1,
      symbol: 'AUDUSD',
      type: 'Buy',
      enterPrice: '0.65419',
      closePrice: '0.65419',
      profit: '+$47.23',
      isProfit: true,
      // Detailed data for modal
      volume: '0.1',
      commission: '$5.40',
      swap: '$5.40',
      direction: 'Buy',
      pnl: '+$1.0548574',
      created: '06/09/2025',
      createdTime: '16:32:56',
      closed: '06/09/2025',
      closedTime: '16:32:56'
    },
    {
      id: 2,
      symbol: 'ASELSAN',
      type: 'Sell',
      enterPrice: '0.65419',
      closePrice: '0.65419',
      profit: '-$47.23',
      isProfit: false,
      // Detailed data for modal
      volume: '0.2',
      commission: '$8.20',
      swap: '$3.10',
      direction: 'Sell',
      pnl: '-$0.8548574',
      created: '05/09/2025',
      createdTime: '14:25:30',
      closed: '05/09/2025',
      closedTime: '18:45:12'
    },
    {
      id: 3,
      symbol: 'GARAN',
      type: 'Buy',
      enterPrice: '0.65419',
      closePrice: '0.65419',
      profit: '+$47.23',
      isProfit: true,
      // Detailed data for modal
      volume: '0.15',
      commission: '$6.80',
      swap: '$4.50',
      direction: 'Buy',
      pnl: '+$2.1548574',
      created: '04/09/2025',
      createdTime: '10:15:45',
      closed: '04/09/2025',
      closedTime: '15:30:20'
    }
  ]

  // Transaction History Data (for Transaction tab)
  const transactionData = [
    {
      type: 'Deposit',
      method: 'Bank',
      date: '06/09/2025',
      time: '16:32:56',
      amount: '+$500.00',
      status: 'Deposited',
      statusColor: '#1d6ce9'
    },
    {
      type: 'Withdrawal',
      method: 'Crypto',
      date: '06/09/2025',
      time: '16:32:56',
      amount: '+$500.00',
      status: 'Pending',
      statusColor: '#767676'
    },
    {
      type: 'Withdrawal',
      method: 'Bank',
      date: '06/09/2025',
      time: '16:32:56',
      amount: '+$500.00',
      status: 'Reject',
      statusColor: '#e14145'
    }
  ]

  // Handle trade row click
  const handleTradeClick = (trade) => {
    setSelectedTrade(trade)
    setShowModal(true)
    // Set initial height to ensure all content is visible
    const contentHeight = window.innerHeight - 87 // Full height minus navigation
    const maxHeight = window.innerHeight - 87 // Full height minus navigation
    setModalHeight(Math.min(contentHeight, maxHeight))
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowModal(false)
      setSelectedTrade(null)
      setIsClosing(false)
      setModalHeight(0) // Reset height
    }, 300) // Match animation duration
  }

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true)
    setStartY(e.clientY)
    const contentHeight = window.innerHeight - 87 // Full height minus navigation
    const maxHeight = window.innerHeight - 87 // Full height minus navigation
    const initialHeight = Math.min(contentHeight, maxHeight)
    setStartHeight(modalHeight || initialHeight)
    e.preventDefault()
  }

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging) return
    
    const deltaY = startY - e.clientY // Reverse because we're dragging up
    const maxContentHeight = window.innerHeight - 180 // More space above navigation
    const contentHeight = window.innerHeight - 87 // Full height minus navigation
    const minHeight = Math.min(contentHeight, maxContentHeight)
    const newHeight = Math.max(minHeight, Math.min(maxContentHeight, startHeight + deltaY))
    setModalHeight(newHeight)
  }

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false)
  }

  // Add event listeners for drag
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove)
      document.addEventListener('mouseup', handleDragEnd)
      document.addEventListener('touchmove', handleDragMove)
      document.addEventListener('touchend', handleDragEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleDragMove)
      document.removeEventListener('mouseup', handleDragEnd)
      document.removeEventListener('touchmove', handleDragMove)
      document.removeEventListener('touchend', handleDragEnd)
    }
  }, [isDragging, startY, startHeight])

  return (
    <div className="history-page-container">
      {/* Header Section */}
      <div className="history-header">
        <div className="header-bg">
          <div className="header-content">
            <div className="header-left">
              <div className="closed-position-title">
                <p>Closed Position</p>
              </div>
              <div className="pnl-section">
                <div className="pnl-label">
                  <p>Available Balance</p>
                </div>
                <div className="pnl-amount">
                  <p>$547.23</p>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="stat-item">
                <div className="stat-label">
                  <p>Transaction Fee($)</p>
                </div>
                <div className="stat-value">
                  <p>10.00</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  <p>Bank Commission($)</p>
                </div>
                <div className="stat-value">
                  <p>0.00</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-label">
                  <p>Balance</p>
                </div>
                <div className="stat-value">
                  <p>$10,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="header-shadow" />
        </div>
      </div>

      {/* Main Content */}
      <div className="history-main-content">
        {/* Tab Section */}
        <div className="history-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'Trade' ? 'active' : ''}`}
              onClick={() => setActiveTab('Trade')}
            >
              <p>Trade</p>
            </button>
            <button 
              className={`tab-button ${activeTab === 'Transaction' ? 'active' : ''}`}
              onClick={() => setActiveTab('Transaction')}
            >
              <p>Transaction</p>
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="transaction-table-container">
          <div className="table-header">
            <div className="header-row">
              <div className="header-cell symbol">
                <p>Symbol</p>
              </div>
              <div className="header-cell type">
                <p>Type</p>
              </div>
              <div className="header-cell enter-price">
                <p>Enter Price</p>
              </div>
              <div className="header-cell close-price">
                <p>Close Price</p>
              </div>
              <div className="header-cell profit">
                <p>Profit</p>
              </div>
            </div>
          </div>
          
          <div className="table-body">
            {activeTab === 'Trade' ? (
              // Trade History Data
              tradeData.map((trade, index) => (
                <div key={index} className="table-row clickable-row" onClick={() => handleTradeClick(trade)}>
                  <div className="table-cell symbol">
                    <p>{trade.symbol}</p>
                  </div>
                  <div className="table-cell type">
                    <p className={trade.type.toLowerCase()}>{trade.type}</p>
                  </div>
                  <div className="table-cell enter-price">
                    <p>{trade.enterPrice}</p>
                  </div>
                  <div className="table-cell close-price">
                    <p>{trade.closePrice}</p>
                  </div>
                  <div className="table-cell profit">
                    <p className={trade.isProfit ? 'profit-positive' : 'profit-negative'}>
                      {trade.profit}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              // Transaction History Data with same header structure
              transactionData.map((transaction, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell symbol">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <p style={{ 
                        fontSize: '10px', 
                        color: transaction.type === 'Deposit' ? '#1d6ce9' : '#0d3169',
                        fontWeight: '500',
                        margin: 0
                      }}>
                        {transaction.type}
                      </p>
                      <p style={{ 
                        fontSize: '12px', 
                        color: '#1e1e1e',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {transaction.method}
                      </p>
                    </div>
                  </div>
                  <div className="table-cell type">
                    <p>{transaction.date}</p>
                  </div>
                  <div className="table-cell enter-price">
                    <p>{transaction.time}</p>
                  </div>
                  <div className="table-cell close-price">
                    <p style={{ color: '#37be26' }}>{transaction.amount}</p>
                  </div>
                  <div className="table-cell profit">
                    <p style={{ color: transaction.statusColor }}>
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="history-bottom-nav">
        <div className="nav-item" onClick={() => onClose()}>
          <div className="nav-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20L12 8L18 14L24 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 4H18V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="nav-text">Market</span>
        </div>
        
        <div className="nav-item" onClick={() => onClose()}>
          <div className="nav-icon">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-0.5" y="0.5" width="5" height="9" transform="matrix(-1 0 0 1 8.66669 15)" stroke="white"/>
              <rect x="-0.5" y="0.5" width="5" height="15" transform="matrix(-1 0 0 1 16.6667 9)" stroke="white"/>
              <rect x="-0.5" y="0.5" width="5" height="21" transform="matrix(-1 0 0 1 24.6667 3)" stroke="white"/>
            </svg>
          </div>
          <span className="nav-text">Chart</span>
        </div>
        
        <div className="nav-item" onClick={() => onClose()}>
          <div className="nav-icon">
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_158_286)">
                <path d="M6.6949 24.9854C5.81283 24.9933 4.96364 24.6526 4.3335 24.038C3.70335 23.4235 3.34367 22.5853 3.33331 21.7072L3.33331 6.28812C3.34238 5.4087 3.70134 4.56875 4.33148 3.95239C4.96162 3.33604 5.81154 2.99358 6.6949 3.00009H21.9815C22.8649 2.99358 23.7148 3.33604 24.345 3.95239C24.9751 4.56875 25.3341 5.4087 25.3431 6.28812V12.9668H23.8709V6.28812C23.8619 5.79743 23.658 5.33026 23.304 4.98877C22.9499 4.64728 22.4745 4.45924 21.9815 4.46578H6.6949C6.20198 4.45924 5.72651 4.64728 5.37246 4.98877C5.01841 5.33026 4.81458 5.79743 4.80554 6.28812V21.7072C4.81586 22.1966 5.02041 22.662 5.37446 23.0017C5.72852 23.3413 6.20327 23.5276 6.6949 23.5197V24.9854Z" fill="white"/>
                <path d="M20.9219 7.34326H7.54425V8.78941H20.9219V7.34326Z" fill="white"/>
                <path d="M20.9219 10.3628H7.54425V11.8089H20.9219V10.3628Z" fill="white"/>
                <path d="M9.05048 24.9853H7.57825V14.8379H11.4208C11.9683 14.8392 12.4931 15.0563 12.8802 15.4418C13.2674 15.8272 13.4855 16.3496 13.4868 16.8947V18.4191C13.4843 18.9911 13.2559 19.5391 12.851 19.945C12.4461 20.3508 11.8971 20.5819 11.3226 20.5883H9.05048V24.9853ZM9.05048 16.2889V19.1226H11.3128C11.4994 19.1213 11.6779 19.0466 11.8093 18.9148C11.9408 18.783 12.0146 18.6048 12.0146 18.4191V16.8947C12.0146 16.738 11.952 16.5876 11.8406 16.4767C11.7293 16.3659 11.5782 16.3036 11.4208 16.3036L9.05048 16.2889Z" fill="white"/>
                <path d="M17.9378 14.5059L15.0032 25.0002H13.477L16.4116 14.5059H17.9378Z" fill="white"/>
                <path d="M23.8513 24.9853H21.0001C20.6096 24.9853 20.2351 24.8309 19.959 24.556C19.6829 24.2812 19.5278 23.9084 19.5278 23.5197V16.3133C19.5278 15.9246 19.6829 15.5518 19.959 15.2769C20.2351 15.0021 20.6096 14.8477 21.0001 14.8477H23.8709C24.2614 14.8477 24.6358 15.0021 24.9119 15.2769C25.188 15.5518 25.3431 15.9246 25.3431 16.3133V23.5197C25.3432 23.7138 25.3044 23.906 25.2292 24.0851C25.154 24.2642 25.0438 24.4267 24.905 24.563C24.7662 24.6994 24.6016 24.8069 24.4207 24.8794C24.2398 24.9519 24.0463 24.9879 23.8513 24.9853ZM21.0001 16.3036V23.5197H23.8807V16.3085L21.0001 16.3036Z" fill="white"/>
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
        
        <div className="nav-item active">
          <div className="nav-icon active">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 1.61354V6.04541C19.5 6.19234 19.4361 6.33325 19.3224 6.43714C19.2087 6.54103 19.0544 6.5994 18.8936 6.5994H14.0426C13.8817 6.5994 13.7275 6.54103 13.6138 6.43714C13.5001 6.33325 13.4362 6.19234 13.4362 6.04541C13.4362 5.89849 13.5001 5.75758 13.6138 5.65369C13.7275 5.5498 13.8817 5.49143 14.0426 5.49143H17.4302L15.606 3.82948C14.0659 2.41622 11.9747 1.61923 9.79181 1.61354H9.74532C7.5812 1.6073 5.50132 2.37943 3.95537 3.763C3.89911 3.81665 3.83161 3.85942 3.75689 3.88875C3.68217 3.91809 3.60175 3.93339 3.52042 3.93375C3.4391 3.93411 3.35852 3.91952 3.28349 3.89084C3.20846 3.86217 3.14051 3.82 3.08369 3.76685C3.02686 3.71369 2.98232 3.65064 2.95271 3.58144C2.92311 3.51223 2.90904 3.4383 2.91135 3.36403C2.91366 3.28976 2.93231 3.21667 2.96617 3.14911C3.00003 3.08156 3.04842 3.02092 3.10846 2.9708C4.87907 1.38197 7.26348 0.494303 9.74532 0.500028H9.79787C12.3022 0.505859 14.7015 1.42017 16.4681 3.04189L18.2872 4.70385V1.61354C18.2872 1.46661 18.3511 1.3257 18.4648 1.22181C18.5786 1.11792 18.7328 1.05955 18.8936 1.05955C19.0544 1.05955 19.2087 1.11792 19.3224 1.22181C19.4361 1.3257 19.5 1.46661 19.5 1.61354ZM16.0446 14.237C14.4997 15.6226 12.4197 16.3968 10.2547 16.392H10.2082C8.02531 16.3863 5.93414 15.5893 4.39399 14.1761L2.56979 12.5086H5.95745C6.11827 12.5086 6.27251 12.4502 6.38622 12.3463C6.49994 12.2424 6.56383 12.1015 6.56383 11.9546C6.56383 11.8077 6.49994 11.6668 6.38622 11.5629C6.27251 11.459 6.11827 11.4006 5.95745 11.4006H1.10638C0.94556 11.4006 0.791324 11.459 0.677605 11.5629C0.563887 11.6668 0.5 11.8077 0.5 11.9546V16.3865C0.5 16.5334 0.563887 16.6743 0.677605 16.7782C0.791324 16.8821 0.94556 16.9404 1.10638 16.9404C1.26721 16.9404 1.42144 16.8821 1.53516 16.7782C1.64888 16.6743 1.71277 16.5334 1.71277 16.3865V13.2915L3.53191 14.9581C5.29849 16.5798 7.69778 17.4941 10.2021 17.5H10.2547C12.7365 17.5057 15.1209 16.618 16.8915 15.0292C16.9516 14.9791 17 14.9184 17.0338 14.8509C17.0677 14.7833 17.0863 14.7102 17.0886 14.636C17.091 14.5617 17.0769 14.4878 17.0473 14.4186C17.0177 14.3494 16.9731 14.2863 16.9163 14.2332C16.8595 14.18 16.7915 14.1378 16.7165 14.1092C16.6415 14.0805 16.5609 14.0659 16.4796 14.0663C16.3982 14.0666 16.3178 14.0819 16.2431 14.1112C16.1684 14.1406 16.1009 14.1833 16.0446 14.237Z" fill="#1d6ce9"/>
            </svg>
          </div>
          <span className="nav-text">History</span>
        </div>
      </div>

      {/* Detailed Position Modal */}
      {showModal && selectedTrade && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div 
            className={`modal-content ${isClosing ? 'closing' : ''}`} 
            onClick={(e) => e.stopPropagation()}
            style={{ height: modalHeight || 'auto' }}
          >
            {/* Blue Background that extends behind navigation */}
            <div className="modal-background"></div>
            {/* Drag Handle */}
            <div 
              className="drag-handle"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              <div className="drag-indicator"></div>
            </div>

            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title">
                <p>{selectedTrade.symbol}</p>
              </div>
              <div className="modal-close" onClick={handleModalClose}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="modal-field">
                <div className="field-label">
                  <p>Enter Price</p>
                </div>
                <div className="field-value">
                  <p>{selectedTrade.enterPrice}</p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Current Price</p>
                </div>
                <div className="field-value">
                  <p>{selectedTrade.closePrice}</p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Volume</p>
                </div>
                <div className="field-value">
                  <p>{selectedTrade.volume}</p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Commission</p>
                </div>
                <div className="field-value">
                  <p>{selectedTrade.commission}</p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Swap</p>
                </div>
                <div className="field-value">
                  <p>{selectedTrade.swap}</p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Direction</p>
                </div>
                <div className="field-value">
                  <p style={{ color: selectedTrade.direction === 'Buy' ? '#1bb507' : '#e14145' }}>
                    {selectedTrade.direction}
                  </p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>P&L</p>
                </div>
                <div className="field-value">
                  <p style={{ color: selectedTrade.pnl.startsWith('+') ? '#1bb507' : '#e14145' }}>
                    {selectedTrade.pnl}
                  </p>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Created</p>
                </div>
                <div className="field-value">
                  <div style={{ textAlign: 'right' }}>
                    <p>{selectedTrade.created}</p>
                    <p>{selectedTrade.createdTime}</p>
                  </div>
                </div>
              </div>

              <div className="modal-field">
                <div className="field-label">
                  <p>Closed</p>
                </div>
                <div className="field-value">
                  <div style={{ textAlign: 'right' }}>
                    <p>{selectedTrade.closed}</p>
                    <p>{selectedTrade.closedTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HistoryPage
