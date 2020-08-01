import React from 'react'
import {Container} from "reactstrap"



const Footer= () => {
    return (
        <Container
        fluid
        tag="footer"
        className="text-center text-white text-uppercase fixed-bottom
        p-3" style={{ backgroundColor: '#2C3335' }} dark expand='md'>
        Github Search App with Firebase
         <br/>
         &copy;GitFireApp
        </Container>
    )
}

export default Footer;