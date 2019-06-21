import React, { Component } from 'react'
import styled from '@emotion/styled'


const Button = styled.button`
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))



export default class Ecom extends Component {
    render() {
        return (
            <div>
            <Container column>
            <Button>This is a regular button.</Button>
            <Button primary>This is a primary button.</Button>
          </Container>
          </div>
        )
    }
}
