import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ExitImg = styled.img`
    font-size: 2rem;
    height: 4rem;
    margin: 0 1rem;
    cursor: pointer;
`

function Exit () {
    return (
        <Container>
            <ExitImg className="iconify" data-inline="false" data-icon="mdi:exit-to-app"/>
        </Container>
    )
}




export default Exit;