import React from "react";
import HideableDrawer from "../../utils/HideableDrawer";
import { Box } from "@mui/material";

export default function Blog() {
  return (
    <div>
      <Box position="absolute" sx={{ marginLeft: "1%", marginTop: "1%" }}>
        <HideableDrawer />
      </Box>
    </div>
  );
}
