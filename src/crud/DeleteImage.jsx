import { Button } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";

const DeleteImage = ({ name }) => {
  const supabase = useSupabaseClient();
  async function DeleteFile() {
    const { data } = await supabase.storage
      .from("PictureGallery")
      .remove(["public/" + `${name}`]);
    if (data) {
      console.log(data);
    }
  }
  return (
    <div>
      <Button variant='contained' onClick={DeleteFile}>Delete</Button>
    </div>
  );
};

export default DeleteImage;
