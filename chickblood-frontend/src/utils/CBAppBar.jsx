import { Box, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import useWindowSize from "../hooks/useWindowSize";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CBAppBar() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
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
                {/* CB Logo, also home button */}
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    height="100%"
                    width="100%"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/CBLogoText.png"
                      alt="App Divider"
                      width={"100%"}
                      minWidth="200px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* Event Nav */}
                <Grid item xs={2}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/eventhome");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/event_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* Contact Nav */}
                <Grid item xs={2}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/contact_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* Member Nav */}
                <Grid item xs={2}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/member");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/member_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* Blog Nav */}
                <Grid item xs={2}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/blog_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
              </Grid>
            </Toolbar>
          ) : (
            // NARROW toolbar
            <Toolbar disableGutters sx={{ width: "100%" }}>
              <Grid container>
                {/* home */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/home_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* event nav */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/eventhome");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/event_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* contact */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/contact_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* member */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/member");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/member_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
                </Grid>
                {/* blog */}
                <Grid item xs={2.4}>
                  <motion.div
                    height={"100%"}
                    width={"100%"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileHover={{ scale: 1.4 }}
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    <img
                      src="pics/WEB_image/AppBar/blog_nav.png"
                      alt="App Divider"
                      height="90px"
                    ></img>
                  </motion.div>
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
