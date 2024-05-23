import React from "react";
import Drawer from "../utils/HideableDrawer";
import { Box } from "@mui/material";

function Story() {
  return (
    <React.Fragment>
      <Box position={"absolute"} sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <Drawer />
      </Box>
    </React.Fragment>
  );
}

export default Story;
