import React, { useState } from 'react';
import { Stack,Input, FormControl, Button,Box } from '@chakra-ui/react';
import axios from 'axios';
const url = `https://axxa.onrender.com/users/`


const SignUp = ({handleSignUp}) => {
    const [userDetail,setUserDetails] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const addUser = ()=>{
       
           axios.post(`${url}signup`,{email:userDetail.email,password:userDetail.password})
           .then((req)=>handleSignUp())
           .catch((err)=>console.log(err))
    }
    const {email,password,confirmPassword} = userDetail;
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(password === confirmPassword){
                addUser()
        }
    }
  return (
   <form onSubmit={handleFormSubmit}>
     <Stack spacing="2rem">
         <FormControl isRequired><Input type="email" value={email} required onChange={(e)=>setUserDetails({...userDetail,email:e.target.value})} placeholder='Enter your email'/></FormControl>
         <FormControl isRequired><Input type="password" onChange={(e)=>setUserDetails({...userDetail,password:e.target.value})} required value={password} placeholder='Enter your password' /></FormControl>
         <FormControl isRequired><Input type="password" onChange={(e)=>setUserDetails({...userDetail,confirmPassword:e.target.value})} required value={confirmPassword} placeholder='Enter confirm password' /></FormControl>
       <Button _hover={{background:"yellow",color:"black"}} bg="yellow" color="black" type='submit'>Sign Up</Button>
     </Stack>

   </form>
  );
}

export default SignUp;
