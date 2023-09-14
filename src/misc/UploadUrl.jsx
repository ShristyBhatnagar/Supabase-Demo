import { Button } from '@mui/material'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

const UploadUrl = ({name}) => {
    const supabase =useSupabaseClient()
    const Generate=async()=>{

        const { data, error } = await supabase
        .storage
        .from('PictureGallery')
        .createSignedUploadUrl('public/')
        console.log(data,"upload URl")
    }
  return (
    <div><Button variant='contained' onClick={Generate}>GenerateUrl</Button></div>
  )
}

export default UploadUrl