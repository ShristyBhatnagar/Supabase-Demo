import { Button, Input } from "@mui/material";
import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const UpdateImage = ({ name, files}) => {
  const supabase = useSupabaseClient();
 


  async function getUpdate() {
    try {
      const { data, error } = await supabase.storage
        .from("PictureGallery")
        .update("public/" + name, files, {
          upsert: true,
        });
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Button  variant='contained'onClick={getUpdate}>Update</Button>
    </>
  );
};

export default UpdateImage;
