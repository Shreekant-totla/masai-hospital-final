import React, { useState } from 'react';
import { Stack,Input, FormControl, Button,Box,Alert,AlertIcon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const url = `https://axxa.onrender.com/users/login`
const Login = () => {
    const [userDetail,setUserDetails] = useState({
        email:"",
        password:"",
      
    })
    const navigate = useNavigate()
    const [err,setError] = useState(false)
    const handleLogin  = ()=>{
        axios.post(url,userDetail)
        .then((req)=>{
          localStorage.setItem("token",req.data?.token)
          navigate("/doctorAdd")

        })
        .catch((err)=>setError(true))
    }
    const {email,password} = userDetail;
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        handleLogin()
         
    }
  return (
   <form onSubmit={handleFormSubmit}>
     <Stack spacing="2rem">
         <FormControl isRequired><Input type="email" value={email} required onChange={(e)=>setUserDetails({...userDetail,email:e.target.value})} placeholder='Enter your email'/></FormControl>
         <FormControl isRequired><Input type="password" onChange={(e)=>setUserDetails({...userDetail,password:e.target.value})} required value={password} placeholder='Enter your password' /></FormControl>
         
       <Button _hover={{background:"yellow",color:"black"}} bg="yellow" color="black" type='submit'>Login</Button>

     {err&&<Alert status='error'>
    <AlertIcon />
    Invalid Credentials
  </Alert>}

     </Stack>

   </form>
  );
}

export default Login;
