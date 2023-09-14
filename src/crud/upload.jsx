import { Box, Button, Input, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Download from "../extra/download";
import ListOfFiles from "../misc/listOfFiles";
import UpdateImage from "./updateImage";
import MoveImage from "../extra/moveImage";
import CopyImage from "../extra/copyImage";
import DeleteImage from "./DeleteImage";
import CreateSignedUrl from "../misc/CreateSignedUrl";
import UploadUrl from "../misc/UploadUrl";
import SessionData from "../misc/SessionData";
import MFA from "../extra/MFA";
export const imgURL =
  "https://moslwflbkqbkathfqglp.supabase.co/storage/v1/object/public/PictureGallery/public";
const Upload = () => {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const supabase = useSupabaseClient();

  const uploadImage = async () => {
    const filename = `${files.name}`;
    const { data, error } = await supabase.storage
      .from("PictureGallery")
      .upload(`public/${filename}`, files, {
        cacheControl: "3600",
        upsert: false,
      });
    console.log(error);

    if (data) {
      console.log(data);
    }
  };

  const Imagess = (e) => {
    let file = e.target.files[0];
    setFiles(file);
  };

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("PictureGallery")
      .list("public", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    if (data) {
      setImages(data);
    } else {
      console.log(error);
    }
  }
  useEffect(() => {
    getImages();
  }, [uploadImage]);
  async function emptyBucket() {
    const { data } = await supabase.storage.emptyBucket("PictureGallery");

    console.log(data);
  }

  return (
    <Box>
      <h3>Upload your favourite Images here</h3>
      <Input
        type="file"
        accept="image/png , image/jpeg"
        onChange={(e) => Imagess(e)}
      >
        Add your file
      </Input>
      <Button variant="contained" onClick={uploadImage}>
        upload
      </Button>
      <Button variant="contained" onClick={emptyBucket}>
        Empty
      </Button>
        <ListOfFiles />
        <Table>
          <TableHead>Image</TableHead>
          
      {images.map((image, i) => (
      
          <div style={{ display: "flex", flexDirection: "row" }} key={i}>
            <br />
            <TableCell>
              <img
                height="50px"
                width={50}
                src={imgURL + "/" + image.name}
                alt={image.name}
                name={image.name}
              />
            </TableCell>
            <TableCell>
              <Download name={image.name} />
            </TableCell>
            <TableCell>
              <MoveImage name={image.name} />
            </TableCell>
            <TableCell>
              <CopyImage name={image.name} />
            </TableCell>
            <TableCell>
            <DeleteImage name={image.name} />
            </TableCell>
            <TableCell>
            <UpdateImage name={image.name} files={files} />
            </TableCell>
            <TableCell>
            <CreateSignedUrl name={image.name} />
            </TableCell>
            <TableCell>
            <UploadUrl name={image.name} />
            </TableCell>
            <TableCell>
              <SessionData/>
              <MFA/>
            </TableCell>
          </div>
      
      ))}
  </Table>
    
    </Box>
  );
};

export default Upload;
