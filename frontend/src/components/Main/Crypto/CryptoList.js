import React from 'react'
import styled from 'styled-components'
import Bar from './Bar'
import Crypto from './Crypto'

const Container = styled.div`
`


function CryptoList ({data}){

    return (
        <Container>
            <Bar />
            {data.map(crypto => (
                <Crypto data={crypto} key={crypto.ticket} />
            ))}
        </Container>
    )
}

export default CryptoList;