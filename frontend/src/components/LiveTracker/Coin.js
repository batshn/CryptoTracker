import React from 'react';
import './Coin.css';
import {Button} from 'react'
import axios from 'axios';





function Coin ({data}) {
 const { name, image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap} = data;

 function addBook(data) {
    axios.post('https://y9zhowcmfi.execute-api.us-east-1.amazonaws.com/prod/crypto', data).then((response) => {
        console.log(response);
    });
  }

    
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                </div>
                <div className="coin-data">
                    <p className="coin-symbol">{symbol}</p>
                    <p className="coin-price">${current_price}</p>
                    <p className="coin-volume">${total_volume.toLocaleString()}</p>
                    {price_change_percentage_24h < 0 ? (
                        <p className="coin-percent red">{price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (
                    <p className="coin-percent green">{price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        ${market_cap.toLocaleString()}
                    </p>
                    <a href="#" onclick={addBook(data)}></a>
                </div>
            </div>
        </div>
    )
}

export default Coin;
    