import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CBAppBar from "../../utils/CBAppBar";
import CustomCursor from "../../utils/CustomCursor";
import useWindowSize from "../../hooks/useWindowSize";
import PageOne from "./calendar/PageOne";
import PageTwo from "./calendar/PageTwo";

export default function EventCalendar() {
  const { width } = useWindowSize();
  useEffect(() => {
    console.log(width / 2);
  }, [width]);
  return (
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/7d4373f1-32e4-49aa-3f58-21390b23e400/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
        position: "relative",
      }}
    >
      <CustomCursor></CustomCursor>

      <CBAppBar></CBAppBar>

      {/* Box containing two posters */}
      {width > 800 ? (
        <Box sx={{ height: "100%", width: "100", zIndex: -100 }}>
          <Grid container sx={{ height: "100%", width: "100%" }}>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "calc(100% - 130px)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PageOne></PageOne>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  height: "calc(100% - 130px)",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PageTwo></PageTwo>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <div></div>
      )}
    </Box>
  );
}
