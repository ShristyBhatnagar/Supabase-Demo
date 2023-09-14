import { Button } from '@mui/material'
import React from 'react'

const Challenge = () => {
    const getfactor=async()=>{
        
const { data, error } = await supabase.auth.mfa.challenge({
    factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225'
  })
  console.log(data)
    }
  return (
    <div><Button onClick={getfactor} ></Button></div>
  )
}

export default Challenge