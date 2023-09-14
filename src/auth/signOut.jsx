import { Button } from "@mui/material";
import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const SignOut = () => {
  const supabase = useSupabaseClient();
  async function signOutUser() {
    await supabase.auth.signOut();
  }
  return (
    <div>
      <Button variant="contained" onClick={signOutUser}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
