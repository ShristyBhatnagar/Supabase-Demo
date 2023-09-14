import "./App.css";
import { Container, Box } from "@mui/material";
import { useUser } from "@supabase/auth-helpers-react";

import MagicLink from "./MagicLink";
import SignOut from "./signOut";
import Upload from "./upload";

function App() {
  const user = useUser();

  return (
    <Container fixed>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {user === null ? (
          <>
            <h1>Welcome to Image Wall</h1>
            <MagicLink />
          </>
        ) : (
          <>
            <h1>
              You Image wall {user.email} <SignOut />
            </h1>
            <Upload />
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
