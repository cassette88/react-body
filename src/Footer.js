import React from 'react';
import { Footer, Content } from "rbx";




export default function Foot() {
    var divStyle = {
        // position: 'absolute',
        marginTop: 'auto',
        bottom: '0',
        width: '100%',
        height: '6em',
        background: '#9690B6',
       
       
// background: '-webkit-linear-gradient(to right, #19547b, #ffd89b)',
// background: 'linear-gradient(to right, #19547b, #ffd89b)'

    }



    return (
     
     
          <Footer style={divStyle}>
  <Content textAlign="centered">
      
    <p>
      <strong>rbx</strong> by <a href="https://github.com/dfee">Devin Fee</a>.
      The source code is released under the{' '}
      <a href="https://opensource.org/licenses/mit-license.php">
        MIT License
      </a>
      . The website content is licensed{' '}
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY NC SA 4.0
      </a>
      .
    </p>
  </Content>
</Footer>
 
    )
}
