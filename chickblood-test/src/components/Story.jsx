import { Box } from "@mui/material";
import React from "react";
import HideableDrawer from "../utils/HideableDrawer";

function Story() {
  return (
    <React.Fragment>
      <Box position={"absolute"} sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
    </React.Fragment>
  );
}

export default Story;
