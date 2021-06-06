import React from 'react'
import styled from 'styled-components'
import CryptoProfile from './CryptoProfile'
import Menu from './Menu/Menu'

const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Sidebar (){
    return(
        <Container>
            <CryptoProfile/>
            <Menu/>
        </Container>
    );
}

export default Sidebar;