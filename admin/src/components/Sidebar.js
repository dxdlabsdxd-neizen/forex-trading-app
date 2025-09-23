import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  FileText, 
  UserCheck,
  Settings,
  DollarSign
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard' },
    { path: '/users', icon: UserCheck, label: 'Users Verification' },
    { path: '/trades', icon: FileText, label: 'Deposit Setup' },
    { path: '/analytics', icon: Users, label: 'Administration' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  // Pending data for sidebar
  const pendingDeposits = [
    { user: 'Kutay Can', type: 'Bank', amount: '$500 Pending' },
    { user: 'Kutay Can', type: 'Crypto', amount: '$500 Pending' }
  ];

  const pendingWithdrawals = [
    { user: 'Kutay Can', type: 'Bank', amount: '$500 Pending' },
    { user: 'Kutay Can', type: 'Crypto', amount: '$500 Pending' }
  ];

  return (
    <aside className="sidebar">
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="sidebar-icon" size={24} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Content Container */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Pending Deposit Section */}
        <div className="sidebar-section">
          <h4 className="sidebar-section-title">Pending Deposit</h4>
          <div className="sidebar-table">
            <div className="sidebar-table-header">
              <span>User</span>
              <span>Type</span>
              <span>Approve Amount</span>
            </div>
            {pendingDeposits.map((deposit, index) => (
              <div key={index} className={`sidebar-table-row ${index % 2 === 0 ? '' : 'even'}`}>
                <span className="sidebar-cell">{deposit.user}</span>
                <span className="sidebar-cell">{deposit.type}</span>
                <button className="sidebar-pending-button">{deposit.amount}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Withdrawal Section */}
        <div className="sidebar-section">
          <h4 className="sidebar-section-title">Pending Withdrawal</h4>
          <div className="sidebar-table">
            <div className="sidebar-table-header">
              <span>User</span>
              <span>Type</span>
              <span>Approve Amount</span>
            </div>
            {pendingWithdrawals.map((withdrawal, index) => (
              <div key={index} className={`sidebar-table-row ${index % 2 === 0 ? '' : 'even'}`}>
                <span className="sidebar-cell">{withdrawal.user}</span>
                <span className="sidebar-cell">{withdrawal.type}</span>
                <button className="sidebar-pending-button">{withdrawal.amount}</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="footer">
          <div className="footer-text">isfinans.trade</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
