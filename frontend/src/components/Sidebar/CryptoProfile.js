import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/btc.png'

const Container = styled.div`
    margin-top: 5rem;
`

const BtcImg = styled.img`
    height: 5rem;
`

const BtcContent = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({theme}) => theme.textColor };
`

function CryptoProfile() {
    return (
        <Container>
            <BtcImg src={Image}/>
            <BtcContent>Crypto Tracker</BtcContent>
        </Container>
    )
}

export default CryptoProfile;