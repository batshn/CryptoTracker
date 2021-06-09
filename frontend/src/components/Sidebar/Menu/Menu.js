import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`


function Menu () {
    return (
        <Container>
            <Link to="/"><Item title="Home Page" icon={'home'} active/> </Link>
            <Link to="/live"><Item title="Live Price" icon={'chart-histogram'}/> </Link>
        </Container>
    )
}

export default Menu;