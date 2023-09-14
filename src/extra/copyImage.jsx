import { Button } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";

const CopyImage = ({ name }) => {
  const supabase = useSupabaseClient();
  async function copyToFolder() {
    const { data, error } = await supabase.storage
      .from("PictureGallery")
      .copy("public/" + `${name}`, "private/" + `${name}`);
    if (data) {
      console.log("copied ", data);
    }
  }
  return (
    <div>
      <Button variant='contained' onClick={copyToFolder}>Copy </Button>
    </div>
  );
};

export default CopyImage;
