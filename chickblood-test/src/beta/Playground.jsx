import { Box, Grid, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import HideableDrawer from "../utils/HideableDrawer";

export default function Playground() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Box position={"absolute"} sx={{ marginLeft: "1%", marginTop: "1%" }}>
            <HideableDrawer />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height={"10vh"}
            width={"100%"}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Playground - Beta
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: "14px" }}>
              Testing on Embedding Youtube Videos Fully Responsive
            </Typography>
          </Box>
          {/* bootstrap embed ratio is not used */}
          {/* <div class="ratio ratio-16x9"> */}

          <Box height={"45vh"} p={1}>
            <iframe
              src="https://www.youtube.com/embed/g6-Wf79K_zE?si=e2LG_Z2EHC5b20iR"
              title="YouTube video"
              allowFullScreen
              height="100%"
              width="100%"
            ></iframe>
          </Box>
          {/* </div> */}
        </Grid>
        <Grid item xs={6}>
          video 2
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
