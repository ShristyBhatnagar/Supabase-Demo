import { CloudCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";
const Download = ({ name }) => {
  const supabase = useSupabaseClient();
  async function downloadImage() {
    try {
      const { data, error } = await supabase.storage
        .from("PictureGallery")
        .download("public/" + `${name}`);

      if (error) {
        console.error("Error downloading image:", error.message);
        return;
      }

      // Create a Blob from the downloaded data
      const blob = new Blob([data], { type: "image/png" });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element for downloading the image
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "downloaded-image.png"; // Specify the filename
      anchor.click();

      // Release the URL object
      window.URL.revokeObjectURL(url);

      console.log("Image downloaded successfully");
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }

  return (
    <div>
      <Button>
        <CloudCircleOutlined onClick={downloadImage} />
      </Button>
    </div>
  );
};

export default Download;
