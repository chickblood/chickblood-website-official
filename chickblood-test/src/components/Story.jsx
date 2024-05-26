import { Box } from "@mui/material";
import React from "react";
import HideableDrawer from "../utils/HideableDrawer";

function Story() {
  return (
    <Box height={"100vh"}>
      <Box position={"absolute"} sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
    </Box>
  );
}

export default Story;
