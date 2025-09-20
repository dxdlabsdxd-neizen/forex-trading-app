import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import './home.css'
import AccountStatistics from '../components/AccountStatistics'
import SetAlert from '../components/SetAlert'

const Home = (props) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)
  const [hoveredChart, setHoveredChart] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState(null)
  const [selectedChartCategory, setSelectedChartCategory] = useState('All')
  const [showOrderPanel, setShowOrderPanel] = useState(false)
  const [activeTab, setActiveTab] = useState('MARKET')
  const [volume, setVolume] = useState('0.01')
  const [stopLoss, setStopLoss] = useState(false)
  const [takeProfit, setTakeProfit] = useState(false)
  const [selectedPair, setSelectedPair] = useState('CADCHF')
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [settingsActiveTab, setSettingsActiveTab] = useState('General')
  const [enableNotification, setEnableNotification] = useState(true)
  const [soundAlerts, setSoundAlerts] = useState(true)
  const [tradeExecution, setTradeExecution] = useState(true)
  const [priceAlerts, setPriceAlerts] = useState(true)
  const [accountUpdates, setAccountUpdates] = useState(true)
  const [newsUpdates, setNewsUpdates] = useState(true)
  const [timezone, setTimezone] = useState('UTC (Coordinated Universal Time)')
  const [language, setLanguage] = useState('English')
  const [theme, setTheme] = useState('Light')
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [activeCurrencyTabs, setActiveCurrencyTabs] = useState([])
  const [chartWidgets, setChartWidgets] = useState([])
  const [selectedChartPair, setSelectedChartPair] = useState('')
  const [showTradesView, setShowTradesView] = useState(false)
  const [tradesActiveTab, setTradesActiveTab] = useState('Trades')
  const [tradesFilter, setTradesFilter] = useState('All')
  const [showWatchlistView, setShowWatchlistView] = useState(false)
  const [watchlistActiveTab, setWatchlistActiveTab] = useState('Watchlist')
  const [showPositionsView, setShowPositionsView] = useState(false)
  const [positionsActiveTab, setPositionsActiveTab] = useState('Positions')
  const [showAccountVerification, setShowAccountVerification] = useState(false)
  const [showDepositModal, setShowDepositModal] = useState(false)
  const [depositPage, setDepositPage] = useState(1)
  const [depositMethod, setDepositMethod] = useState('bank')
  const [depositAmount, setDepositAmount] = useState('100')
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false)
  const [withdrawalAmount, setWithdrawalAmount] = useState('100')
  const [withdrawalMethod, setWithdrawalMethod] = useState('bank')
  const [withdrawalPage, setWithdrawalPage] = useState(1)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [searchActiveTab, setSearchActiveTab] = useState('MARKET')
  const [showHelpDeskModal, setShowHelpDeskModal] = useState(false)
  const [helpDeskForm, setHelpDeskForm] = useState({
    fullName: 'Emma',
    email: 'Brown',
    subject: '',
    message: 'English'
  })
  const [showAccountStatistics, setShowAccountStatistics] = useState(false)
  const [showSetAlert, setShowSetAlert] = useState(false)


  // Forex pairs data with prices
  const forexPairs = [
    { name: 'CADCHF', buyPrice: '0.546489', sellPrice: '0.546489' },
    { name: 'CADJPY', buyPrice: '108.234', sellPrice: '108.124' },
    { name: 'CHFJPY', buyPrice: '165.789', sellPrice: '165.645' },
    { name: 'EURUSD', buyPrice: '1.09123', sellPrice: '1.09098' },
    { name: 'GBPUSD', buyPrice: '1.26789', sellPrice: '1.26745' },
    { name: 'USDJPY', buyPrice: '149.234', sellPrice: '149.189' },
    { name: 'AUDUSD', buyPrice: '0.65234', sellPrice: '0.65198' },
    { name: 'USDCAD', buyPrice: '1.35678', sellPrice: '1.35634' }
  ]

  // Sample trades data
  const tradesData = [
    {
      id: 1,
      time: '06/09/2025 15:56:54',
      order: '856411',
      instrument: 'USDJPY',
      description: 'DOLLAR Vs Japanese Yen',
      type: 'BUY',
      quantity: '1.0',
      price: '106,560',
      swaps: '$0.50',
      commission: '107,566',
      taxesFees: '-',
      pnl: '-'
    },
    {
      id: 2,
      time: '06/09/2025 14:32:15',
      order: '856410',
      instrument: 'EURUSD',
      description: 'EURO Vs US Dollar',
      type: 'SELL',
      quantity: '0.5',
      price: '1.09123',
      swaps: '-$0.25',
      commission: '1,091',
      taxesFees: '-',
      pnl: '+$15.50'
    },
    {
      id: 3,
      time: '06/09/2025 13:45:22',
      order: '856409',
      instrument: 'GBPUSD',
      description: 'British Pound Vs US Dollar',
      type: 'BUY',
      quantity: '2.0',
      price: '1.26789',
      swaps: '$1.20',
      commission: '2,536',
      taxesFees: '-',
      pnl: '-$8.75'
    }
  ]

  // Sample transactions data
  const transactionsData = [
    {
      id: 1,
      time: '05/09/2025 15:56:54',
      order: '856411',
      instrument: 'USD',
      description: 'Bank',
      type: 'Withdrawal',
      quantity: '-',
      price: '-',
      swaps: '-',
      commission: '-',
      taxesFees: '-',
      pnl: '-$1,000'
    },
    {
      id: 2,
      time: '04/09/2025 12:15:18',
      order: '856409',
      instrument: 'USD',
      description: 'Bank',
      type: 'Withdrawal',
      quantity: '-',
      price: '-',
      swaps: '-',
      commission: '-',
      taxesFees: '-',
      pnl: '-$500'
    },
    {
      id: 3,
      time: '03/09/2025 10:20:45',
      order: '856407',
      instrument: 'USD',
      description: 'Bank',
      type: 'Withdrawal',
      quantity: '-',
      price: '-',
      swaps: '-',
      commission: '-',
      taxesFees: '-',
      pnl: '-$300'
    }
  ]

  // Sample watchlist data
  const watchlistData = [
    {
      id: 1,
      instrument: 'CADJPY',
      market: 'Major',
      change: '+%2.5',
      buyPrice: '107.081',
      spread: '0',
      sellPrice: '107.081,566',
      isStarred: true
    },
    {
      id: 2,
      instrument: 'CADJPY',
      market: 'Major',
      change: '+%2.5',
      buyPrice: '107.081',
      spread: '12.0',
      sellPrice: '107.081,566',
      isStarred: true
    },
    {
      id: 3,
      instrument: 'EURUSD',
      market: 'Major',
      change: '+%1.2',
      buyPrice: '1.09123',
      spread: '0.5',
      sellPrice: '1.09098',
      isStarred: false
    },
    {
      id: 4,
      instrument: 'GBPUSD',
      market: 'Major',
      change: '-%0.8',
      buyPrice: '1.26789',
      spread: '1.2',
      sellPrice: '1.26745',
      isStarred: true
    },
    {
      id: 5,
      instrument: 'USDJPY',
      market: 'Major',
      change: '+%3.1',
      buyPrice: '149.234',
      spread: '0.8',
      sellPrice: '149.189',
      isStarred: false
    },
    {
      id: 6,
      instrument: 'AUDUSD',
      market: 'Major',
      change: '-%1.5',
      buyPrice: '0.65234',
      spread: '0.3',
      sellPrice: '0.65198',
      isStarred: true
    },
    {
      id: 7,
      instrument: 'USDCAD',
      market: 'Major',
      change: '+%0.9',
      buyPrice: '1.35678',
      spread: '0.6',
      sellPrice: '1.35634',
      isStarred: false
    }
  ]

  // Sample positions data
  const positionsData = [
    {
      id: 1,
      instrument: 'CADJPY',
      direction: 'BUY',
      quantity: '1.00',
      price: '107.081',
      currentPrice: '107.848',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '48.14',
      pips: '+54.2',
      grossProfit: '+$36.85',
      netProfit: '+243.37'
    },
    {
      id: 2,
      instrument: 'CADJPY',
      direction: 'SELL',
      quantity: '1.00',
      price: '105.8',
      currentPrice: '154.481',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '10.18',
      pips: '-21.58',
      grossProfit: '-$36.65',
      netProfit: '-243.37'
    },
    {
      id: 3,
      instrument: 'CADJPY',
      direction: 'BUY',
      quantity: '1.00',
      price: '107.081',
      currentPrice: '107.848',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '97.05',
      pips: '+36.45',
      grossProfit: '+$24.12',
      netProfit: '+156.78'
    },
    {
      id: 4,
      instrument: 'CADJPY',
      direction: 'SELL',
      quantity: '1.00',
      price: '105.8',
      currentPrice: '154.481',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '32.67',
      pips: '-36.52',
      grossProfit: '-$24.89',
      netProfit: '-167.45'
    },
    {
      id: 5,
      instrument: 'CADJPY',
      direction: 'BUY',
      quantity: '1.00',
      price: '107.081',
      currentPrice: '107.848',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '15.42',
      pips: '+28.73',
      grossProfit: '+$19.56',
      netProfit: '+134.91'
    },
    {
      id: 6,
      instrument: 'CADJPY',
      direction: 'SELL',
      quantity: '1.00',
      price: '105.8',
      currentPrice: '154.481',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '73.28',
      pips: '-15.34',
      grossProfit: '-$10.45',
      netProfit: '-89.23'
    },
    {
      id: 7,
      instrument: 'CADJPY',
      direction: 'BUY',
      quantity: '1.00',
      price: '107.081',
      currentPrice: '107.848',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '41.83',
      pips: '+42.17',
      grossProfit: '+$28.73',
      netProfit: '+198.56'
    },
    {
      id: 8,
      instrument: 'CADJPY',
      direction: 'SELL',
      quantity: '1.00',
      price: '105.8',
      currentPrice: '154.481',
      stopLoss: '06,56',
      takeProfit: '--',
      createdDate: '2/09/2025 10:56:5',
      commission: '$0.00',
      swap: '56.92',
      pips: '-28.91',
      grossProfit: '-$19.67',
      netProfit: '-134.78'
    }
  ]

  // Sample orders data
  const ordersData = [
    {
      id: 1,
      instrument: 'CADJPY',
      type: 'LIMIT',
      direction: 'BUY',
      description: 'CANADIAN DOLLAR',
      quantity: '1.0',
      price: '106,566',
      currentPrice: '105,566',
      distance: '82,2',
      stopLoss: '107,566',
      takeProfit: '104,566',
      createdDate: '02/09/2025 10:56:58'
    },
    {
      id: 2,
      instrument: 'CADJPY',
      type: 'LIMIT',
      direction: 'SELL',
      description: 'CANADIAN DOLLAR',
      quantity: '0.1',
      price: '106,566',
      currentPrice: '105,566',
      distance: '82,2',
      stopLoss: '107,566',
      takeProfit: '104,566',
      createdDate: '02/09/2025 10:56:58'
    },
    {
      id: 3,
      instrument: 'EURUSD',
      type: 'STOP',
      direction: 'BUY',
      description: 'EURO VS US DOLLAR',
      quantity: '0.5',
      price: '1.09234',
      currentPrice: '1.09123',
      distance: '11.1',
      stopLoss: '1.09000',
      takeProfit: '1.09500',
      createdDate: '02/09/2025 11:15:22'
    },
    {
      id: 4,
      instrument: 'GBPUSD',
      type: 'LIMIT',
      direction: 'SELL',
      description: 'BRITISH POUND VS US DOLLAR',
      quantity: '2.0',
      price: '1.26890',
      currentPrice: '1.26789',
      distance: '10.1',
      stopLoss: '1.27000',
      takeProfit: '1.26500',
      createdDate: '02/09/2025 11:30:45'
    },
    {
      id: 5,
      instrument: 'USDJPY',
      type: 'STOP',
      direction: 'BUY',
      description: 'US DOLLAR VS JAPANESE YEN',
      quantity: '1.5',
      price: '149.500',
      currentPrice: '149.234',
      distance: '26.6',
      stopLoss: '148.500',
      takeProfit: '150.500',
      createdDate: '02/09/2025 12:45:12'
    },
    {
      id: 6,
      instrument: 'AUDUSD',
      type: 'LIMIT',
      direction: 'SELL',
      description: 'AUSTRALIAN DOLLAR VS US DOLLAR',
      quantity: '0.8',
      price: '0.65300',
      currentPrice: '0.65234',
      distance: '6.6',
      stopLoss: '0.65400',
      takeProfit: '0.65000',
      createdDate: '02/09/2025 13:20:33'
    },
    {
      id: 7,
      instrument: 'USDCAD',
      type: 'STOP',
      direction: 'BUY',
      description: 'US DOLLAR VS CANADIAN DOLLAR',
      quantity: '1.2',
      price: '1.35750',
      currentPrice: '1.35678',
      distance: '7.2',
      stopLoss: '1.35500',
      takeProfit: '1.36000',
      createdDate: '02/09/2025 14:10:18'
    }
  ]

  const getCurrentPairData = () => {
    return forexPairs.find(pair => pair.name === selectedPair) || forexPairs[0]
  }

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
      }
    }
  }, [dropdownTimeout])

  const handleWidgetHover = () => {
    // Clear any existing timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setShowDropdown(true)
  }
  
  const handleWidgetLeave = () => {
    // Add a small delay to prevent flickering when moving between icon and dropdown
    const timeout = setTimeout(() => {
      setShowDropdown(false)
    }, 150)
    setDropdownTimeout(timeout)
  }

  const openOrderPanel = (pairName = null) => {
    if (pairName) {
      setSelectedPair(pairName)
    }
    setShowOrderPanel(true)
    setShowWatchlistView(false) // Close watchlist when opening order panel
    setShowTradesView(false) // Close trades when opening order panel
  }

  const closeOrderPanel = () => {
    setShowOrderPanel(false)
  }

  const openSettingsModal = () => {
    setShowSettingsModal(true)
  }

  const closeSettingsModal = () => {
    setShowSettingsModal(false)
  }

  const handleSaveSettings = () => {
    // Save settings logic here
    setShowSettingsModal(false)
  }

  const handleResetToDefault = () => {
    setEnableNotification(true)
    setSoundAlerts(true)
    setTradeExecution(true)
    setPriceAlerts(true)
    setAccountUpdates(true)
    setNewsUpdates(true)
    setTimezone('UTC (Coordinated Universal Time)')
    setLanguage('English')
    setTheme('Light')
  }

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown)
  }

  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu)
  }

  const handleUserMenuClick = (action) => {
    console.log(`User action: ${action}`)
    setShowUserDropdown(false)
    
    if (action === 'signout') {
      // Redirect to login.html
      window.location.href = '/login.html'
    } else if (action === 'withdrawal') {
      openWithdrawalModal()
    } else if (action === 'deposit') {
      openDepositModal()
    } else if (action === 'statistics') {
      setShowAccountStatistics(true)
    } else if (action === 'verification') {
      openAccountVerification()
    }
  }

  const openAccountVerification = () => {
    setShowAccountVerification(true)
  }

  const closeAccountVerification = () => {
    setShowAccountVerification(false)
  }

  const openDepositModal = () => {
    setShowDepositModal(true)
    setDepositPage(1)
    setDepositMethod('bank')
    setDepositAmount('100')
  }

  const closeDepositModal = () => {
    setShowDepositModal(false)
    setDepositPage(1)
  }

  const handleDepositMethodChange = (method) => {
    setDepositMethod(method)
  }

  const handleDepositAmountChange = (amount) => {
    setDepositAmount(amount)
  }

  const handleDepositSubmit = () => {
    if (depositMethod === 'bank') {
      setDepositPage(2) // Bank Transfer Information page
    } else if (depositMethod === 'crypto') {
      setDepositPage(3) // Crypto Deposit page
    }
  }

  const handleDepositBack = () => {
    setDepositPage(1)
  }


  // Chart Widget Functions
  const addChartWidget = (pairName) => {
    // Close the dropdown
    setShowDropdown(false)
    setHoveredChart(false)
    setShowWatchlistView(false) // Close watchlist when opening chart
    setShowTradesView(false) // Close trades when opening chart
    
    const newWidget = {
      id: Date.now(),
      pair: pairName,
      type: 'chart',
      position: { x: 0, y: 0 }
    }
    
    // Replace existing chart widget with new one (only one chart at a time)
    setChartWidgets([newWidget])
    
    // Add to active tabs if not already present
    if (!activeCurrencyTabs.includes(pairName)) {
      setActiveCurrencyTabs(prev => [...prev, pairName])
    }
    setSelectedChartPair(pairName)
  }

  const removeChartWidget = (widgetId) => {
    setChartWidgets(prev => prev.filter(widget => widget.id !== widgetId))
  }

  const closeAllSections = () => {
    // Close all workspace views
    setShowTradesView(false)
    setShowWatchlistView(false)
    setShowPositionsView(false)
    setShowAccountVerification(false)
    
    // Close all modals
    setShowDepositModal(false)
    setShowWithdrawalModal(false)
    setShowSearchModal(false)
    setShowOrderPanel(false)
    setShowSetAlert(false)
    setShowSettingsModal(false)
    
    // Clear all chart widgets
    setChartWidgets([])
    
    // Reset other states
    setActiveCurrencyTabs([])
    setSelectedChartPair(null)
  }

  const closeCurrencyTab = (pairName) => {
    setActiveCurrencyTabs(prev => prev.filter(tab => tab !== pairName))
    setChartWidgets(prev => prev.filter(widget => widget.pair !== pairName))
    
    // If this was the selected tab, select another one or clear selection
    if (selectedChartPair === pairName) {
      const remainingTabs = activeCurrencyTabs.filter(tab => tab !== pairName)
      if (remainingTabs.length > 0) {
        setSelectedChartPair(remainingTabs[0])
        // Open chart for the new selected tab
        const newSelectedWidget = {
          id: Date.now(),
          pair: remainingTabs[0],
          type: 'chart',
          position: { x: 0, y: 0 }
        }
        setChartWidgets([newSelectedWidget])
      } else {
        setSelectedChartPair('')
        setChartWidgets([])
      }
    }
  }

  const selectCurrencyTab = (pairName) => {
    setSelectedChartPair(pairName)
    setShowWatchlistView(false) // Close watchlist when selecting tab
    setShowTradesView(false) // Close trades when selecting tab
    
    // Open chart widget for the selected tab
    const existingWidget = chartWidgets.find(widget => widget.pair === pairName)
    if (!existingWidget) {
      // If no widget exists for this pair, create one
      const newWidget = {
        id: Date.now(),
        pair: pairName,
        type: 'chart',
        position: { x: 0, y: 0 }
      }
      setChartWidgets([newWidget])
    } else {
      // If widget exists, just select it (replace current widget)
      setChartWidgets([existingWidget])
    }
  }

  // Trades View Functions
  const openTradesView = () => {
    setShowTradesView(true)
    setShowWatchlistView(false) // Close watchlist when opening trades
    setShowPositionsView(false) // Close positions when opening trades
    setChartWidgets([])
    setActiveCurrencyTabs([])
  }

  const closeTradesView = () => {
    setShowTradesView(false)
  }

  const handleTradesTabClick = (tabName) => {
    setTradesActiveTab(tabName)
  }

  const handleTradesFilterChange = (filter) => {
    setTradesFilter(filter)
  }

  const closeTrade = (tradeId) => {
    console.log(`Closing trade: ${tradeId}`)
  }

  const closeAllTrades = () => {
    console.log('Closing all trades')
  }

  // Watchlist View Functions
  const openWatchlistView = () => {
    setShowWatchlistView(true)
    setChartWidgets([])
    setActiveCurrencyTabs([])
    setShowTradesView(false)
  }

  const closeWatchlistView = () => {
    setShowWatchlistView(false)
  }

  const handleWatchlistTabClick = (tabName) => {
    setWatchlistActiveTab(tabName)
  }

  const handleBuyClick = (instrument) => {
    console.log(`Buy clicked for ${instrument}`)
  }

  const handleSellClick = (instrument) => {
    console.log(`Sell clicked for ${instrument}`)
  }

  const toggleStar = (id) => {
    console.log(`Star toggled for item ${id}`)
  }

  // Positions View Functions
  const openPositionsView = () => {
    setShowPositionsView(true)
    setChartWidgets([])
    setActiveCurrencyTabs([])
    setShowTradesView(false)
    setShowWatchlistView(false)
  }

  const closePositionsView = () => {
    setShowPositionsView(false)
  }

  const handlePositionsTabClick = (tabName) => {
    setPositionsActiveTab(tabName)
  }

  const closePosition = (positionId) => {
    console.log(`Closing position: ${positionId}`)
  }

  const closeAllPositions = () => {
    console.log('Closing all positions')
  }

  const closeOrder = (orderId) => {
    console.log(`Closing order: ${orderId}`)
  }

  const closeAllOrders = () => {
    console.log('Closing all orders')
  }


  // Count Animation Function
  const animateCounter = (element, target, duration = 2000) => {
    const start = 0
    const increment = target / (duration / 16) // 60fps
    let current = start
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      
      // Format number with commas and 2 decimal places
      const formatted = current.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      
      element.textContent = formatted
    }, 16)
  }

  // Withdrawal Modal Functions
  const openWithdrawalModal = () => {
    setShowWithdrawalModal(true)
    
    // Start count animation after modal opens
    setTimeout(() => {
      const counterElement = document.querySelector('.balance-counter')
      if (counterElement) {
        const target = parseFloat(counterElement.getAttribute('data-target'))
        animateCounter(counterElement, target)
      }
    }, 100)
  }

  const closeWithdrawalModal = () => {
    setShowWithdrawalModal(false)
    setWithdrawalPage(1) // Reset to first page when closing
  }

  const handleWithdrawalAmountChange = (amount) => {
    setWithdrawalAmount(amount)
  }

  const handleWithdrawalMethodChange = (method) => {
    setWithdrawalMethod(method)
  }

  const handleWithdrawalSubmit = () => {
    console.log(`Withdrawing $${withdrawalAmount} via ${withdrawalMethod}`)
    closeWithdrawalModal()
  }

  const handleWithdrawalPageChange = (page) => {
    setWithdrawalPage(page)
  }

  // Search Modal Functions
  const openSearchModal = () => {
    setShowSearchModal(true)
  }

  const closeSearchModal = () => {
    setShowSearchModal(false)
  }

  const handleSearchTabClick = (tab) => {
    setSearchActiveTab(tab)
  }

  // Help Desk Modal Functions
  const openHelpDeskModal = () => {
    setShowHelpDeskModal(true)
  }

  const closeHelpDeskModal = () => {
    setShowHelpDeskModal(false)
  }

  const handleHelpDeskFormChange = (field, value) => {
    setHelpDeskForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleHelpDeskSubmit = () => {
    console.log('Help desk form submitted:', helpDeskForm)
    closeHelpDeskModal()
  }


  return (
    <div className="app-layout">
      <Helmet>
        <title>Forex</title>
        <meta property="og:title" content="Forex" />
      </Helmet>
      
      {/* Sidebar */}
      <div className="app-sidebar">
        <div className="sidebar-logo">
          <img
            src="/external/frame1518-5s8.svg"
            alt="Logo"
            className="logo-icon"
          />
        </div>
        <div className="sidebar-nav">
          <div 
            className="nav-icon widget-icon" 
            onMouseEnter={handleWidgetHover}
            onMouseLeave={handleWidgetLeave}
          >
            <img
              src="/external/dashboardicon1125-mcf2.svg"
              alt="Add Widget"
              className="nav-icon-img"
            />
            {showDropdown && (
              <div className="dropdown-menu"
                onMouseEnter={() => {
                  if (dropdownTimeout) {
                    clearTimeout(dropdownTimeout)
                    setDropdownTimeout(null)
                  }
                  setShowDropdown(true)
                }}
                onMouseLeave={handleWidgetLeave}
              >
                <div className="dropdown-item">
                  <div className="menu-icon charts-icon">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.375 2.59351H8.96875V1.18726C8.96875 1.06294 8.91936 0.943707 8.83146 0.8558C8.74355 0.767892 8.62432 0.718506 8.5 0.718506C8.37568 0.718506 8.25645 0.767892 8.16854 0.8558C8.08064 0.943707 8.03125 1.06294 8.03125 1.18726V2.59351H1.625C1.33492 2.59351 1.05672 2.70874 0.851602 2.91386C0.646484 3.11898 0.53125 3.39718 0.53125 3.68726V13.0623C0.53125 13.3523 0.646484 13.6305 0.851602 13.8357C1.05672 14.0408 1.33492 14.156 1.625 14.156H5.025L3.13359 16.5193C3.09512 16.5674 3.0665 16.6226 3.04937 16.6818C3.03224 16.741 3.02693 16.803 3.03375 16.8642C3.04752 16.9878 3.10985 17.101 3.20703 17.1787C3.30421 17.2564 3.42827 17.2923 3.55193 17.2785C3.67559 17.2647 3.78871 17.2024 3.86641 17.1052L6.225 14.156H10.775L13.1336 17.1052C13.1721 17.1533 13.2196 17.1934 13.2736 17.2231C13.3276 17.2529 13.3868 17.2717 13.4481 17.2785C13.5093 17.2853 13.5713 17.28 13.6305 17.2629C13.6896 17.2458 13.7449 17.2171 13.793 17.1787C13.8411 17.1402 13.8812 17.0926 13.9109 17.0387C13.9406 16.9847 13.9594 16.9254 13.9662 16.8642C13.9731 16.803 13.9678 16.741 13.9506 16.6818C13.9335 16.6226 13.9049 16.5674 13.8664 16.5193L11.975 14.156H15.375C15.6651 14.156 15.9433 14.0408 16.1484 13.8357C16.3535 13.6305 16.4688 13.3523 16.4688 13.0623V3.68726C16.4688 3.39718 16.3535 3.11898 16.1484 2.91386C15.9433 2.70874 15.6651 2.59351 15.375 2.59351ZM15.5312 13.0623C15.5312 13.1037 15.5148 13.1434 15.4855 13.1727C15.4562 13.202 15.4164 13.2185 15.375 13.2185H1.625C1.58356 13.2185 1.54382 13.202 1.51451 13.1727C1.48521 13.1434 1.46875 13.1037 1.46875 13.0623V3.68726C1.46875 3.64582 1.48521 3.60607 1.51451 3.57677C1.54382 3.54747 1.58356 3.53101 1.625 3.53101H15.375C15.4164 3.53101 15.4562 3.54747 15.4855 3.57677C15.5148 3.60607 15.5312 3.64582 15.5312 3.68726V13.0623ZM6.46875 8.68726V10.5623C6.46875 10.6866 6.41936 10.8058 6.33146 10.8937C6.24355 10.9816 6.12432 11.031 6 11.031C5.87568 11.031 5.75645 10.9816 5.66854 10.8937C5.58064 10.8058 5.53125 10.6866 5.53125 10.5623V8.68726C5.53125 8.56294 5.58064 8.44371 5.66854 8.3558C5.75645 8.26789 5.87568 8.21851 6 8.21851C6.12432 8.21851 6.24355 8.26789 6.33146 8.3558C6.41936 8.44371 6.46875 8.56294 6.46875 8.68726ZM8.96875 7.43726V10.5623C8.96875 10.6866 8.91936 10.8058 8.83146 10.8937C8.74355 10.9816 8.62432 11.031 8.5 11.031C8.37568 11.031 8.25645 10.9816 8.16854 10.8937C8.08064 10.8058 8.03125 10.6866 8.03125 10.5623V7.43726C8.03125 7.31294 8.08064 7.19371 8.16854 7.1058C8.25645 7.01789 8.37568 6.96851 8.5 6.96851C8.62432 6.96851 8.74355 7.01789 8.83146 7.1058C8.91936 7.19371 8.96875 7.31294 8.96875 7.43726ZM11.4688 6.18726V10.5623C11.4688 10.6866 11.4194 10.8058 11.3315 10.8937C11.2435 10.9816 11.1243 11.031 11 11.031C10.8757 11.031 10.7565 10.9816 10.6685 10.8937C10.5806 10.8058 10.5312 10.6866 10.5312 10.5623V6.18726C10.5312 6.06294 10.5806 5.94371 10.6685 5.8558C10.7565 5.76789 10.8757 5.71851 11 5.71851C11.1243 5.71851 11.2435 5.76789 11.3315 5.8558C11.4194 5.94371 11.4688 6.06294 11.4688 6.18726Z" fill="#1D6CE9"/>
                    </svg>
                  </div>
                  <span>Charts</span>
                  <span className="arrow-right">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </span>
                  <div 
                    className="submenu charts-submenu"
                    onMouseEnter={() => setHoveredChart(true)}
                    onMouseLeave={() => setHoveredChart(false)}
                  >
                    <div className="submenu-header">
                      <div className="search-container">
                        <svg className="search-icon-small" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L23.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                        <span className="search-text">Search</span>
                      </div>
                    </div>
                    
                    {/* Filter Categories */}
                    <div className="chart-filter-categories">
                      <button 
                        className={`chart-filter-btn ${selectedChartCategory === 'All' ? 'active' : ''}`}
                        onClick={() => setSelectedChartCategory('All')}
                      >
                        All
                      </button>
                      <button 
                        className={`chart-filter-btn ${selectedChartCategory === 'Crypto' ? 'active' : ''}`}
                        onClick={() => setSelectedChartCategory('Crypto')}
                      >
                        Crypto
                      </button>
                      <button 
                        className={`chart-filter-btn ${selectedChartCategory === 'Endex' ? 'active' : ''}`}
                        onClick={() => setSelectedChartCategory('Endex')}
                      >
                        Endex
                      </button>
                      <button 
                        className={`chart-filter-btn ${selectedChartCategory === 'Exchange' ? 'active' : ''}`}
                        onClick={() => setSelectedChartCategory('Exchange')}
                      >
                        Exchange
                      </button>
                      <button 
                        className={`chart-filter-btn ${selectedChartCategory === 'Commodity' ? 'active' : ''}`}
                        onClick={() => setSelectedChartCategory('Commodity')}
                      >
                        Commodity
                      </button>
                      <button 
                        className={`chart-filter-btn ${selectedChartCategory === 'Stock' ? 'active' : ''}`}
                        onClick={() => setSelectedChartCategory('Stock')}
                      >
                        Stock
                      </button>
                    </div>
                    
                    <div className="submenu-divider"></div>
                    <div className="forex-pairs">
                      <div className="submenu-item forex-pair" onClick={() => addChartWidget('CADJPY')}>
                        <div className="pair-icon blue-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <span className="pair-name">CADJPY</span>
                        <svg className="pair-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div className="submenu-item forex-pair" onClick={() => addChartWidget('CHFJPY')}>
                        <div className="pair-icon red-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
                          </svg>
                        </div>
                        <span className="pair-name">CHFJPY</span>
                        <svg className="pair-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div className="submenu-item forex-pair" onClick={() => addChartWidget('EURUSD')}>
                        <div className="pair-icon blue-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <span className="pair-name">EURUSD</span>
                        <svg className="pair-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div className="submenu-item forex-pair" onClick={() => addChartWidget('GBPUSD')}>
                        <div className="pair-icon red-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
                          </svg>
                        </div>
                        <span className="pair-name">GBPUSD</span>
                        <svg className="pair-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div className="submenu-item forex-pair" onClick={() => addChartWidget('USDJPY')}>
                        <div className="pair-icon blue-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <span className="pair-name">USDJPY</span>
                        <svg className="pair-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div className="submenu-item forex-pair" onClick={() => addChartWidget('AUDUSD')}>
                        <div className="pair-icon blue-icon">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <span className="pair-name">AUDUSD</span>
                        <svg className="pair-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item" onClick={openPositionsView}>
                  <div className="menu-icon positions-icon">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.4688 13.25C16.4688 13.3743 16.4194 13.4935 16.3315 13.5815C16.2435 13.6694 16.1243 13.7188 16 13.7188H1C0.87568 13.7188 0.756451 13.6694 0.668544 13.5815C0.580636 13.4935 0.53125 13.3743 0.53125 13.25V0.75C0.53125 0.62568 0.580636 0.506451 0.668544 0.418544C0.756451 0.330636 0.87568 0.28125 1 0.28125C1.12432 0.28125 1.24355 0.330636 1.33146 0.418544C1.41936 0.506451 1.46875 0.62568 1.46875 0.75V8.46719L5.69141 4.77188C5.77232 4.70118 5.87507 4.66042 5.98245 4.65644C6.08983 4.65246 6.19532 4.68549 6.28125 4.75L10.9773 8.27187L15.6914 4.14688C15.7858 4.07418 15.9043 4.04015 16.0229 4.05169C16.1414 4.06323 16.2511 4.11947 16.3297 4.209C16.4083 4.29853 16.4499 4.41462 16.4459 4.53368C16.442 4.65274 16.3929 4.76584 16.3086 4.85L11.3086 9.225C11.2277 9.2957 11.1249 9.33645 11.0175 9.34044C10.9102 9.34442 10.8047 9.31139 10.7188 9.24687L6.02266 5.72813L1.46875 9.7125V12.7812H16C16.1243 12.7812 16.2435 12.8306 16.3315 12.9185C16.4194 13.0065 16.4688 13.1257 16.4688 13.25Z" fill="#1D6CE9"/>
                    </svg>
                  </div>
                  <span>Positions</span>
                </div>
                <div className="dropdown-item" onClick={openWatchlistView}>
                  <div className="menu-icon watchlist-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.666 3.66671H16.4993C16.9856 3.66671 17.4519 3.85986 17.7957 4.20368C18.1395 4.54749 18.3327 5.01381 18.3327 5.50004V18.3334C18.3327 18.8196 18.1395 19.2859 17.7957 19.6297C17.4519 19.9736 16.9856 20.1667 16.4993 20.1667H5.49935C5.01312 20.1667 4.5468 19.9736 4.20299 19.6297C3.85917 19.2859 3.66602 18.8196 3.66602 18.3334V5.50004C3.66602 5.01381 3.85917 4.54749 4.20299 4.20368C4.5468 3.85986 5.01312 3.66671 5.49935 3.66671H7.33268M8.24935 1.83337H13.7493C14.2556 1.83337 14.666 2.24378 14.666 2.75004V4.58337C14.666 5.08964 14.2556 5.50004 13.7493 5.50004H8.24935C7.74309 5.50004 7.33268 5.08964 7.33268 4.58337V2.75004C7.33268 2.24378 7.74309 1.83337 8.24935 1.83337Z" stroke="#1D6CE9" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.92383 8.46155H16.0777" stroke="#1D6CE9"/>
                      <path d="M5.92383 10.5769H16.0777" stroke="#1D6CE9"/>
                      <path d="M5.92383 12.6923H16.0777" stroke="#1D6CE9"/>
                      <path d="M5.92383 14.8077H16.0777" stroke="#1D6CE9"/>
                      <path d="M5.92383 16.9231H16.0777" stroke="#1D6CE9"/>
                    </svg>
              </div>
                  <span>Watchlist</span>
                  <span className="arrow-right">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </span>
                </div>
                <div className="dropdown-item" onClick={openTradesView}>
                  <div className="menu-icon trade-icon">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 1.35153V4.74061C14.5 4.85297 14.4529 4.96072 14.3691 5.04017C14.2853 5.11961 14.1717 5.16425 14.0532 5.16425H10.4787C10.3602 5.16425 10.2466 5.11961 10.1628 5.04017C10.079 4.96072 10.0319 4.85297 10.0319 4.74061C10.0319 4.62826 10.079 4.5205 10.1628 4.44106C10.2466 4.36161 10.3602 4.31698 10.4787 4.31698H12.9749L11.6307 3.04607C10.4959 1.96535 8.95504 1.35588 7.3466 1.35153H7.31234C5.71772 1.34676 4.18519 1.93721 3.04606 2.99523C3.00461 3.03626 2.95487 3.06897 2.89981 3.0914C2.84476 3.11383 2.7855 3.12553 2.72558 3.12581C2.66565 3.12608 2.60628 3.11492 2.55099 3.093C2.49571 3.07107 2.44564 3.03883 2.40377 2.99818C2.3619 2.95753 2.32908 2.90931 2.30726 2.85639C2.28545 2.80347 2.27508 2.74693 2.27679 2.69014C2.27849 2.63334 2.29222 2.57745 2.31718 2.52579C2.34213 2.47413 2.37778 2.42776 2.42202 2.38943C3.72668 1.17445 5.48362 0.495643 7.31234 0.500021H7.35106C9.19638 0.50448 10.9643 1.20366 12.266 2.4438L13.6064 3.71471V1.35153C13.6064 1.23917 13.6535 1.13142 13.7372 1.05197C13.821 0.972526 13.9347 0.927893 14.0532 0.927893C14.1717 0.927893 14.2853 0.972526 14.3691 1.05197C14.4529 1.13142 14.5 1.23917 14.5 1.35153ZM11.9539 11.0048C10.8155 12.0643 9.28291 12.6564 7.68766 12.6527H7.6534C6.04496 12.6484 4.5041 12.0389 3.36926 10.9582L2.02511 9.68302H4.52128C4.63978 9.68302 4.75342 9.63839 4.83722 9.55894C4.92101 9.4795 4.96808 9.37174 4.96808 9.25939C4.96808 9.14703 4.92101 9.03928 4.83722 8.95983C4.75342 8.88039 4.63978 8.83575 4.52128 8.83575H0.946809C0.828308 8.83575 0.71466 8.88039 0.630867 8.95983C0.547074 9.03928 0.5 9.14703 0.5 9.25939V12.6485C0.5 12.7608 0.547074 12.8686 0.630867 12.948C0.71466 13.0275 0.828308 13.0721 0.946809 13.0721C1.06531 13.0721 1.17896 13.0275 1.26275 12.948C1.34654 12.8686 1.39362 12.7608 1.39362 12.6485V10.2818L2.73404 11.5562C4.03573 12.7963 5.80362 13.4955 7.64894 13.5H7.68766C9.51638 13.5044 11.2733 12.8256 12.578 11.6106C12.6222 11.5722 12.6579 11.5259 12.6828 11.4742C12.7078 11.4225 12.7215 11.3667 12.7232 11.3099C12.7249 11.2531 12.7146 11.1965 12.6927 11.1436C12.6709 11.0907 12.6381 11.0425 12.5962 11.0018C12.5544 10.9612 12.5043 10.9289 12.449 10.907C12.3937 10.8851 12.3344 10.8739 12.2744 10.8742C12.2145 10.8745 12.1552 10.8862 12.1002 10.9086C12.0451 10.931 11.9954 10.9637 11.9539 11.0048Z" fill="#1D6CE9"/>
                    </svg>
                  </div>
                  <span>Trade & Transactions</span>
                </div>
              </div>
            )}
            </div>
          <div className="nav-icon" onClick={() => openOrderPanel()}>
            <img
              src="/external/frame121536-klyr.svg"
              alt="Trading"
              className="nav-icon-img"
            />
            </div>
          <div className="nav-icon" onClick={openDepositModal}>
            <img
              src="/external/frame101534-kup9.svg"
              alt="Analytics"
              className="nav-icon-img"
              />
            </div>
          <div className="nav-icon" onClick={() => handleUserMenuClick('statistics')}>
            <img
              src="/external/frame111535-a3bh.svg"
              alt="Account Statistics"
              className="nav-icon-img"
            />
            </div>
                     <div className="nav-icon" onClick={() => setShowSetAlert(true)}>
              <img
                src="/external/bell1531-6js4.svg"
                alt="Set Alert"
                className="nav-icon-img"
                />
              </div>
            </div>
        <div className="sidebar-bottom">
          <div className="nav-icon" onClick={openSettingsModal}>
            <img
              src="/external/frame121563-1ama.svg"
              alt="Settings"
              className="nav-icon-img"
            />
          </div>
          <div className="nav-icon" onClick={openHelpDeskModal}>
            <img
              src="/external/frame121569-nf45.svg"
              alt="Help"
              className="nav-icon-img"
                  />
                </div>
        </div>
      </div>

      {/* Header */}
      <div className="app-header">
        {/* Header Elements */}
        <div className="header-balance">
          <span className="header-label">Balance</span>
          <span className="header-value">$10,500.00</span>
        </div>
        <div className="header-equity">
          <span className="header-label">Equity</span>
          <span className="header-value">$10,660.00</span>
        </div>
        <div className="header-margin">
          <div className="margin-indicator">
            <img
              src="/external/ellipse11525-gthp-200h.png"
              alt="Margin Indicator"
              className="margin-circle"
            />
            <img
              src="/external/ellipse21525-y7i9-200h.png"
              alt="Margin Indicator"
              className="margin-circle"
                    />
                  </div>
          <div className="margin-info">
            <span className="header-label">Margin Used / Free</span>
            <span className="header-value">$560.00 / 660.00</span>
          </div>
        </div>
        <div className="header-margin-level">
          <span className="header-label">Margin Level</span>
          <span className="header-value">205.30%</span>
        </div>
        <div className="header-pnl">
          <span className="header-label">Total Unrealized P/L</span>
          <span className="header-value negative">-$2,304.02</span>
        </div>
        <div className="header-time">
          <span className="header-label">Time Zone</span>
          <span className="header-value">13:31:08 (6+)</span>
                  </div>
        {/* Move hamburger button just before search icon */}
        <div className="hamburger-menu-btn" onClick={toggleHamburgerMenu}>
          <svg width="24" height="24" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M58.9795 88.5H59.0237" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M88.4988 88.5H88.543" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.4988 88.5H29.5429" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M58.9795 59H59.0237" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M58.9988 29.5H59.043" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M88.4988 59H88.543" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M88.4988 29.5H88.543" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.4988 59H29.5429" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.4988 29.5H29.5429" stroke="#5d5d5d" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="header-search" onClick={openSearchModal}>
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="#5d5d5d" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" stroke="#5d5d5d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
                  </div>
                    <div className="header-user-button" onClick={toggleUserDropdown}>
          <span className="user-name">EMMA BROWN 98765</span>
          <div className="currency-section">
            <span className="currency-text">USD</span>
            <img
              src="/external/vector2134-hsp7.svg"
              alt="Dropdown"
              className="dropdown-icon"
            />
          </div>
          {showUserDropdown && (
            <div className="user-dropdown-menu">
              <div className="user-dropdown-item" onClick={() => handleUserMenuClick('withdrawal')}>
                <div className="user-dropdown-item-left">
                  <svg className="user-menu-icon" width="21" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9629 1.00586L10.9629 9.13086C10.9629 9.25518 10.9135 9.37441 10.8256 9.46232C10.7377 9.55022 10.6185 9.59961 10.4942 9.59961C10.3698 9.59961 10.2506 9.55022 10.1627 9.46232C10.0748 9.37441 10.0254 9.25518 10.0254 9.13086L10.0254 2.13711L0.825417 11.3371C0.736557 11.4199 0.619029 11.465 0.49759 11.4628C0.376152 11.4607 0.260286 11.4115 0.174403 11.3256C0.0885199 11.2397 0.039325 11.1239 0.0371824 11.0024C0.0350398 10.881 0.0801166 10.7635 0.162917 10.6746L9.36292 1.47461L2.36917 1.47461C2.24485 1.47461 2.12562 1.42522 2.03771 1.33732C1.9498 1.24941 1.90042 1.13018 1.90042 1.00586C1.90042 0.881539 1.9498 0.762311 2.03771 0.674403C2.12562 0.586495 2.24485 0.537109 2.36917 0.537109L10.4942 0.537109C10.6185 0.537109 10.7377 0.586495 10.8256 0.674403C10.9135 0.762311 10.9629 0.881539 10.9629 1.00586Z" fill="#1D6CE9"/>
                </svg>
                <span>Withdrawal</span>
                </div>
                <svg className="user-menu-arrow" width="23" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div className="user-dropdown-item" onClick={() => handleUserMenuClick('deposit')}>
                <div className="user-dropdown-item-left">
                  <svg className="user-menu-icon" width="21" height="32" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.0370827 10.9941L0.0370827 2.86914C0.0370827 2.74482 0.0864677 2.62559 0.174376 2.53768C0.262283 2.44978 0.381513 2.40039 0.505833 2.40039C0.630153 2.40039 0.749381 2.44978 0.837289 2.53768C0.925197 2.62559 0.974584 2.74482 0.974584 2.86914L0.974584 9.86289L10.1746 0.662891C10.2634 0.580091 10.381 0.535015 10.5024 0.537158C10.6238 0.539301 10.7397 0.588495 10.8256 0.674378C10.9115 0.760262 10.9607 0.876127 10.9628 0.997565C10.965 1.119 10.9199 1.23653 10.8371 1.32539L1.63708 10.5254L8.63083 10.5254C8.75515 10.5254 8.87438 10.5748 8.96229 10.6627C9.0502 10.7506 9.09958 10.8698 9.09958 10.9941C9.09958 11.1185 9.0502 11.2377 8.96229 11.3256C8.87438 11.4135 8.75515 11.4629 8.63083 11.4629L0.505833 11.4629C0.381513 11.4629 0.262283 11.4135 0.174376 11.3256C0.0864677 11.2377 0.0370827 11.1185 0.0370827 10.9941Z" fill="#1D6CE9"/>
                </svg>
                <span>Deposit</span>
                </div>
                <svg className="user-menu-arrow" width="23" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div className="user-dropdown-item" onClick={() => handleUserMenuClick('statistics')}>
                <div className="user-dropdown-item-left">
                  <svg className="user-menu-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00091 0C5.9073 0 5.81753 0.0371847 5.75134 0.103374C5.68515 0.169563 5.64797 0.259335 5.64797 0.352941V3.64706C5.64797 3.74066 5.68515 3.83043 5.75134 3.89662C5.81753 3.96281 5.9073 4 6.00091 4C6.44116 4.00006 6.8691 4.14539 7.21834 4.41345C7.56758 4.68151 7.81862 5.05731 7.93252 5.48258C8.04641 5.90784 8.01681 6.35881 7.84829 6.76554C7.67977 7.17226 7.38176 7.51202 7.00048 7.73212C6.61919 7.95222 6.17593 8.04036 5.73944 7.98287C5.30296 7.92538 4.89764 7.72547 4.58634 7.41416C4.27505 7.10284 4.07517 6.6975 4.01771 6.26101C3.96026 5.82452 4.04843 5.38127 4.26856 5C4.29176 4.95983 4.30682 4.91549 4.31287 4.86951C4.31892 4.82352 4.31585 4.77679 4.30383 4.732C4.29181 4.6872 4.27108 4.64521 4.24282 4.60843C4.21456 4.57165 4.17933 4.5408 4.13915 4.51764L1.28621 2.87059C1.24605 2.84739 1.2017 2.83233 1.15572 2.82628C1.10973 2.82023 1.06301 2.8233 1.01821 2.83532C0.973411 2.84733 0.931422 2.86806 0.894641 2.89632C0.857861 2.92458 0.827011 2.95981 0.803855 3C0.143473 4.14381 -0.121045 5.47357 0.0513245 6.78304C0.223694 8.09251 0.823319 9.30852 1.75721 10.2425C2.69109 11.1764 3.90705 11.7761 5.21651 11.9486C6.52597 12.1211 7.85574 11.8567 8.99961 11.1964C10.1435 10.5361 11.0375 9.5168 11.5431 8.29662C12.0486 7.07644 12.1374 5.72354 11.7957 4.44774C11.454 3.17194 10.7009 2.04453 9.6532 1.24036C8.60547 0.436192 7.32167 0.000199515 6.00091 0ZM1.24856 3.66412L3.50091 4.96411C3.36491 5.29253 3.29495 5.64453 3.29503 6C3.29543 6.11802 3.30329 6.2359 3.31856 6.35294L0.806797 7.02647C0.582576 5.88752 0.737748 4.70648 1.24856 3.66412ZM0.989738 7.70588L3.5015 7.03294C3.68388 7.47129 3.9781 7.85411 4.35476 8.14314C4.73143 8.43216 5.17735 8.61728 5.64797 8.67999V11.28C4.60594 11.2089 3.60807 10.8318 2.77942 10.196C1.95078 9.56019 1.32821 8.69397 0.989738 7.70588ZM6.35385 11.2823V8.68235C7.00457 8.59652 7.60191 8.27709 8.03461 7.78356C8.46732 7.29004 8.70589 6.65606 8.70589 5.9997C8.70589 5.34335 8.46732 4.70937 8.03461 4.21584C7.60191 3.72231 7.00457 3.40289 6.35385 3.31706V0.717647C7.69389 0.807132 8.94983 1.40257 9.86731 2.38336C10.7848 3.36414 11.2952 4.65697 11.2952 6C11.2952 7.34302 10.7848 8.63585 9.86731 9.61664C8.94983 10.5974 7.69389 11.1929 6.35385 11.2823Z" fill="#1D6CE9"/>
                  </svg>
                <span>Account Statistics</span>
                </div>
                <svg className="user-menu-arrow" width="23" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div className="user-dropdown-item" onClick={() => handleUserMenuClick('verification')}>
                <div className="user-dropdown-item-left">
                  <svg className="user-menu-icon" width="21" height="32" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="3" r="2.6" stroke="#1D6CE9" strokeWidth="0.8"/>
                    <path d="M11 12H1V9.39569C1 8.39158 4 8.00008 6 8.00008C8 8.00008 11 8.39163 11 9.39571V12Z" stroke="#1D6CE9" strokeWidth="0.8"/>
                </svg>
                <span>Account Verification</span>
                </div>
                <svg className="user-menu-arrow" width="23" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
              <div className="user-dropdown-item" onClick={() => handleUserMenuClick('signout')}>
                <div className="user-dropdown-item-left">
                  <svg className="user-menu-icon" width="21" height="32" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25547 13.5532C5.25547 13.6717 5.21175 13.7853 5.13394 13.8691C5.05613 13.9529 4.9506 14 4.84056 14H0.414905C0.304866 14 0.199333 13.9529 0.121523 13.8691C0.0437131 13.7853 0 13.6717 0 13.5532V0.446809C0 0.328308 0.0437131 0.21466 0.121523 0.130867C0.199333 0.0470743 0.304866 0 0.414905 0H4.84056C4.9506 0 5.05613 0.0470743 5.13394 0.130867C5.21175 0.21466 5.25547 0.328308 5.25547 0.446809C5.25547 0.565309 5.21175 0.678957 5.13394 0.76275C5.05613 0.846543 4.9506 0.893617 4.84056 0.893617H0.829811V13.1064H4.84056C4.9506 13.1064 5.05613 13.1535 5.13394 13.2372C5.21175 13.321 5.25547 13.4347 5.25547 13.5532ZM12.8787 6.68426L10.1126 3.70553C10.034 3.62661 9.92994 3.58364 9.82246 3.58568C9.71497 3.58772 9.61241 3.63462 9.53639 3.71648C9.46037 3.79834 9.41683 3.90879 9.41493 4.02454C9.41304 4.14029 9.45294 4.25232 9.52623 4.33702L11.5835 6.55319H4.84056C4.73052 6.55319 4.62499 6.60027 4.54718 6.68406C4.46937 6.76785 4.42566 6.8815 4.42566 7C4.42566 7.1185 4.46937 7.23215 4.54718 7.31594C4.62499 7.39973 4.73052 7.44681 4.84056 7.44681H11.5835L9.52623 9.66298C9.48546 9.70388 9.45277 9.75321 9.43009 9.80802C9.40741 9.86283 9.39522 9.92199 9.39423 9.98199C9.39325 10.042 9.4035 10.1016 9.42437 10.1572C9.44523 10.2128 9.47629 10.2634 9.51569 10.3058C9.55509 10.3482 9.60202 10.3817 9.65369 10.4042C9.70535 10.4266 9.76068 10.4377 9.81639 10.4366C9.8721 10.4355 9.92705 10.4224 9.97794 10.398C10.0288 10.3736 10.0746 10.3384 10.1126 10.2945L12.8787 7.31574C12.9564 7.23197 13 7.1184 13 7C13 6.8816 12.9564 6.76803 12.8787 6.68426Z" fill="#1D6CE9"/>
                </svg>
                <span>Sign Out</span>
                </div>
                <svg className="user-menu-arrow" width="23" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Hamburger Menu Dropdown - Shows hidden header content */}
        {showHamburgerMenu && (
          <div className="hamburger-menu-dropdown">
            <div className="hamburger-menu-item">
              <span className="hamburger-menu-label">Margin Level</span>
              <span className="hamburger-menu-value">205.30%</span>
            </div>
            <div className="hamburger-menu-item">
              <span className="hamburger-menu-label">Total Unrealized P/L</span>
              <span className="hamburger-menu-value negative">-$2,304.02</span>
            </div>
            <div className="hamburger-menu-item">
              <span className="hamburger-menu-label">Time Zone</span>
              <span className="hamburger-menu-value">13:31:08 (6+)</span>
            </div>
            <div className="hamburger-menu-item">
              <span className="hamburger-menu-label">Margin Used / Free</span>
              <span className="hamburger-menu-value">$560.00 / 660.00</span>
            </div>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="app-content">
        {/* Currency Pair Tabs */}
        {activeCurrencyTabs.length > 0 && (
          <div className="currency-tabs">
            <div className="tabs-container">
              {activeCurrencyTabs.map((pair) => (
                <div 
                  key={pair}
                  className={`currency-tab ${selectedChartPair === pair ? 'active' : ''}`}
                  onClick={() => selectCurrencyTab(pair)}
                >
                  <span className="tab-pair-name">{pair}</span>
                  <button 
                    className="tab-close-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeCurrencyTab(pair)
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="tab-controls">
              <button className="tab-control-btn" title="Link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
              </button>
              <button className="tab-control-btn" title="Open in New Window">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </button>
              <button className="tab-control-btn" title="Maximize">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
              <button className="tab-control-btn" title="Close" onClick={closeAllSections}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
        </div>
      )}


      {/* Account Verification Modal */}
        {showAccountVerification && (
          <div className="account-verification-overlay" onClick={closeAccountVerification}>
            <div className="account-verification-modal" onClick={(e) => e.stopPropagation()}>
              <div className="account-verification-container">
                <div className="account-verification-header">
                  <h3>Account Information</h3>
                  <button className="account-verification-close" onClick={closeAccountVerification}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
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
          </div>
        )}

        {/* Deposit Modal */}
        {showDepositModal && (
          <div className="deposit-overlay" onClick={closeDepositModal}>
            <div className="deposit-modal" onClick={(e) => e.stopPropagation()}>
              {/* Page 1: Deposit Method Selection */}
              {depositPage === 1 && (
                <div className="deposit-page">
                  <div className="deposit-header">
                    <h2>Deposit</h2>
                    <button className="deposit-close" onClick={closeDepositModal}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="deposit-tabs">
                    <div 
                      className={`deposit-tab ${depositMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => handleDepositMethodChange('bank')}
                    >
                      Bank Transfer
                    </div>
                    <div className="deposit-tab-separator"></div>
                    <div 
                      className={`deposit-tab ${depositMethod === 'crypto' ? 'active' : ''}`}
                      onClick={() => handleDepositMethodChange('crypto')}
                    >
                      Crypto
                    </div>
                  </div>
                  
                  <div className="deposit-content">
                    <h3>Deposit Information</h3>
                    <p>Please enter the amount you wish to deposit:</p>
                    
                    <div className="form-group">
                      <label>Amount to be deposited ({depositMethod === 'bank' ? 'USD' : 'USDT'})</label>
                      <input 
                        type="number" 
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        className="deposit-input"
                        placeholder="100"
                      />
                    </div>
                    
                    <div className="quick-amounts">
                      <h4>Quick Amount Selection</h4>
                      <div className="amount-buttons">
                        {['100', '250', '500', '1000', '2500'].map(amount => (
                          <button
                            key={amount}
                            className={`amount-btn ${depositAmount === amount ? 'active' : ''}`}
                            onClick={() => handleDepositAmountChange(amount)}
                          >
                            $ {amount}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="deposit-summary">
                      <div className="summary-row">
                        <span>Amount to be deposited:</span>
                        <span>${depositAmount}.00</span>
                      </div>
                      <div className="summary-row">
                        <span>Transaction Fee:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="summary-row">
                        <span>Commission:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="summary-row total">
                        <span>Total:</span>
                        <span>${depositAmount}.00</span>
                      </div>
                    </div>
                    
                    <button className="deposit-submit-btn" onClick={handleDepositSubmit}>
                      DEPOSIT
                    </button>
                  </div>
                </div>
              )}
              
              {/* Page 2: Bank Transfer Information */}
              {depositPage === 2 && (
                <div className="deposit-page">
                  <div className="deposit-header">
                    <h2>Deposit</h2>
                    <button className="deposit-close" onClick={closeDepositModal}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="deposit-content">
                    <div className="info-header">
                      <span className="back-icon-box" onClick={handleDepositBack}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.08366 5.00033H0.916992M0.916992 5.00033L5.00033 9.08366M0.916992 5.00033L5.00033 0.916992" stroke="#1D6CE9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div className="text-block">
                        <h2>Bank Transfer Information</h2>
                        <p>Please make the transfer using the following bank details:</p>
                      </div>
                    </div>
                    
                    <div className="bank-details">
                      <div className="bank-detail-row">
                        <div className="bank-label">Bank Name:</div>
                        <div className="bank-value">Forex Bank LTD</div>
                      </div>
                      <div className="bank-detail-row">
                        <div className="bank-label">Account Name:</div>
                        <div className="bank-value">
                          Forex Trading Platform
                          <span className="copy-icon-box" onClick={() => navigator.clipboard.writeText('Forex Trading Platform')}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 7.5H2C1.73478 7.5 1.48043 7.39464 1.29289 7.20711C1.10536 7.01957 1 6.76522 1 6.5V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6.5C6.76522 1 7.01957 1.10536 7.20711 1.29289C7.39464 1.48043 7.5 1.73478 7.5 2V2.5M5.5 4.5H10C10.5523 4.5 11 4.94772 11 5.5V10C11 10.5523 10.5523 11 10 11H5.5C4.94772 11 4.5 10.5523 4.5 10V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5Z" stroke="#1D6CE9" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="bank-detail-row">
                        <div className="bank-label">Account Number:</div>
                        <div className="bank-value">
                          1234567890
                          <span className="copy-icon-box" onClick={() => navigator.clipboard.writeText('1234567890')}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 7.5H2C1.73478 7.5 1.48043 7.39464 1.29289 7.20711C1.10536 7.01957 1 6.76522 1 6.5V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6.5C6.76522 1 7.01957 1.10536 7.20711 1.29289C7.39464 1.48043 7.5 1.73478 7.5 2V2.5M5.5 4.5H10C10.5523 4.5 11 4.94772 11 5.5V10C11 10.5523 10.5523 11 10 11H5.5C4.94772 11 4.5 10.5523 4.5 10V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5Z" stroke="#1D6CE9" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="bank-detail-row">
                        <div className="bank-label">IBAN:</div>
                        <div className="bank-value">
                          TR12 3456 T890 1234 5678 9012 3456 78
                          <span className="copy-icon-box" onClick={() => navigator.clipboard.writeText('TR12 3456 T890 1234 5678 9012 3456 78')}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 7.5H2C1.73478 7.5 1.48043 7.39464 1.29289 7.20711C1.10536 7.01957 1 6.76522 1 6.5V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6.5C6.76522 1 7.01957 1.10536 7.20711 1.29289C7.39464 1.48043 7.5 1.73478 7.5 2V2.5M5.5 4.5H10C10.5523 4.5 11 4.94772 11 5.5V10C11 10.5523 10.5523 11 10 11H5.5C4.94772 11 4.5 10.5523 4.5 10V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5Z" stroke="#1D6CE9" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="bank-detail-row">
                        <div className="bank-label">Swift Code:</div>
                        <div className="bank-value">FRXBTRIX</div>
                      </div>
                    </div>
                    
                    <div className="important-notes">
                      <h4>Important Notes</h4>
                      <ul>
                        <li>Minimum Investment: $100</li>
                        <li>Processing time: 1-3 business days</li>
                        <li>There is no investment fee</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="button-container">
                    <button className="deposit-approve-btn">APPROVE</button>
                  </div>
                </div>
              )}
              
              {/* Page 3: Crypto Deposit */}
              {depositPage === 3 && (
                <div className="deposit-page">
                  <div className="deposit-header">
                    <h2>Deposit</h2>
                    <button className="deposit-close" onClick={closeDepositModal}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="deposit-content">
                    <div className="info-header">
                      <span className="back-icon-box" onClick={handleDepositBack}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.08366 5.00033H0.916992M0.916992 5.00033L5.00033 9.08366M0.916992 5.00033L5.00033 0.916992" stroke="#1D6CE9" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <div className="text-block">
                        <h2>Cryptocurrency Deposit</h2>
                        <p>Choose one of the supported cryptocurrencies:</p>
                      </div>
                    </div>
                    
                    <div className="crypto-selection">
                      <div className="form-group">
                        <label className="form-label">Crypto</label>
                        <div className="input-field">
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <svg className="crypto-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM14.9332 7.02537C14.7792 6.22353 14.1534 5.92212 13.5659 5.92212C12.7562 5.92212 12.0722 6.55169 11.8317 7.57568L10.0573 15.6888C9.81681 16.7128 10.4398 17.3424 11.2495 17.3424C12.0592 17.3424 12.7432 16.7128 12.9837 15.6888L14.7581 7.57568C14.9986 6.55169 14.7792 6.22353 14.9332 7.02537ZM18.0664 12.0001C18.0664 12.5298 17.6534 12.9429 17.1237 12.9429H6.87625C6.34657 12.9429 5.93356 12.5298 5.93356 12.0001C5.93356 11.4704 6.34657 11.0574 6.87625 11.0574H17.1237C17.6534 11.0574 18.0664 11.4704 18.0664 12.0001Z" fill="#18A558"/>
                              <path d="M11.8317 7.57568L10.0573 15.6888C9.81681 16.7128 10.4398 17.3424 11.2495 17.3424C12.0592 17.3424 12.7432 16.7128 12.9837 15.6888L14.7581 7.57568C14.9986 6.55169 14.7792 6.22353 14.9332 7.02537ZM18.0664 12.0001C18.0664 12.5298 17.6534 12.9429 17.1237 12.9429H6.87625C6.34657 12.9429 5.93356 12.5298 5.93356 12.0001C5.93356 11.4704 6.34657 11.0574 6.87625 11.0574H17.1237C17.6534 11.0574 18.0664 11.4704 18.0664 12.0001Z" fill="#FFFFFF"/>
                            </svg>
                            <span>USDT</span>
                          </div>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Network Address</label>
                        <div className="input-field">
                          <div style={{display: 'flex', alignItems: 'center'}}>
                            <span>TRC 20</span>
                          </div>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Withdrawal Address</label>
                        <div className="input-container">
                          <input 
                            type="text" 
                            className="input-field input-text withdrawal-address-input" 
                            value="sat4d9fd465afd5afda49a" 
                            readOnly 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="important-notes">
                      <h4>Important Notes</h4>
                      <ul>
                        <li>Send only supported cryptocurrencies</li>
                        <li>Minimum investment: $50</li>
                        <li>Processing time: 10-30 minutes</li>
                        <li>Network fees may apply</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="button-container">
                    <button className="deposit-approve-btn">APPROVE</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Trades View */}
        {showTradesView ? (
          <div className="trades-view">
            {/* Trades Header */}
            <div className="trades-header">
              <div className="trades-tabs">
                <button 
                  className={`trades-tab ${tradesActiveTab === 'Trades' ? 'active' : ''}`}
                  onClick={() => handleTradesTabClick('Trades')}
                >
                  Trades
                </button>
                <button 
                  className={`trades-tab ${tradesActiveTab === 'Transactions' ? 'active' : ''}`}
                  onClick={() => handleTradesTabClick('Transactions')}
                >
                  Transactions
                </button>
                <button className="trades-tab count-tab">
                  7
                </button>
                <div className="trades-filter">
                  <select 
                    value={tradesFilter} 
                    onChange={(e) => handleTradesFilterChange(e.target.value)}
                    className="filter-dropdown"
                  >
                    <option value="All">All</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <button className="trades-search-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L23.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
                <button className="trades-close-btn" onClick={closeTradesView}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Positions/Orders Table */}
            <div className="positions-table-container">
              {positionsActiveTab === 'Positions' ? (
                <table className="positions-table">
                  <thead>
                    <tr>
                      <th>Instruments</th>
                      <th>Direction</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Current....</th>
                      <th>S/L</th>
                      <th>T/P</th>
                      <th>Created Date</th>
                      <th>Commission</th>
                      <th>Swap</th>
                      <th>Pips</th>
                      <th>Gross Profit</th>
                      <th>Net Profit</th>
                      <th>
                        <button className="close-all-positions-btn" onClick={closeAllPositions}>
                          Close All
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {positionsData.map((position) => (
                      <tr key={position.id}>
                        <td className="instrument-cell">{position.instrument}</td>
                        <td className={`direction-cell ${position.direction.toLowerCase()}`}>
                          {position.direction}
                        </td>
                        <td className="quantity-cell">{position.quantity}</td>
                        <td className="price-cell">{position.price}</td>
                        <td className="current-price-cell">{position.currentPrice}</td>
                        <td className="stop-loss-cell">{position.stopLoss}</td>
                        <td className="take-profit-cell">{position.takeProfit}</td>
                        <td className="created-date-cell">{position.createdDate}</td>
                        <td className="commission-cell">{position.commission}</td>
                        <td className="swap-cell">{position.swap}</td>
                        <td className={`pips-cell ${position.pips.startsWith('+') ? 'positive' : 'negative'}`}>
                          {position.pips}
                        </td>
                        <td className={`gross-profit-cell ${position.grossProfit.startsWith('+') ? 'positive' : 'negative'}`}>
                          {position.grossProfit}
                        </td>
                        <td className={`net-profit-cell ${position.netProfit.startsWith('+') ? 'positive' : 'negative'}`}>
                          {position.netProfit}
                        </td>
                        <td className="close-cell">
                          <button 
                            className={`close-position-btn ${position.netProfit.startsWith('+') ? 'positive' : 'negative'}`}
                            onClick={() => closePosition(position.id)}
                          >
                            Close
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Instruments</th>
                      <th>Type</th>
                      <th>Direction</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Current Price</th>
                      <th>Distance</th>
                      <th>S/L</th>
                      <th>T/P</th>
                      <th>Created Date</th>
                      <th>
                        <button className="close-all-orders-btn" onClick={closeAllOrders}>
                          Close All
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order) => (
                      <tr key={order.id}>
                        <td className="instrument-cell">{order.instrument}</td>
                        <td className="type-cell">{order.type}</td>
                        <td className={`direction-cell ${order.direction.toLowerCase()}`}>
                          {order.direction}
                        </td>
                        <td className="description-cell">{order.description}</td>
                        <td className="quantity-cell">{order.quantity}</td>
                        <td className="price-cell">{order.price}</td>
                        <td className="current-price-cell">{order.currentPrice}</td>
                        <td className="distance-cell">{order.distance}</td>
                        <td className="stop-loss-cell">{order.stopLoss}</td>
                        <td className="take-profit-cell">{order.takeProfit}</td>
                        <td className="created-date-cell">{order.createdDate}</td>
                        <td className="close-cell">
                          <button 
                            className="close-order-btn"
                            onClick={() => closeOrder(order.id)}
                          >
                            Close
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ) : showTradesView ? (
          <div className="watchlist-view">
            {/* Watchlist Header */}
            <div className="watchlist-header">
              <div className="watchlist-tabs">
                <button 
                  className={`watchlist-tab ${watchlistActiveTab === 'Watchlist' ? 'active' : ''}`}
                  onClick={() => handleWatchlistTabClick('Watchlist')}
                >
                  Watchlist
                  <span className="tab-count">7</span>
                </button>
                <button 
                  className={`watchlist-tab ${watchlistActiveTab === 'All' ? 'active' : ''}`}
                  onClick={() => handleWatchlistTabClick('All')}
                >
                  All
                </button>
                <button className="watchlist-search-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L23.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
                <button className="watchlist-close-btn" onClick={closeWatchlistView}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Watchlist Table */}
            <div className="watchlist-table-container">
              <table className="watchlist-table">
                <thead>
                  <tr>
                    <th>Instruments</th>
                    <th>Market</th>
                    <th>Change</th>
                    <th>Buy</th>
                    <th>Spread</th>
                    <th>Sell</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {watchlistData.map((item) => (
                    <tr key={item.id}>
                      <td className="instrument-cell">{item.instrument}</td>
                      <td className="market-cell">{item.market}</td>
                      <td className={`change-cell ${item.change.startsWith('+') ? 'positive' : 'negative'}`}>
                        {item.change}
                      </td>
                      <td className="buy-cell">
                        <button 
                          className="buy-btn"
                          onClick={() => handleBuyClick(item.instrument)}
                        >
                          {item.buyPrice}
                        </button>
                      </td>
                      <td className="spread-cell">{item.spread}</td>
                      <td className="sell-cell">
                        <button 
                          className="sell-btn"
                          onClick={() => handleSellClick(item.instrument)}
                        >
                          {item.sellPrice}
                        </button>
                      </td>
                      <td className="star-cell">
                        <button 
                          className={`star-btn ${item.isStarred ? 'starred' : ''}`}
                          onClick={() => toggleStar(item.id)}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : showWatchlistView ? (
          <div className="trades-view">
            {/* Trades Header */}
            <div className="trades-header">
              <div className="trades-tabs">
                <button 
                  className={`trades-tab ${tradesActiveTab === 'Trades' ? 'active' : ''}`}
                  onClick={() => handleTradesTabClick('Trades')}
                >
                  Trades
                </button>
                <button 
                  className={`trades-tab ${tradesActiveTab === 'Transactions' ? 'active' : ''}`}
                  onClick={() => handleTradesTabClick('Transactions')}
                >
                  Transactions
                </button>
                <button className="trades-tab count-tab">
                  7
                </button>
                <div className="trades-filter">
                  <select 
                    value={tradesFilter} 
                    onChange={(e) => handleTradesFilterChange(e.target.value)}
                    className="filter-dropdown"
                  >
                    <option value="All">All</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <button className="trades-search-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L23.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
                <button className="trades-close-btn" onClick={closeTradesView}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Trades/Transactions Table */}
            <div className="trades-table-container">
              {tradesActiveTab === 'Trades' ? (
                <table className="trades-table">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Order</th>
                      <th>Instrument</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Swaps</th>
                      <th>Commission</th>
                      <th>Taxes & Fees</th>
                      <th>P&L</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradesData.map((trade) => (
                      <tr key={trade.id}>
                        <td>{trade.time}</td>
                        <td>{trade.order}</td>
                        <td>{trade.instrument}</td>
                        <td>{trade.description}</td>
                        <td>
                          <span className={`trade-type ${trade.type.toLowerCase()}`}>
                            {trade.type}
                          </span>
                        </td>
                        <td>{trade.quantity}</td>
                        <td>{trade.price}</td>
                        <td>{trade.swaps}</td>
                        <td>{trade.commission}</td>
                        <td>{trade.taxesFees}</td>
                        <td className={trade.pnl.startsWith('+') ? 'positive' : trade.pnl.startsWith('-') ? 'negative' : ''}>
                          {trade.pnl}
                        </td>
                        <td>
                          <div className="trade-actions">
                            <button className="close-all-btn" onClick={closeAllTrades}>
                              Close All
                            </button>
                            <button className="close-btn" onClick={() => closeTrade(trade.id)}>
                              Close
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="transactions-table">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Order</th>
                      <th>Instrument</th>
                      <th>Description</th>
                      <th>Type</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Swaps</th>
                      <th>Commission</th>
                      <th>Taxes & Fees</th>
                      <th>P&L</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionsData.map((transaction) => (
                      <tr key={transaction.id}>
                        <td>{transaction.time}</td>
                        <td>{transaction.order}</td>
                        <td>{transaction.instrument}</td>
                        <td>{transaction.description}</td>
                        <td>
                          <span className={`transaction-type ${transaction.type.toLowerCase()}`}>
                            {transaction.type}
                          </span>
                        </td>
                        <td>{transaction.quantity}</td>
                        <td>{transaction.price}</td>
                        <td>{transaction.swaps}</td>
                        <td>{transaction.commission}</td>
                        <td>{transaction.taxesFees}</td>
                        <td className={transaction.pnl.startsWith('+') ? 'positive' : transaction.pnl.startsWith('-') ? 'negative' : ''}>
                          {transaction.pnl}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ) : showPositionsView ? (
          <div className="positions-view">
            {/* Positions Header */}
            <div className="positions-header">
              <div className="positions-tabs">
                <button 
                  className={`positions-tab ${positionsActiveTab === 'Positions' ? 'active' : ''}`}
                  onClick={() => handlePositionsTabClick('Positions')}
                >
                  Positions
                </button>
                <button 
                  className={`positions-tab ${positionsActiveTab === 'Orders' ? 'active' : ''}`}
                  onClick={() => handlePositionsTabClick('Orders')}
                >
                  Orders
                </button>
                <button className="positions-tab count-tab">
                  7
                </button>
                <button className="positions-tab all-tab">
                  All
                </button>
                <button className="positions-search-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L23.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
                <button className="positions-close-btn" onClick={closePositionsView}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Positions/Orders Table */}
            <div className="positions-table-container">
              {positionsActiveTab === 'Positions' ? (
                <table className="positions-table">
                  <thead>
                    <tr>
                      <th>Instruments</th>
                      <th>Direction</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Current....</th>
                      <th>S/L</th>
                      <th>T/P</th>
                      <th>Created Date</th>
                      <th>Commission</th>
                      <th>Swap</th>
                      <th>Pips</th>
                      <th>Gross Profit</th>
                      <th>Net Profit</th>
                      <th>
                        <button className="close-all-positions-btn" onClick={closeAllPositions}>
                          Close All
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {positionsData.map((position) => (
                      <tr key={position.id}>
                        <td className="instrument-cell">{position.instrument}</td>
                        <td className={`direction-cell ${position.direction.toLowerCase()}`}>
                          {position.direction}
                        </td>
                        <td className="quantity-cell">{position.quantity}</td>
                        <td className="price-cell">{position.price}</td>
                        <td className="current-price-cell">{position.currentPrice}</td>
                        <td className="stop-loss-cell">{position.stopLoss}</td>
                        <td className="take-profit-cell">{position.takeProfit}</td>
                        <td className="created-date-cell">{position.createdDate}</td>
                        <td className="commission-cell">{position.commission}</td>
                        <td className="swap-cell">{position.swap}</td>
                        <td className={`pips-cell ${position.pips.startsWith('+') ? 'positive' : 'negative'}`}>
                          {position.pips}
                        </td>
                        <td className={`gross-profit-cell ${position.grossProfit.startsWith('+') ? 'positive' : 'negative'}`}>
                          {position.grossProfit}
                        </td>
                        <td className={`net-profit-cell ${position.netProfit.startsWith('+') ? 'positive' : 'negative'}`}>
                          {position.netProfit}
                        </td>
                        <td className="close-cell">
                          <button 
                            className={`close-position-btn ${position.netProfit.startsWith('+') ? 'positive' : 'negative'}`}
                            onClick={() => closePosition(position.id)}
                          >
                            Close
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Instruments</th>
                      <th>Type</th>
                      <th>Direction</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Current Price</th>
                      <th>Distance</th>
                      <th>S/L</th>
                      <th>T/P</th>
                      <th>Created Date</th>
                      <th>
                        <button className="close-all-orders-btn" onClick={closeAllOrders}>
                          Close All
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order) => (
                      <tr key={order.id}>
                        <td className="instrument-cell">{order.instrument}</td>
                        <td className="type-cell">{order.type}</td>
                        <td className={`direction-cell ${order.direction.toLowerCase()}`}>
                          {order.direction}
                        </td>
                        <td className="description-cell">{order.description}</td>
                        <td className="quantity-cell">{order.quantity}</td>
                        <td className="price-cell">{order.price}</td>
                        <td className="current-price-cell">{order.currentPrice}</td>
                        <td className="distance-cell">{order.distance}</td>
                        <td className="stop-loss-cell">{order.stopLoss}</td>
                        <td className="take-profit-cell">{order.takeProfit}</td>
                        <td className="created-date-cell">{order.createdDate}</td>
                        <td className="close-cell">
                          <button 
                            className="close-order-btn"
                            onClick={() => closeOrder(order.id)}
                          >
                            Close
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        ) : (
          /* Chart Widgets Area */
          <div className="workspace-area">
            {chartWidgets.length === 0 ? (
              <div className="empty-workspace">
                <h2>Workspace Area</h2>
                <p>Click on "Add Widget" → "Charts" to add chart widgets for currency pairs</p>
              </div>
            ) : (
              <div className="chart-widgets-grid">
                {chartWidgets.map((widget) => (
                  <div key={widget.id} className="chart-widget">
                    <div className="chart-widget-header">
                      <div className="widget-pair-info">
                        <span className="widget-pair-name">{widget.pair}</span>
                        <div className="widget-price-info">
                          <span className="buy-price">{forexPairs.find(p => p.name === widget.pair)?.buyPrice}</span>
                          <span className="sell-price">{forexPairs.find(p => p.name === widget.pair)?.sellPrice}</span>
                        </div>
                      </div>
                      <div className="widget-controls">
                        <button className="widget-minimize">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 19h12v2H6z"/>
                          </svg>
                        </button>
                        <button className="widget-maximize">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                          </svg>
                        </button>
                        <button 
                          className="widget-close"
                          onClick={() => removeChartWidget(widget.id)}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="chart-widget-content">
                      <div className="chart-placeholder">
                        <svg width="60" height="40" viewBox="0 0 100 60" fill="none">
                          <path d="M10 50 L20 45 L30 40 L40 35 L50 30 L60 25 L70 20 L80 15 L90 10" 
                                stroke="#1a73e8" strokeWidth="2" fill="none"/>
                          <path d="M10 50 L20 45 L30 40 L40 35 L50 30 L60 25 L70 20 L80 15 L90 10" 
                                stroke="#1a73e8" strokeWidth="1" fill="url(#gradient)" opacity="0.3"/>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#1a73e8" stopOpacity="0"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="chart-label">Chart View</span>
                      </div>
                      {/* BUY/SELL Buttons */}
                      <div className="widget-trading-buttons">
                        <button 
                          className="widget-sell-button"
                          onClick={() => openOrderPanel(widget.pair)}
                        >
                          <span className="widget-button-label">SELL</span>
                          <span className="widget-button-price">{forexPairs.find(p => p.name === widget.pair)?.sellPrice}</span>
                        </button>
                        <button 
                          className="widget-buy-button"
                          onClick={() => openOrderPanel(widget.pair)}
                        >
                          <span className="widget-button-label">BUY</span>
                          <span className="widget-button-price">{forexPairs.find(p => p.name === widget.pair)?.buyPrice}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Order Panel Modal */}
      {showOrderPanel && (
        <div className="order-panel-overlay" onClick={closeOrderPanel}>
          <div className="order-panel-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="order-panel-header">
              <div className="pair-selector-container">
                <select 
                  className="pair-selector" 
                  value={selectedPair} 
                  onChange={(e) => setSelectedPair(e.target.value)}
                >
                  {forexPairs.map(pair => (
                    <option key={pair.name} value={pair.name}>
                      {pair.name}
                    </option>
                  ))}
                </select>
                <svg className="pair-selector-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <button className="order-panel-close" onClick={closeOrderPanel}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="order-panel-tabs">
              <button 
                className={`order-tab ${activeTab === 'MARKET' ? 'active' : ''}`}
                onClick={() => setActiveTab('MARKET')}
              >
                MARKET
              </button>
              <div className="order-tab-separator"></div>
              <button 
                className={`order-tab ${activeTab === 'ORDER' ? 'active' : ''}`}
                onClick={() => setActiveTab('ORDER')}
              >
                ORDER
              </button>
            </div>

            {/* Content */}
            <div className="order-panel-content">
              {/* Volume Section */}
              <div className="volume-section">
                <label className="volume-label">VOLUME</label>
                <div className="volume-selector">
                  <select 
                    className="volume-dropdown" 
                    value={volume} 
                    onChange={(e) => setVolume(e.target.value)}
                  >
                    <option value="0.01">0.01</option>
                    <option value="0.05">0.05</option>
                    <option value="0.10">0.10</option>
                    <option value="0.25">0.25</option>
                    <option value="0.50">0.50</option>
                    <option value="1.00">1.00</option>
                  </select>
                </div>
                <div className="margin-required">
                  Margin Required: 3.44$
                </div>
              </div>

              {/* Stop Loss & Take Profit */}
              <div className="order-options">
                <div className="options-row">
                  <div className="option-group">
                    <label className="checkbox-container">
                      <input 
                        type="checkbox" 
                        checked={stopLoss} 
                        onChange={(e) => setStopLoss(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      STOP LOSS
                    </label>
                    {stopLoss && (
                      <div className="option-inputs">
                        <div className="input-group">
                          <label className="input-label">Pips:</label>
                          <input 
                            type="text" 
                            className="option-input" 
                            placeholder="1.012"
                            defaultValue="1.012"
                          />
                        </div>
                        <div className="input-group">
                          <label className="input-label">Estimated Price:</label>
                          <input 
                            type="text" 
                            className="option-input" 
                            placeholder="0.00"
                            defaultValue="0.00"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="option-group">
                    <label className="checkbox-container">
                      <input 
                        type="checkbox" 
                        checked={takeProfit} 
                        onChange={(e) => setTakeProfit(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                      TAKE PROFIT
                    </label>
                    {takeProfit && (
                      <div className="option-inputs">
                        <div className="input-group">
                          <label className="input-label">Pips:</label>
                          <input 
                            type="text" 
                            className="option-input" 
                            placeholder="1.012"
                            defaultValue="1.012"
                          />
                        </div>
                        <div className="input-group">
                          <label className="input-label">Estimated Price:</label>
                          <input 
                            type="text" 
                            className="option-input" 
                            placeholder="0.000"
                            defaultValue="0.000"
                          />
                        </div>
                    </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Trading Details */}
              <div className="trading-details">
                <div className="detail-row">
                  <span className="detail-label">Free Collateral</span>
                  <span className="detail-value">0.00 USD</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Commissions</span>
                  <span className="detail-value">0.00 USD</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Min. Lot</span>
                  <span className="detail-value">0.01</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Swap Long</span>
                  <span className="detail-value">-0.00</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Swap Short</span>
                  <span className="detail-value">-0.00</span>
                </div>
              </div>

              {/* Buy/Sell Buttons */}
              <div className="trading-buttons">
                <button className="sell-button">
                  <span className="button-label">SELL</span>
                  <span className="button-price">{getCurrentPairData().sellPrice}</span>
                </button>
                <button className="buy-button">
                  <span className="button-label">BUY</span>
                  <span className="button-price">{getCurrentPairData().buyPrice}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="settings-overlay" onClick={closeSettingsModal}>
          <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="settings-header">
              <h2 className="settings-title">Settings</h2>
              <button className="settings-close" onClick={closeSettingsModal}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="settings-tabs">
              <button 
                className={`settings-tab ${settingsActiveTab === 'General' ? 'active' : ''}`}
                onClick={() => setSettingsActiveTab('General')}
              >
                General
              </button>
              <div className="settings-tab-separator"></div>
              <button 
                className={`settings-tab ${settingsActiveTab === 'Notification' ? 'active' : ''}`}
                onClick={() => setSettingsActiveTab('Notification')}
              >
                Notification
              </button>
            </div>

            {/* Content */}
            <div className="settings-content">
              {settingsActiveTab === 'General' && (
                <div className="settings-general">
                  <h3 className="settings-section-title">General Settings</h3>
                  
                  {/* Time Zone */}
                  <div className="settings-field">
                    <label className="settings-label">Time Zone</label>
                    <select 
                      className="settings-dropdown"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                    >
                      <option value="UTC (Coordinated Universal Time)">UTC (Coordinated Universal Time)</option>
                      <option value="EST (Eastern Standard Time)">EST (Eastern Standard Time)</option>
                      <option value="PST (Pacific Standard Time)">PST (Pacific Standard Time)</option>
                      <option value="GMT (Greenwich Mean Time)">GMT (Greenwich Mean Time)</option>
                    </select>
                  </div>

                  {/* Language */}
                  <div className="settings-field">
                    <label className="settings-label">Language</label>
                    <select 
                      className="settings-dropdown"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                    </select>
                  </div>

                  {/* Theme */}
                  <div className="settings-field">
                    <label className="settings-label">Theme</label>
                    <div className="theme-options">
                      <button 
                        className={`theme-button ${theme === 'Light' ? 'active' : ''}`}
                        onClick={() => setTheme('Light')}
                      >
                        Light
                      </button>
                      <button 
                        className={`theme-button ${theme === 'Dark' ? 'active' : ''}`}
                        onClick={() => setTheme('Dark')}
                      >
                        Dark
                      </button>
                      <button 
                        className={`theme-button ${theme === 'Auto' ? 'active' : ''}`}
                        onClick={() => setTheme('Auto')}
                      >
                        Auto
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {settingsActiveTab === 'Notification' && (
                <div className="settings-notification">
                  <h3 className="settings-section-title">Notification Settings</h3>
                  
                  {/* Enable Notification */}
                  <div className="settings-toggle-field">
                    <label className="settings-label" onClick={() => setEnableNotification(!enableNotification)}>Enable Notification</label>
                    <div className="toggle-switch" onClick={() => setEnableNotification(!enableNotification)}>
                      <input 
                        type="checkbox" 
                        className="toggle-input"
                        checked={enableNotification}
                        onChange={(e) => setEnableNotification(e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </div>
                  </div>

                  {/* Sound Alerts */}
                  <div className="settings-toggle-field">
                    <label className="settings-label" onClick={() => setSoundAlerts(!soundAlerts)}>Sound alerts</label>
                    <div className="toggle-switch" onClick={() => setSoundAlerts(!soundAlerts)}>
                      <input 
                        type="checkbox" 
                        className="toggle-input"
                        checked={soundAlerts}
                        onChange={(e) => setSoundAlerts(e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </div>
                  </div>

                  {/* Notification Types */}
                  <div className="settings-field">
                    <label className="settings-label">Notification Types</label>
                    <div className="checkbox-list">
                      <label className="checkbox-item">
                        <input 
                          type="checkbox" 
                          checked={tradeExecution}
                          onChange={(e) => setTradeExecution(e.target.checked)}
                        />
                        <span className="checkmark-square"></span>
                        Trade Execution
                      </label>
                      <label className="checkbox-item">
                        <input 
                          type="checkbox" 
                          checked={priceAlerts}
                          onChange={(e) => setPriceAlerts(e.target.checked)}
                        />
                        <span className="checkmark-square"></span>
                        Price Alerts
                      </label>
                      <label className="checkbox-item">
                        <input 
                          type="checkbox" 
                          checked={accountUpdates}
                          onChange={(e) => setAccountUpdates(e.target.checked)}
                        />
                        <span className="checkmark-square"></span>
                        Account Updates
                      </label>
                      <label className="checkbox-item">
                        <input 
                          type="checkbox" 
                          checked={newsUpdates}
                          onChange={(e) => setNewsUpdates(e.target.checked)}
                        />
                        <span className="checkmark-square"></span>
                        News Updates
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="settings-footer">
              <button className="reset-button" onClick={handleResetToDefault}>
                Reset to Default
              </button>
              <button className="save-button" onClick={handleSaveSettings}>
                Save Setting
              </button>
          </div>
        </div>
      </div>
      )}



      {/* Withdrawal Modal */}
      {showWithdrawalModal && (
        <div className="withdrawal-overlay" onClick={closeWithdrawalModal}>
          <div className="withdrawal-modal" onClick={(e) => e.stopPropagation()}>
            {/* Page 1 Content */}
            {withdrawalPage === 1 && (
              <div className="withdrawal-page">
                <div className="withdrawal-header">
                  <span className="withdrawal-title">Withdrawal</span>
                  <button className="withdrawal-close" onClick={closeWithdrawalModal}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

                <div className="withdrawal-content">
                  <div className="withdrawal-balance-section">
                    <p className="withdrawal-balance-text">Available Balance</p>
                    <div className="withdrawal-balance-animation">
                      <h1 className="withdrawal-balance-amount">
                        <span className="balance-currency">$</span>
                        <span className="balance-counter" data-target="1250">0.00</span>
                      </h1>
                    </div>
                    <p className="withdrawal-risk-text">After Risk Analyst Approval your funds will be sent</p>
            </div>

                  <div className="withdrawal-form-section">
                    <label htmlFor="withdrawal-amount" className="withdrawal-form-label">Amount to be withdrawn (USD)</label>
                    <div className="withdrawal-input-group">
                <input 
                  type="text" 
                        id="withdrawal-amount" 
                        value={withdrawalAmount}
                        onChange={(e) => handleWithdrawalAmountChange(e.target.value)}
                        className="withdrawal-input"
                      />
                      <span className="withdrawal-input-unit">USD</span>
                    </div>
                    <p className="withdrawal-min-amount-text">Minimum Withdrawal Amount: $50 (USD)</p>
              </div>

                  <div className="withdrawal-quick-selection">
                    <span className="withdrawal-quick-selection-label">Quick Quality Selection</span>
                    <div className="withdrawal-selection-buttons">
                  <button 
                        className={`withdrawal-selection-btn ${withdrawalAmount === '100' ? 'active' : ''}`}
                        onClick={() => handleWithdrawalAmountChange('100')}
                  >
                    $ 100
                  </button>
                  <button 
                        className={`withdrawal-selection-btn ${withdrawalAmount === '250' ? 'active' : ''}`}
                        onClick={() => handleWithdrawalAmountChange('250')}
                  >
                    $ 250
                  </button>
                  <button 
                        className={`withdrawal-selection-btn ${withdrawalAmount === '500' ? 'active' : ''}`}
                        onClick={() => handleWithdrawalAmountChange('500')}
                  >
                    $ 500
                  </button>
                  <button 
                        className={`withdrawal-selection-btn ${withdrawalAmount === '1000' ? 'active' : ''}`}
                        onClick={() => handleWithdrawalAmountChange('1000')}
                  >
                    $ 1000
                  </button>
                  <button 
                        className={`withdrawal-selection-btn ${withdrawalAmount === '2500' ? 'active' : ''}`}
                        onClick={() => handleWithdrawalAmountChange('2500')}
                  >
                    $ 2500
                  </button>
                </div>
                  </div>

                  <div className="withdrawal-summary-section">
                    <div className="withdrawal-summary-row">
                      <span className="withdrawal-summary-label">Amount to be withdrawn:</span>
                      <span className="withdrawal-summary-value">${withdrawalAmount}.00</span>
                    </div>
                    <div className="withdrawal-summary-row">
                      <span className="withdrawal-summary-label">Transaction Fee:</span>
                      <span className="withdrawal-summary-value">$0.00</span>
                    </div>
                    <div className="withdrawal-summary-row">
                      <span className="withdrawal-summary-label">Commission:</span>
                      <span className="withdrawal-summary-value">$0.00</span>
                    </div>
                    <div className="withdrawal-summary-row withdrawal-total">
                      <span className="withdrawal-total-label">Total:</span>
                      <span className="withdrawal-total-value">${withdrawalAmount}.00</span>
              </div>
            </div>

                  <button 
                    className="withdrawal-button" 
                    onClick={() => handleWithdrawalPageChange(2)}
                  >
                    WITHDRAW
                  </button>
                </div>
                </div>
            )}

            {/* Page 2 Content */}
            {withdrawalPage === 2 && (
              <div className="withdrawal-page">
                <div className="withdrawal-header">
                  <span className="withdrawal-title">Withdrawal</span>
                  <button className="withdrawal-close" onClick={closeWithdrawalModal}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>

                  <div className="withdrawal-tab-section">
                    <button 
                      className={`withdrawal-tab ${withdrawalMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => handleWithdrawalMethodChange('bank')}
                    >
                      Bank Transfer
                    </button>
                    <div className="withdrawal-tab-separator"></div>
                    <button 
                      className={`withdrawal-tab ${withdrawalMethod === 'crypto' ? 'active' : ''}`}
                      onClick={() => handleWithdrawalMethodChange('crypto')}
                    >
                      Crypto
                    </button>
                </div>

                <div className="withdrawal-content">

                  {/* Bank Transfer Form */}
                  {withdrawalMethod === 'bank' && (
                    <div className="withdrawal-form-sub-section">
                      <label className="withdrawal-form-label">Bank Name</label>
                      <div className="withdrawal-sub-input-group">
                        <input type="text" placeholder="Dutch Bank LTD" className="withdrawal-sub-input" />
              </div>
                      <label className="withdrawal-form-label" style={{marginTop: '10px'}}>Account Holder Name</label>
                      <div className="withdrawal-sub-input-group">
                        <input type="text" placeholder="Dutch Bank LTD" className="withdrawal-sub-input" />
            </div>
                      <label className="withdrawal-form-label" style={{marginTop: '10px'}}>IBAN Address</label>
                      <div className="withdrawal-sub-input-group">
                        <input type="text" placeholder="9012 3456 78" className="withdrawal-sub-input" />
                      </div>
                    </div>
                  )}

                  {/* Crypto Form */}
                  {withdrawalMethod === 'crypto' && (
                    <div className="withdrawal-form-sub-section">
                      <label className="withdrawal-form-label">Crypto</label>
                      <div className="withdrawal-sub-input-group withdrawal-select-group">
                        <div className="withdrawal-select-content">
                          <div className="withdrawal-crypto-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" fill="#26a17b"/>
                              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">₮</text>
                            </svg>
                      </div>
                          <span className="withdrawal-select-text">USDT</span>
                          <svg className="withdrawal-dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>
                      </div>
                      <label className="withdrawal-form-label" style={{marginTop: '10px'}}>Network Address</label>
                      <div className="withdrawal-sub-input-group withdrawal-select-group">
                        <div className="withdrawal-select-content">
                          <span className="withdrawal-select-text">TRC 20</span>
                          <svg className="withdrawal-dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <label className="withdrawal-form-label" style={{marginTop: '10px'}}>Withdrawal Address</label>
                      <div className="withdrawal-sub-input-group">
                        <input type="text" placeholder="DSA548add4857dsa6s54" className="withdrawal-sub-input" />
                      </div>
                    </div>
                  )}

                  <div className="withdrawal-summary-section">
                    <p className="withdrawal-form-label">Withdrawal Amount: <span>${withdrawalAmount}</span></p>
                    <div className="withdrawal-summary-row">
                      <span className="withdrawal-summary-label">Amount to be Withdraw:</span>
                      <span className="withdrawal-summary-value">${withdrawalAmount}.00</span>
                    </div>
                    <div className="withdrawal-summary-row">
                      <span className="withdrawal-summary-label">Transaction Fee:</span>
                      <span className="withdrawal-summary-value">$0.00</span>
                    </div>
                    <div className="withdrawal-summary-row">
                      <span className="withdrawal-summary-label">Commission:</span>
                      <span className="withdrawal-summary-value">$0.00</span>
                    </div>
                    <div className="withdrawal-summary-row withdrawal-total">
                      <span className="withdrawal-total-label">Total:</span>
                      <span className="withdrawal-total-value">${withdrawalAmount}.00</span>
                    </div>
                  </div>

                  <button className="withdrawal-approve-button" onClick={handleWithdrawalSubmit}>
                    {withdrawalMethod === 'bank' ? 'APPROVE' : 'WITHDRAW'}
              </button>
            </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearchModal && (
        <div className="search-overlay" onClick={closeSearchModal}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <div className="search-header-left">
                <span className="search-currency-pair">CADCHF</span>
                <svg className="search-dropdown-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div className="search-header-right">
                <svg className="search-close-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={closeSearchModal}>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
            
            <div className="search-tabs">
              <div 
                className={`search-tab ${searchActiveTab === 'MARKET' ? 'active' : ''}`}
                onClick={() => handleSearchTabClick('MARKET')}
              >
                MARKET
              </div>
              <div 
                className={`search-tab ${searchActiveTab === 'POSITIONS' ? 'active' : ''}`}
                onClick={() => handleSearchTabClick('POSITIONS')}
              >
                POSITIONS
              </div>
              <div 
                className={`search-tab ${searchActiveTab === 'ORDERS' ? 'active' : ''}`}
                onClick={() => handleSearchTabClick('ORDERS')}
              >
                ORDERS
              </div>
            </div>
            
            <table className="search-market-table">
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Forex</th>
                  <th>Change</th>
                  <th>Bid</th>
                  <th>Spread</th>
                  <th>Ask</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CADCHF</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>0</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>CADJPY</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>12.00</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>CHFJPY</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>0</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>EURCAD</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>0</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>EURCHF</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>21</td>
                  <td className="search-ask">1.05159</td>
                </tr>
                <tr>
                  <td>EURGBP</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>12.00</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>EURJPY</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>0</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>EURUSD</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58545</td>
                  <td>6.05</td>
                  <td className="search-ask">0.58545</td>
                </tr>
                <tr>
                  <td>GBPCAD</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>6.00</td>
                  <td className="search-ask">1.05159</td>
                </tr>
                <tr>
                  <td>GBPCHF</td>
                  <td>Major</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>9.15</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>GBPUSD</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">0.58258</td>
                  <td>0</td>
                  <td className="search-ask">0.58258</td>
                </tr>
                <tr>
                  <td>GBPUSD</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>4.35</td>
                  <td className="search-ask">1.05159</td>
                </tr>
                <tr>
                  <td>USDCAD</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>0</td>
                  <td className="search-ask">1.05159</td>
                </tr>
                <tr>
                  <td>USDCHF</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>4</td>
                  <td className="search-ask">1.05159</td>
                </tr>
                <tr>
                  <td>USDCHF</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>0</td>
                  <td className="search-ask">1.05159</td>
                </tr>
                <tr>
                  <td>USDJPY</td>
                  <td>Minor</td>
                  <td className="search-change positive">+0.02%</td>
                  <td className="search-bid">1.05159</td>
                  <td>23</td>
                  <td className="search-ask">1.05159</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Help Desk Modal */}
      {showHelpDeskModal && (
        <div className="help-desk-overlay" onClick={closeHelpDeskModal}>
          <div className="help-desk-modal" onClick={(e) => e.stopPropagation()}>
            <div className="help-desk-header">
              <h3 className="help-desk-title">Help Desk</h3>
              <span className="help-desk-close-btn" onClick={closeHelpDeskModal}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.72457 1.23765L1.19989 8.76234M1.11925 1.15701L8.80521 8.84298" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            
            <div className="help-desk-content">
              <div className="help-desk-tab-container">
                <button className="help-desk-tab-button active">Contact Now</button>
              </div>

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
                    <label htmlFor="helpDeskFullName" className="help-desk-form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="helpDeskFullName" 
                      className="help-desk-form-input" 
                      value={helpDeskForm.fullName}
                      onChange={(e) => handleHelpDeskFormChange('fullName', e.target.value)}
                    />
                  </div>
                  <div className="help-desk-form-group">
                    <label htmlFor="helpDeskEmail" className="help-desk-form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="helpDeskEmail" 
                      className="help-desk-form-input" 
                      value={helpDeskForm.email}
                      onChange={(e) => handleHelpDeskFormChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="help-desk-form-group help-desk-full-width" style={{marginBottom: '1rem'}}>
                  <label htmlFor="helpDeskSubject" className="help-desk-form-label">Subject</label>
                  <input 
                    type="text" 
                    id="helpDeskSubject" 
                    className="help-desk-form-input"
                    value={helpDeskForm.subject}
                    onChange={(e) => handleHelpDeskFormChange('subject', e.target.value)}
                  />
                </div>

                <div className="help-desk-form-group help-desk-full-width">
                  <label htmlFor="helpDeskMessage" className="help-desk-form-label">Message</label>
                  <textarea 
                    id="helpDeskMessage" 
                    className="help-desk-form-textarea"
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
      )}

      {/* Account Statistics Modal */}
      <AccountStatistics 
        isOpen={showAccountStatistics} 
        onClose={() => setShowAccountStatistics(false)} 
      />

      {/* Set Alert Modal */}
      <SetAlert 
        isOpen={showSetAlert} 
        onClose={() => setShowSetAlert(false)} 
      />
    </div>
  )
}

export default Home
