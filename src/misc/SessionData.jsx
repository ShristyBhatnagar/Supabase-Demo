import { Button } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

const SessionData = () => {
  const supabase = useSupabaseClient();
  const [token, setToken] = useState(null); // Initialize token with null
  const [refresh, setRefresh] = useState(null); // Initialize refresh with null

  const getDetails = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      setToken(data.session.access_token); // Update token state
      setRefresh(data.session.refresh_token); // Update refresh state
    }
  };

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'USER_UPDATED') console.log('USER_UPDATED', session)
  })
  const setSession = async () => {
    await getDetails();
    const { data, error } = await supabase.auth.setSession({
      access_token: token,
      refresh_token: refresh
    });
    console.log(data.session);
  };

  return (
    <div>
      <Button onClick={setSession}>Session</Button>
    </div>
  );
};

export default SessionData;
