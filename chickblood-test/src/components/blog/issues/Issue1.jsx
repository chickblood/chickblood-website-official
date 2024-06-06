import React from "react";
import WaveWrapper from "../../../utils/WaveWrapper";
import { Box } from "@mui/material";
import BlogBackBTN from "../../../utils/BlogBackBTN";

export default function Issue1() {
  return (
    <div>
      <Box>
        <WaveWrapper></WaveWrapper>
        <Box sx={{ marginLeft: "1%", marginTop: "1%" }}>
          <BlogBackBTN></BlogBackBTN>
        </Box>
      </Box>
      <Box mt={"100px"}>hi</Box>
    </div>
  );
}
