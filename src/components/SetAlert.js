import React, { useState } from 'react'
import './SetAlert.css'
import trendupIcon from '../1.svg'

const SetAlert = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Set Alert')
  const [selectedInstrument, setSelectedInstrument] = useState('CADCHF')
  const [priceLevel, setPriceLevel] = useState('1.0820')
  const [condition, setCondition] = useState('ABOVE')
  const [notificationType, setNotificationType] = useState('POP-UP')

  if (!isOpen) return null

  const handleCreateAlert = () => {
    console.log('Creating alert:', { selectedInstrument, priceLevel, condition, notificationType })
    onClose()
  }

  return (
    <div className="set-alert-overlay" onClick={onClose}>
      <div className="set-alert-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="set-alert-header">
          <div className="set-alert-title">Set Alert</div>
          <button className="set-alert-close" onClick={onClose}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="set-alert-tabs">
          <div 
            className={`set-alert-tab ${activeTab === 'Set Alert' ? 'active' : ''}`}
            onClick={() => setActiveTab('Set Alert')}
          >
            Set Alert
          </div>
          <div className="set-alert-tab-separator"></div>
          <div 
            className={`set-alert-tab ${activeTab === 'Added Alerts' ? 'active' : ''}`}
            onClick={() => setActiveTab('Added Alerts')}
          >
            Added Alerts
          </div>
        </div>

        {/* Content */}
        <div className="set-alert-content">
          {activeTab === 'Set Alert' && (
            <div className="set-alert-form">
              <div className="set-alert-form-header">
                <h2 className="set-alert-form-title">Create New Price Alert</h2>
                <p className="set-alert-form-description">
                  Set price alerts for your favorite instrument to get notified when prices<br />
                  reach your target levels
                </p>
              </div>

              {/* Instrument Selection */}
              <div className="set-alert-field">
                <label className="set-alert-label">instrument</label>
                <div className="set-alert-instrument-input">
                  <div className="set-alert-instrument-left">
                    <div className="set-alert-trend-icon">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="#1D6CE9"/>
                      </svg>
                    </div>
                    <span className="set-alert-instrument-text">{selectedInstrument}</span>
                  </div>
                  <div className="set-alert-dropdown-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Price Level */}
              <div className="set-alert-field">
                <label className="set-alert-label">Price Level</label>
                <div className="set-alert-price-input">
                  <span className="set-alert-price-text">{priceLevel}</span>
                </div>
              </div>

              {/* Condition */}
              <div className="set-alert-field">
                <label className="set-alert-label">Condition</label>
                <div className="set-alert-condition-buttons">
                  <button 
                    className={`set-alert-condition-btn ${condition === 'ABOVE' ? 'active above' : ''}`}
                    onClick={() => setCondition('ABOVE')}
                  >
                    ABOVE
                  </button>
                  <button 
                    className={`set-alert-condition-btn ${condition === 'EQUAL' ? 'active equal' : ''}`}
                    onClick={() => setCondition('EQUAL')}
                  >
                    EQUAL
                  </button>
                  <button 
                    className={`set-alert-condition-btn ${condition === 'BELOW' ? 'active below' : ''}`}
                    onClick={() => setCondition('BELOW')}
                  >
                    BELOW
                  </button>
                </div>
              </div>

              {/* Notification Type */}
              <div className="set-alert-field">
                <label className="set-alert-label">Notification Type</label>
                <div className="set-alert-notification-buttons">
                  <button 
                    className={`set-alert-notification-btn ${notificationType === 'POP-UP' ? 'active popup' : ''}`}
                    onClick={() => setNotificationType('POP-UP')}
                  >
                    POP-UP
                  </button>
                  <button 
                    className={`set-alert-notification-btn ${notificationType === 'E-MAIL' ? 'active email' : ''}`}
                    onClick={() => setNotificationType('E-MAIL')}
                  >
                    E-MAIL
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Added Alerts' && (
            <div className="set-alert-added-content">
              {/* Create New Price Alert Section */}
              <div className="set-alert-create-section">
                <h3 className="set-alert-create-title">Create New Price Alert</h3>
                <p className="set-alert-create-description">
                  Set price alerts for your favorite instrument to get notified when prices reach your target levels
                </p>
              </div>

              {/* Alert Entries */}
              <div className="set-alert-entries">
                {/* Alert Entry 1 */}
                <div className="set-alert-entry">
                  <div className="set-alert-entry-left">
                    <div className="set-alert-status">
                      <div className="set-alert-status-dot"></div>
                      <span className="set-alert-status-text">Active</span>
                    </div>
                    <div className="set-alert-instrument-info">
                      <div className="set-alert-instrument-icon">
                        <img src={trendupIcon} alt="trend up" width="13" height="9" />
                      </div>
                      <div className="set-alert-instrument-details">
                        <div className="set-alert-instrument-name">CADCHF</div>
                        <div className="set-alert-price-condition">&gt; 1.08450</div>
                      </div>
                    </div>
                  </div>
                  <div className="set-alert-entry-actions">
                    <button className="set-alert-deactivate-btn">Deactivate</button>
                    <button className="set-alert-delete-btn">
                      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58325 11.4166C2.26242 11.4166 1.98777 11.3024 1.75929 11.0739C1.53082 10.8454 1.41659 10.5708 1.41659 10.25V2.66663H0.833252V1.49996H3.74992V0.916626H7.24992V1.49996H10.1666V2.66663H9.58325V10.25C9.58325 10.5708 9.46902 10.8454 9.24054 11.0739C9.01207 11.3024 8.73742 11.4166 8.41659 11.4166H2.58325ZM8.41659 2.66663H2.58325V10.25H8.41659V2.66663ZM3.74992 9.08329H4.91659V3.83329H3.74992V9.08329ZM6.08325 9.08329H7.24992V3.83329H6.08325V9.08329Z" fill="#E14145"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Alert Entry 2 */}
                <div className="set-alert-entry">
                  <div className="set-alert-entry-left">
                    <div className="set-alert-status">
                      <div className="set-alert-status-dot"></div>
                      <span className="set-alert-status-text">Active</span>
                    </div>
                    <div className="set-alert-instrument-info">
                      <div className="set-alert-instrument-icon">
                        <img src={trendupIcon} alt="trend up" width="13" height="9" />
                      </div>
                      <div className="set-alert-instrument-details">
                        <div className="set-alert-instrument-name">CADCHF</div>
                        <div className="set-alert-price-condition">&gt; 1.08450</div>
                      </div>
                    </div>
                  </div>
                  <div className="set-alert-entry-actions">
                    <button className="set-alert-deactivate-btn">Deactivate</button>
                    <button className="set-alert-delete-btn">
                      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58325 11.4166C2.26242 11.4166 1.98777 11.3024 1.75929 11.0739C1.53082 10.8454 1.41659 10.5708 1.41659 10.25V2.66663H0.833252V1.49996H3.74992V0.916626H7.24992V1.49996H10.1666V2.66663H9.58325V10.25C9.58325 10.5708 9.46902 10.8454 9.24054 11.0739C9.01207 11.3024 8.73742 11.4166 8.41659 11.4166H2.58325ZM8.41659 2.66663H2.58325V10.25H8.41659V2.66663ZM3.74992 9.08329H4.91659V3.83329H3.74992V9.08329ZM6.08325 9.08329H7.24992V3.83329H6.08325V9.08329Z" fill="#E14145"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Alert Entry 3 */}
                <div className="set-alert-entry">
                  <div className="set-alert-entry-left">
                    <div className="set-alert-status">
                      <div className="set-alert-status-dot"></div>
                      <span className="set-alert-status-text">Active</span>
                    </div>
                    <div className="set-alert-instrument-info">
                      <div className="set-alert-instrument-icon">
                        <img src={trendupIcon} alt="trend up" width="13" height="9" />
                      </div>
                      <div className="set-alert-instrument-details">
                        <div className="set-alert-instrument-name">CADCHF</div>
                        <div className="set-alert-price-condition">&gt; 1.08450</div>
                      </div>
                    </div>
                  </div>
                  <div className="set-alert-entry-actions">
                    <button className="set-alert-deactivate-btn">Deactivate</button>
                    <button className="set-alert-delete-btn">
                      <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58325 11.4166C2.26242 11.4166 1.98777 11.3024 1.75929 11.0739C1.53082 10.8454 1.41659 10.5708 1.41659 10.25V2.66663H0.833252V1.49996H3.74992V0.916626H7.24992V1.49996H10.1666V2.66663H9.58325V10.25C9.58325 10.5708 9.46902 10.8454 9.24054 11.0739C9.01207 11.3024 8.73742 11.4166 8.41659 11.4166H2.58325ZM8.41659 2.66663H2.58325V10.25H8.41659V2.66663ZM3.74992 9.08329H4.91659V3.83329H3.74992V9.08329ZM6.08325 9.08329H7.24992V3.83329H6.08325V9.08329Z" fill="#E14145"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Button */}
        <div className="set-alert-footer">
          <button className="set-alert-create-btn" onClick={handleCreateAlert}>
            Create Alert
          </button>
        </div>
      </div>
    </div>
  )
}

export default SetAlert
