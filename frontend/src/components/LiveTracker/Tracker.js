import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';


// get Cryptocurrency API from Coingecko.com
function Tracker() {
  const[coins, setCoins] = useState([]);
  const[search, setSearch] = useState('');


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  } 

  // handle the filter
  const filteredCoins = coins.filter (coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      <div className="coin-row">
        <div className="coin">
          <p className="coin-symbol">Coin Name</p>
        </div>
        <div className="coin-data">
          <p className="coin-mark coin-symbol">symbol</p>
          <p className="coin-price coin-symbol">Current Price</p>
          <p className="coin-volume coin-symbol">Volume</p>
          <p className="coin-percent coin-symbol">Price Change</p>
          <p className="coin-marketcap coin-symbol">Market Cap</p>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return <Coin 
        key={coin.id} 
        name = {coin.name} 
        image = {coin.image} 
        symbol = {coin.symbol}
        marketcap = {coin.market_cap}
        price = {coin.current_price}
        priceChange = {coin.price_change_percentage_24h}
        volume = {coin.total_volume}
        />;
      })}
    </div>
  );
}

export default Tracker;
