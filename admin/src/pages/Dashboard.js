import React from 'react';
import { Download } from 'lucide-react';

const Dashboard = () => {
  // Sample data matching the Figma design
  const statsData = [
    {
      type: 'split',
      sections: [
        {
          number: '55',
          label: 'Total Users',
          color: 'black'
        },
        {
          number: '$30,000.00',
          label: 'Net Profit',
          color: 'green'
        }
      ]
    },
    {
      type: 'split',
      sections: [
        {
          number: '247',
          label: 'Pending Deposit',
          color: 'blue'
        },
        {
          number: '118',
          label: 'Pending Withdrawal',
          color: 'red'
        }
      ]
    },
    {
      type: 'split',
      sections: [
        {
          number: '$30,000.00',
          label: 'Total Deposit',
          color: 'blue'
        },
        {
          number: '$30,000.00',
          label: 'Total Withdrawal',
          color: 'red'
        }
      ]
    }
  ];

  const tradersData = [
    {
      id: '895545',
      status: 'active',
      name: 'Kutay Amca',
      accountType: 'Standard',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: 'ENG',
      status: 'inactive',
      name: 'Kutay Amca',
      accountType: 'Premium',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: '895545',
      status: 'active',
      name: 'Kutay Amca',
      accountType: 'Standard',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: 'ENG',
      status: 'inactive',
      name: 'Kutay Amca',
      accountType: 'Premium',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: '895545',
      status: 'active',
      name: 'Kutay Amca',
      accountType: 'Standard',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: 'ENG',
      status: 'inactive',
      name: 'Kutay Amca',
      accountType: 'Premium',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: '895545',
      status: 'active',
      name: 'Kutay Amca',
      accountType: 'Standard',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    },
    {
      id: 'ENG',
      status: 'inactive',
      name: 'Kutay Amca',
      accountType: 'Premium',
      email: 'emmabrown@gmail.com',
      phone: '05338578747',
      credit: '$100',
      balance: '$100.00',
      equity: '$100.00',
      margin: '$100.00',
      freeMargin: '$100.00'
    }
  ];

  const activeUsersData = [
    { name: 'Kutay Can', marginLevel: '400%', status: 'active' },
    { name: 'Ahmet Amca', marginLevel: '74%', status: 'warning' }
  ];

  const marginCallData = [
    { name: 'Kutay Can', margin: '$123.01', marginLevel: '95%' }
  ];


  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div className="dashboard-main">
        {/* Stats Cards */}
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card split">
              {stat.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="stat-section">
                  <div className={`stat-number ${section.color}`}>
                    {section.number}
                  </div>
                  <div className={`stat-label ${section.color}`}>
                    {section.label}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="dashboard-header">
          <h2 className="dashboard-title">Traders Information</h2>
          <button className="export-button">
            <Download className="export-icon" size={14} />
            Export to Excel
          </button>
        </div>

        {/* Main Data Table */}
        <table className="data-table">
          <thead className="table-header">
            <tr>
              <th>User ID</th>
              <th>Status</th>
              <th>Name Surname</th>
              <th>Account Type</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Credit</th>
              <th>Balance</th>
              <th>Equity</th>
              <th>Margin</th>
              <th>Free Margin</th>
            </tr>
          </thead>
          <tbody>
            {tradersData.map((trader, index) => (
              <tr key={index} className={`table-row ${index % 2 === 0 ? '' : 'even'}`}>
                <td className="table-cell">{trader.id}</td>
                <td className="table-cell">
                  <span className={`status-indicator ${trader.status === 'active' ? '' : 'red'}`}></span>
                </td>
                <td className="table-cell">{trader.name}</td>
                <td className="table-cell">{trader.accountType}</td>
                <td className="table-cell">{trader.email}</td>
                <td className="table-cell">{trader.phone}</td>
                <td className="table-cell">{trader.credit}</td>
                <td className="table-cell">{trader.balance}</td>
                <td className="table-cell">{trader.equity}</td>
                <td className="table-cell">{trader.margin}</td>
                <td className="table-cell">{trader.freeMargin}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button className="pagination-button disabled">Previous</button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button blue">3</button>
          <button className="pagination-button blue">4</button>
          <button className="pagination-button">5</button>
          <button className="pagination-button">...</button>
          <button className="pagination-button">31</button>
          <button className="pagination-button blue">Next</button>
          <button className="pagination-button blue">Show all</button>
        </div>
      </div>

      {/* Side Panels */}
      <div className="side-panels">
        {/* Active Users Panel */}
        <div className="side-panel">
          <h3 className="panel-title">List of active people</h3>
          <table className="user-list">
            <thead className="user-list-header">
              <tr>
                <th>Status</th>
                <th>User</th>
                <th>Margin Level</th>
              </tr>
            </thead>
            <tbody>
              {activeUsersData.map((user, index) => (
                <tr key={index} className={`user-row ${index % 2 === 0 ? '' : 'even'}`}>
                  <td className="user-cell">
                    <span className={`status-indicator ${user.status === 'active' ? '' : 'red'}`}></span>
                  </td>
                  <td className="user-cell">{user.name}</td>
                  <td className={`user-cell ${user.status === 'warning' ? 'red' : ''}`}>
                    {user.marginLevel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Margin Call Panel */}
        <div className="side-panel">
          <h3 className="panel-title red">Margin Call</h3>
          <table className="user-list">
            <thead className="user-list-header">
              <tr>
                <th>User</th>
                <th>Margin</th>
                <th>Margin Level</th>
              </tr>
            </thead>
            <tbody>
              {marginCallData.map((user, index) => (
                <tr key={index} className="user-row">
                  <td className="user-cell">{user.name}</td>
                  <td className="user-cell red">{user.margin}</td>
                  <td className="user-cell red">{user.marginLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-button">Refresh Data</button>
          <button className="action-button">New Trader</button>
          <button className="action-button">Edit Trader User</button>
          <button className="action-button">Block Trader</button>
          <button className="action-button">Delete Trader</button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
