import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useState } from "react";



const MagicLink = () => {
    const [email,setEmail]=useState()
    const supabase= useSupabaseClient();
    async function magicLink(){
        const {data,error}= await supabase.auth.signInWithOtp({
            email:email
        })
        if(error){
        alert("error connecting with supabase")
    
        }else{
            alert("please check your email")
        }
    }
  console.log(email)
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" onChange={(e)=>setEmail(e.target.value)} />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
      <Button variant="contained" onClick={()=>magicLink()}>Send Magic Link</Button>
    </FormControl>
  );
};

export default MagicLink;
