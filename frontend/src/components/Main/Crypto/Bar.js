import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 2rem 0;
    border-radius: 5px;
`

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

const Name = styled(Text)`
    width: 30%;
`

const Ticket = styled(Text)`
    width: 15%;
`

const Price = styled(Text)`
    width: 10%;
`

const Volume = styled(Text)`
    width: 15%;
`

const Change = styled(Text)`
    width: 15%;
`

const MktCap = styled(Text)`
    width: 15%;
`

const Bar = () => {
    return (
        <Container>
            <Name>Name</Name>
            <Ticket>Ticket</Ticket>
            <Price>Price</Price>
            <Volume>Volume</Volume>
            <Change>24h%</Change>
            <MktCap>Market Cap</MktCap>
        </Container>
    )
}

export default Bar;