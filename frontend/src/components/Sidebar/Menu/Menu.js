import React from 'react'
import styled from 'styled-components'
import Item from './Item'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`


function Menu () {
    return (
        <Container>
            <Item title="Home" icon={'home'} active/>
            <Item title="History" icon={'chart-histogram'}/>
            <Item title="Log out" icon={'arrange-send-backward'}/>
        </Container>
    )
}

export default Menu;