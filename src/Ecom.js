import React, { Component } from 'react';
import styled from '@emotion/styled';
import Nav from './Navbar'
import Foot from './Footer'


const Button = styled.button`
  padding: 4em;
  margin: 2em;
  font-size:1em;
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

const Container = styled.div(props => ({
  position: 'relative',
  display: 'flex',
  marginLeft: '3em',
  marginRight: '3em',
  flexDirection: props.column && 'column'
}))



export default class Ecom extends Component {
    render() {
        return (
            <div>
            <Nav />
            <Container column>
            <Button>Regular</Button>
            <Button primary>Primary</Button>
           </Container>
           <Foot />
         
          </div>
        )
    }
}
