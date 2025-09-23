# Forex Trading Platform Admin Panel

A comprehensive React.js admin panel template for forex trading platforms, designed exactly to match the provided Figma design specifications.

## Features

- **Exact Figma Design Implementation**: Pixel-perfect recreation of the provided design
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Modern React Architecture**: Built with React 18 and React Router
- **Professional UI Components**: Clean, modern interface with proper spacing and typography
- **Real-time Data Display**: Tables, statistics cards, and user management interfaces
- **Sidebar Navigation**: Easy navigation between different admin sections

## Design Specifications

- **Colors**: Exact color palette from Figma design
  - Primary Blue: #2f80ed
  - Success Green: #27ae60
  - Error Red: #eb5757
  - Gray tones: #d1d1d6, #efeff4, #8e8e93
- **Typography**: Roboto font family with exact weights and sizes
- **Layout**: Fixed header, sidebar navigation, and main content area
- **Components**: Statistics cards, data tables, user lists, action buttons

## Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Top navigation bar
│   └── Sidebar.js         # Left sidebar navigation
├── pages/
│   ├── Dashboard.js       # Main dashboard page
│   ├── Users.js          # User verification page
│   ├── Trades.js         # Deposit setup page
│   ├── Analytics.js      # Administration page
│   └── Settings.js       # Settings page
├── App.js                # Main application component
├── App.css              # Main stylesheet with Figma design
├── index.js             # Application entry point
└── index.css            # Global styles
```

## Dashboard Features

### Statistics Cards
- Total Users: 55
- Pending Deposits: 247
- Pending Withdrawals: 118
- Total Deposits/Withdrawals: $30,000.00

### Main Data Table
- User ID, Status, Name, Account Type
- Email, Phone, Credit, Balance
- Equity, Margin, Free Margin
- Pagination controls

### Side Panels
- **Active Users List**: Real-time user status and margin levels
- **Margin Call Alerts**: Users requiring immediate attention
- **Action Buttons**: Refresh, New Trader, Edit, Block, Delete
- **Pending Deposits**: Bank and Crypto deposit approvals
- **Pending Withdrawals**: Withdrawal request management

## Integration

This admin panel is designed to be easily integrated with your existing React.js forex trading website. Simply:

1. Copy the components and styles into your existing project
2. Update the routing to match your application structure
3. Connect the data tables to your backend APIs
4. Customize the sidebar navigation for your specific features

## Customization

The design is fully customizable while maintaining the exact Figma specifications:

- **Colors**: All colors are defined as CSS variables in App.css
- **Typography**: Roboto font family with specific weights
- **Layout**: Responsive grid system with exact spacing
- **Components**: Modular React components for easy modification

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is created as a template for forex trading platform admin panels. Feel free to use and modify according to your needs.
