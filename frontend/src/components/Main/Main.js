import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Exit from './Exit'
import NewCryptoBtn from './NewCryptoBtn'
import CryptoList from './Crypto/CryptoList'
import axios from 'axios';



const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

function Main () {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        axios.get('https://y9zhowcmfi.execute-api.us-east-1.amazonaws.com/prod/cryptos')
          .then(res => {
            setCoins(res.data);
            console.log("aaa"+res.data);
          })
          .catch(error => console.log(error));
      }, []);
    

    return(
        <Container>
            <Exit/>
            <NewCryptoBtn/>
            <CryptoList data={coins} />
        </Container>
    );
}

export default Main;