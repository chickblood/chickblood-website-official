import { Box } from "@mui/material";
import React from "react";
import CBAppBar from "../../utils/CBAppBar";

export default function EventHome() {
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
      }}
    >
      {/* app bar */}
      <CBAppBar />
    </Box>
  );
}
