import React, { useState } from 'react';
import { Box ,Button, Heading} from '@chakra-ui/react';
import SignUp from './SignUp';
import Login from './Login';

const LoginSignUp = () => {
    const [signUp,setSignUp] = useState(true)
    const handleSignUp = ()=>{
         setSignUp(false)
    }
  return (
     <Box w="30%" m="auto" textAlign="center">
        <Heading>{signUp?"SignUp Form":"Login Form"}</Heading>
        <Button mt="1rem" onClick={()=>setSignUp(true)} colorScheme={signUp?"messenger":"gray"}>Sign Up</Button><Button onClick={()=>setSignUp(false)} colorScheme={!signUp?"messenger":"gray"}>Login</Button>
          <Box mt="1rem">{signUp?<SignUp handleSignUp={handleSignUp}/>:<Login/>}</Box>
     </Box>
  );
}

export default LoginSignUp;
