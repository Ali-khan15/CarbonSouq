import React, { useState } from 'react';
import './cryptoTable.css';
import Image from'../../src/assets/bnb-icon2_2x.png';

const CryptoTable = () => {
  // Sample data
  const data = [
    { rank: 1, image: Image, name: 'Bitcoin', symbol: 'BTC', price: '$63,449.64', change1h: '0.4%', change24h: '-1.2%', change7d: '8.2%', volume24h: '$23,238,331,990', marketCap: '$1,251,726,700,793', trend: 'trend1.png' },
    { rank: 2, image: Image, name: 'Ethereum', symbol: 'ETH', price: '$2,718.29', change1h: '0.5%', change24h: '-1.8%', change7d: '5.2%', volume24h: '$9,086,836,713', marketCap: '$327,045,344,612', trend: 'trend2.png' },
    { rank: 3,  image: Image,name: 'Tether', symbol: 'USDT', price: '$0.9999', change1h: '0.2%', change24h: '-0.1%', change7d: '0.1%', volume24h: '$38,886,557,048', marketCap: '$117,911,280,321', trend: 'trend3.png' },
    { rank: 4,  image: Image,name: 'BNB', symbol: 'BNB', price: '$557.89', change1h: '-0.2%', change24h: '-3.2%', change7d: '3.0%', volume24h: '$794,508,398', marketCap: '$81,491,603,346', trend: 'trend4.png' },
    { rank: 5, image: Image, name: 'Solana', symbol: 'SOL', price: '$157.37', change1h: '0.6%', change24h: '-1.6%', change7d: '9.1%', volume24h: '$2,911,536,470', marketCap: '$73,239,471,337', trend: 'trend5.png' },
    { rank: 6, image: Image, name: 'USDC', symbol: 'USDC', price: '$0.9995', change1h: '0.2%', change24h: '0.0%', change7d: '0.0%', volume24h: '$5,618,535,038', marketCap: '$34,628,024,551', trend: 'trend6.png' },
    { rank: 7,  image: Image,name: 'XRP', symbol: 'XRP', price: '$0.5924', change1h: '0.7%', change24h: '-1.9%', change7d: '2.2%', volume24h: '$993,778,184', marketCap: '$33,319,418,961', trend: 'trend7.png' },
    { rank: 8,  image: Image,name: 'Lido Staked Ether', symbol: 'STETH', price: '$2,717.99', change1h: '0.4%', change24h: '-1.8%', change7d: '5.4%', volume24h: '$30,747,201', marketCap: '$26,624,453,425', trend: 'trend8.png' },
    { rank: 9, image: Image, name: 'Dogecoin', symbol: 'DOGE', price: '$0.1069', change1h: '0.1%', change24h: '-3.3%', change7d: '6.7%', volume24h: '$576,963,148', marketCap: '$15,568,018,647', trend: 'trend9.png' },
  ];

  // Create a state object to track the liked status of each coin by its rank
  const [likedCoins, setLikedCoins] = useState({});

  const handleStarClick = (coinRank) => {
    // Toggle the liked state of the selected coin rank
    setLikedCoins((prevLikedCoins) => ({
      ...prevLikedCoins,
      [coinRank]: !prevLikedCoins[coinRank],
    }));
  };

  return (
    <div className="container">
       <div className="crypto-overview-container">
      <div className="crypto-overview-header">
        <h2>Cryptocurrency Prices by Market Cap</h2>
        <p>
          The global cryptocurrency market cap today is $2.32 Trillion, a <span className="text-red">▼ 2.6%</span> change in the last 24 hours. <a href="#">Read more</a>
        </p>
      </div>

      <div className="crypto-overview-cards">
        <div className="market-cap-volume-card">
          <h3>$2,324,583,808,757</h3>
          <p>Market Cap <span className="text-red">▼ 2.6%</span></p>
          <img src="path-to-market-cap-graph.png" alt="Market Cap Graph" className="overview-graph"/>
        </div>

        <div className="market-cap-volume-card">
          <h3>$72,317,303,011</h3>
          <p>24h Trading Volume</p>
          <img src="path-to-volume-graph.png" alt="Trading Volume Graph" className="overview-graph"/>
        </div>

        <div className="trending-card">
          <div className="card-header">
            <h4>🔥 Trending</h4>
            <a href="#">View more </a>
          </div>
          <ul>
            <li>Dogs <span className="text-red">▼ 26.1%</span></li>
            <li>Simon's Cat <span className="text-green">▲ 27.1%</span></li>
            <li>Toncoin <span className="text-red">▼ 5.8%</span></li>
          </ul>
        </div>

        <div className="gainers-card">
          <div className="card-header">
            <h4>🚀 Largest Gainers</h4>
            <a href="#">View more </a>
          </div>
          <ul>
            <li>NULS <span className="text-green">▲ 34.1%</span></li>
            <li>Resistance Dog <span className="text-green">▲ 3.8%</span></li>
            <li>Telos <span className="text-green">▲ 18.5%</span></li>
          </ul>
        </div>
      </div>
    </div>

      <div className="navbar">
        <div className="nav-item active">
          All
        </div>
        <div className="nav-item">
          Highlights
        </div>
        <div className="nav-item">
          Pump.fun Ecosystem
        </div>
        <div className="nav-item">
          Categories
        </div>
        <div className="nav-item">
          Sun Pump Ecosystem
        </div>
        <div className="nav-item">
          TRON Meme
        </div>
        <div className="nav-item">
          Cat-Themed
        </div>
        <div className="nav-item customise">
          Customise
        </div>
      </div>

      <table className="crypto-table">
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th> {/* Column for "Buy" box */}
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => (
            <tr key={coin.rank}>
              <td>
                <button
                  className={`star-button ${likedCoins[coin.rank] ? 'filled' : ''}`}
                  onClick={() => handleStarClick(coin.rank)}
                >
                  ★
                </button>
              </td>
              <td>{index + 1}</td>
              <td>
                <img src={coin.image} alt={`${coin.name} logo`} className="coin-logo" />
                {coin.name} {coin.symbol}
              </td>
              <td>
                <div className="buy-box">Buy</div>
              </td>
              <td>{coin.price}</td>
              <td>{coin.change1h}</td>
              <td>{coin.change24h}</td>
              <td>{coin.change7d}</td>
              <td>{coin.volume24h}</td>
              <td>{coin.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
