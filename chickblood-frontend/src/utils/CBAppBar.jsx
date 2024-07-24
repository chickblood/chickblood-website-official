import { Box, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import useWindowSize from "../hooks/useWindowSize";

function CBAppBar() {
  const { width } = useWindowSize();
  return (
    <Box sx={{ minHeight: "100px" }}>
      <AppBar position="static" elevation={0}>
        <Container
          sx={{
            minHeight: "100px",
            minWidth: "100%",
            bgcolor: "#F9E57A",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* WIDE toolbar containing all items */}
          {width > 1000 ? (
            <Toolbar disableGutters sx={{ width: "100%" }}>
              <Grid container>
                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/CBLogoText.png"
                    alt="App Divider"
                    // height="90px"
                    width={"100%"}
                    minWidth="200px"
                  ></img>
                </Grid>
                {/* Event Nav */}
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/event_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
                {/* Contact Nav */}
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/contact_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
                {/* Member Nav */}
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/member_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
                {/* Blog Nav */}
                <Grid
                  item
                  xs={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/blog_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
              </Grid>
            </Toolbar>
          ) : (
            // NARROW toolbar
            <Toolbar disableGutters sx={{ width: "100%" }}>
              <Grid container>
                {/* event nav */}
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/event_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
                {/* contact */}
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/contact_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
                {/* member */}
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/member_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
                {/* blog */}
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="pics/WEB_image/AppBar/blog_nav.png"
                    alt="App Divider"
                    height="90px"
                  ></img>
                </Grid>
              </Grid>
            </Toolbar>
          )}
        </Container>
        <Box sx={{ bgcolor: "#F9E57A" }}>
          <img
            src="pics/WEB_image/AppBar/AppBarDivider.png"
            alt="App Divider"
            height="30px"
            width="100%"
          ></img>
        </Box>
      </AppBar>
    </Box>
  );
}
export default CBAppBar;
