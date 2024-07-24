import { Box } from "@mui/material";
import React from "react";
import CBAppBar from "../utils/CBAppBar";

function HomePage() {
  return (
    <Box height="100vh" position="relative" style={{ overflow: "hidden" }}>
      <CBAppBar></CBAppBar>
    </Box>
  );
}

export default HomePage;
