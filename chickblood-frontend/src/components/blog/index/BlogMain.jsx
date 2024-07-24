import { Box } from "@mui/material";
import React from "react";
import CBAppBar from "../../../utils/CBAppBar";

export default function BlogMain() {
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/65b99df8-9b51-44c1-492a-4a8f91e12f00/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "300px auto",
      }}
    >
      <CBAppBar></CBAppBar>
    </Box>
  );
}
