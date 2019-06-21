import React, { Component } from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`


export default class Ecom extends Component {
    render() {
        return (
            <div>
                <p>Sample Ecom Site</p>
                <Button>Emotions</Button>
            </div>
        )
    }
}
