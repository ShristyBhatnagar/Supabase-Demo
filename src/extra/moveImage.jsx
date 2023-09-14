import { Button } from '@mui/material'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

const MoveImage = ({name}) => {
    const supabase=useSupabaseClient()

   async function moveFile(){
    const { data } = await supabase
    .storage
    .from('PictureGallery')
    .move('public/'+`${name}`, 'private/'+`${name}`)
    if(data){
        console.log("moved",data)
    }
   } 

  return (
    <div><Button variant='contained' onClick={moveFile}>Move Image</Button></div>
  )
}

export default MoveImage