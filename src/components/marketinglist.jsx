import React from "react";
import { TfiReload, TfiLayoutGrid2 } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { PiWalletLight, PiSwapFill } from "react-icons/pi";
import { FaChartBar, FaRegFileAlt } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import "./marketing.css";

export default function MarketingList() {
  return (
    <div className="home-container">
      {/* Background */}
      <div className="background">
        <div className="background-top"></div>
      </div>

      {/* Foreground content */}
      <div className="foreground">
        {/* Balance Section */}
        <div className="balance-section">
          <div className="balance-label">Equality</div>
          <div className="balance-amount">$10000000</div>
        </div>

        {/* Menu */}
        <div className="menu">
          <div className="menu-item">
            <TfiLayoutGrid2 size={20} />
            <div>Menu</div>
          </div>
          <div className="menu-item">
            <PiWalletLight size={25} />
            <div>Deposit</div>
          </div>
          <div className="menu-item">
            <PiSwapFill size={25} />
            <div>Trade</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <div className="tab">All</div>
          <div className="tab">Watchlist</div>
          <div className="tab">Endex</div>
          <div className="tab">Exchange</div>
          <div className="tab">Commodity</div>
          <div className="tab">Stock</div>
        </div>

        {/* Search */}
        <div className="search-bar">
          <CiSearch size={20} />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th className="center">Price</th>
                <th className="center">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="flag">🇦🇺</span> AUDUSD
                </td>
                <td className="center">0.65419</td>
                <td className="center green">%15.06</td>
              </tr>
              <tr>
                <td>
                  <span className="letter">a</span> ASELSAN
                </td>
                <td className="center">0.65419</td>
                <td className="center red">%15.06</td>
              </tr>
              <tr>
                <td>
                  <span className="leaf">🍀</span> GARAN
                </td>
                <td className="center">—</td>
                <td className="center blue">Market Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item">
          <MdShowChart size={30} />
          <span>Market</span>
        </button>

        <button className="nav-item">
          <FaChartBar size={30} />
          <span>Chart</span>
        </button>

        <button className="nav-item">
          <div className="icon-wrapper">
            <FaRegFileAlt size={30} />
            <span className="po-text">P/O</span>
          </div>
          <span>Positions</span>
        </button>

        <button className="nav-item">
          <TfiReload size={30} />
          <span>History</span>
        </button>
      </div>
    </div>
  );
}
