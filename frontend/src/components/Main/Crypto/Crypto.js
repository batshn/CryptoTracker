import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;
    &:hover {
        background-color: ${({ theme }) => theme.secondary};
    }
`

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`

const Coin = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`

const CoinText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const CoinImg = styled.img`
    height: 35px;
    width: 35px;
`

const Ticket = styled(Text)`
    width: 15%;
`
const Price = styled(Text)`
    width: 10%;
`
const Volume = styled.div`
    width: 15%;
`

const Change = styled.div`
    width: 15%;
`

const MktCap = styled.div`
    display: flex;
    align-items: center;
`


function Crypto ({ data }) {
    const { name, image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap} = data;

    return (
        <Container>
            <Coin>
                <CoinImg src={"https://s3799204crypto.s3.amazonaws.com/" + image } />
                <CoinText>
                    {name}
                </CoinText>
            </Coin>
            <Ticket>{symbol.toUpperCase()}</Ticket>
            <Price>${current_price}</Price>
            <Volume>${total_volume.toLocaleString()}</Volume>
            <Change>${price_change_percentage_24h.toFixed(2)}</Change>
            <MktCap>${market_cap.toLocaleString()}</MktCap>
        </Container>

    )
}

export default Crypto;