import { Button } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React from "react";

const ListOfFiles = () => {
  const supabase = useSupabaseClient();
  const getList = async () => {
    const { data, error } = await supabase.storage
      .from("PictureGallery")
      .list("public", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });
    console.log(data);
  };

  return (
    <div>
      <Button variant="contained" onClick={getList}>GetList</Button>
      <div></div>
    </div>
  );
};

export default ListOfFiles;
