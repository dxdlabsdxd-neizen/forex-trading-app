import React, { useState } from 'react'
import './AccountStatistics.css'

const AccountStatistics = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('Today')

  if (!isOpen) return null

  return (
    <div className="account-statistics-overlay" onClick={onClose}>
      <div className="account-statistics-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="account-statistics-header">
          <h3 className="account-statistics-title">Account Statistics</h3>
          <button className="account-statistics-close" onClick={onClose}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="account-statistics-tabs">
          <button 
            className={`account-statistics-tab ${activeTab === 'Today' ? 'active' : ''}`}
            onClick={() => setActiveTab('Today')}
          >
            Today
          </button>
          <button 
            className={`account-statistics-tab ${activeTab === 'Week' ? 'active' : ''}`}
            onClick={() => setActiveTab('Week')}
          >
            Week
          </button>
          <button 
            className={`account-statistics-tab ${activeTab === 'All Time' ? 'active' : ''}`}
            onClick={() => setActiveTab('All Time')}
          >
            All Time
          </button>
        </div>

        {/* Key Performance Indicators */}
        <div className="account-statistics-kpis">
          <div className="kpi-item">
            <div className="kpi-label">Total P/L</div>
            <div className="kpi-value profit">$2,054.8</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-label">Average P/L</div>
            <div className="kpi-value">$285</div>
          </div>
          <div className="kpi-item">
            <div className="kpi-label">Max Drawdown</div>
            <div className="kpi-value">$250(104.29%)</div>
          </div>
        </div>

        {/* Statistics Chart Placeholder */}
        <div className="account-statistics-chart">
          <div className="chart-label">Statistics Chart</div>
        </div>

        {/* Statistics Grid */}
        <div className="account-statistics-grid">
          {/* Total Trades */}
          <div className="stat-box">
            <div className="stat-title">Total Trades <span className="stat-number">46</span></div>
            <div className="stat-bars">
              <div className="stat-bar-labels">
                <span className="stat-percentage">26%(12)</span>
                <span className="stat-percentage">79.3%(34)</span>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar profit" style={{width: '26%'}}></div>
                <div className="stat-bar loss" style={{width: '74%'}}></div>
              </div>
              <div className="stat-bar-legend">
                <span className="legend-item profit">Profit</span>
                <span className="legend-item">Break-even</span>
                <span className="legend-item loss">Loss</span>
              </div>
            </div>
          </div>

          {/* Profitable Total Trades */}
          <div className="stat-box">
            <div className="stat-title">Profitable Total Trades <span className="stat-number">42</span></div>
            <div className="stat-bars">
              <div className="stat-bar-labels">
                <span className="stat-percentage">26%(12)</span>
                <span className="stat-percentage">79.3%(34)</span>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar profit" style={{width: '26%'}}></div>
                <div className="stat-bar loss" style={{width: '74%'}}></div>
              </div>
              <div className="stat-bar-legend">
                <span className="legend-item profit">Profit</span>
                <span className="legend-item">Break-even</span>
                <span className="legend-item loss">Loss</span>
              </div>
            </div>
          </div>

          {/* Sum of Trades */}
          <div className="stat-box">
            <div className="stat-title">Sum of Trades</div>
            <div className="stat-bars">
              <div className="stat-bar-labels">
                <span className="stat-percentage">3,119.47 USD</span>
                <span className="stat-percentage">-988.54 USD</span>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar profit" style={{width: '26%'}}></div>
                <div className="stat-bar loss" style={{width: '74%'}}></div>
              </div>
              <div className="stat-bar-legend">
                <span className="legend-item profit">Profit</span>
                <span className="legend-item">Break-even</span>
                <span className="legend-item loss">Loss</span>
              </div>
            </div>
          </div>

          {/* Average profit/loss per trade */}
          <div className="stat-box">
            <div className="stat-title">Average profit/loss per trade</div>
            <div className="stat-bars">
              <div className="stat-bar-labels">
                <span className="stat-percentage">265.96 USD</span>
                <span className="stat-percentage">-29.07 USD</span>
              </div>
              <div className="stat-bar-container">
                <div className="stat-bar profit" style={{width: '62%'}}></div>
                <div className="stat-bar loss" style={{width: '38%'}}></div>
              </div>
              <div className="stat-bar-legend">
                <span className="legend-item profit">Profit</span>
                <span className="legend-item loss">Loss</span>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Charts */}
        <div className="account-statistics-circular">
          <div className="circular-chart-box">
            <div className="circular-chart-title">Average profit/loss per trade</div>
            <div className="circular-chart-container">
              <div className="circular-chart">
                <svg className="circular-chart-svg" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#e14145"
                    strokeWidth="6"
                    strokeDasharray="219.91"
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="circular-chart-text">
                <span className="circular-percentage">100.00%</span>
                <span className="circular-currency">CADJPY</span>
              </div>
            </div>
          </div>

          <div className="circular-chart-box">
            <div className="circular-chart-title">Average profit/loss per trade</div>
            <div className="circular-chart-container">
              <div className="circular-chart">
                <svg className="circular-chart-svg" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    fill="none"
                    stroke="#e14145"
                    strokeWidth="6"
                    strokeDasharray="219.91"
                    strokeDashoffset="21.991"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="circular-chart-text">
                <span className="circular-percentage">90.00%</span>
                <span className="circular-currency">GBPCHF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountStatistics
