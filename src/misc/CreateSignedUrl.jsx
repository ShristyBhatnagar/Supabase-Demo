import { Button } from '@mui/material'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

const CreateSignedUrl = ({name}) => {
    const supabase = useSupabaseClient()
    async function shareLink(){
        
const { data } = await supabase
.storage
.from('PictureGallery')
.createSignedUrl('public/'+ `${name}`, 120)
if(data){
    console.log(data.signedUrl , "120")
}
    }
  return (
    <div><Button  variant='contained' onClick={shareLink}>Share</Button></div>
  )
}

export default CreateSignedUrl