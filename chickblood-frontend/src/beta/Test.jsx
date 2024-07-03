import { Box } from "@mui/material";
import React, { useState } from "react";

export default function Test() {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <Box>
      {loading && <div>Loading...</div>}
      {error && <div>Error loading iframe.</div>}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
        p={8}
      >
        <iframe
          title="example"
          src="https://open.spotify.com/embed/playlist/1nHHxMzRJVaD6Cru1okKxd?utm_source=generator"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            display: loading || error ? "none" : "block",
            width: "100%",
            height: "500px",
          }}
        />
      </Box>
    </Box>
  );
}
