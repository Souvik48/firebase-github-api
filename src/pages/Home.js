import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {

 const context = useContext(UserContext)
 const [query, setQuery] = useState('') //user will send a username & store in query

 const [user,setUser] = useState(null) //user
  
 const fetchDetails = async () => {
     try{
        const {data} = await Axios.get(`https://api.github.com/users/${query}`)
        setUser(data)
        console.log({data})
    }
     catch(error){
         toast("Not able to locate user",{type: "error"})
     }

 }

 //Put Anypage behind login
 //we have an access of context and context have an access of user,
 //so we can grab something.
 if(!context.user?.uid){ //if user is not present
     return <Redirect to="/signin"/>
 }

  return(
    <Container className='p-sm-5 p-md-0'>
    <Row className=" mt-7">
      <Col md="6">
      <div className='text-center text-md-left' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '30vh' }}>
      <h1 className='font-weight-bold' style={{ fontSize: '4rem', color: '#2C3335' }}>GitSearch</h1>
      <p style={{ color: '#2C3335' }}>Search any github user's profile and see their work.</p>

      </div>
      </Col>  
      <Col md='6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem' }}>
      <InputGroup>
          <Input
            type="text"
            value={query}
            onChange={e=> setQuery(e.target.value)}
            placeholder="Please provide the username"
          />
          <InputGroupAddon addonType="append">
             &nbsp; &nbsp;
            <Button onClick={fetchDetails} color="primary" style={{ backgroundColor: '#2C3335' }}>Fetch User</Button>
          </InputGroupAddon>
        </InputGroup>
        </Col>
        </Row>
      <Row mt="3">
      <Col md="4">
        { user ? <UserCard user={user}/> : null}
      </Col>  
      <Col md='1'></Col>
      <Col md="7">
      {user ? <Repos repos_url={user.repos_url}/> : null}
      </Col>
    </Row>
  </Container>
  )


}


export default Home;