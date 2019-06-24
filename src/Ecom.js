import React, { Component } from 'react';
import { Image } from '@rebass/emotion';
import styled from '@emotion/styled';
import Nav from './Navbar';
import Foot from './Footer';


const Button = styled.button`
 text-align: center;
  padding: 4em;
  margin: 2em;
  font-size:1em;
  color: ${props =>
    props.primary ? 'hotpink' : 'turquoise'};
`

const Container = styled.div(props => ({
  // position: 'relative',
  display: 'flex',
  marginLeft: '3em',
  marginRight: '3em',
  marginBottom: '3em',
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

            <Container column>
              <Button>Regular</Button>
            <Button primary>Primary</Button>
            <Image
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>
           </Container>
         <Foot />
         </div>
        )
    }
}
