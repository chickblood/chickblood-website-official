import { Box, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import useWindowSize from "../hooks/useWindowSize";
import useImagePreload from "../hooks/useImagePreload";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const imageUrls = [
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/4f5711f3-e2be-4903-b1b2-625161edf100/public", //cb nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/6e53a9df-673d-4ebf-04c0-a68ac88d7700/public", //home nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/52db8508-9328-417c-5626-c67197787400/public", //contact nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/46e972c8-2262-4c86-b7c5-bcc813e47600/public", //blog nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/fddd5356-25c7-4dac-b307-bcdff5b95e00/public", //member nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/0931e13a-9b82-4cb0-3d8f-452adc602e00/public", //event nav
  "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/a7ce920d-061c-4c46-2d1a-647cf1674600/public", //divider
];

const navItems = [
  { path: "/eventhome", src: imageUrls[5], alt: "Event" },
  { path: "/contact", src: imageUrls[2], alt: "Contact" },
  { path: "/member", src: imageUrls[4], alt: "Member" },
  { path: "/blog", src: imageUrls[3], alt: "Blog" },
];

function NavItem({ path, src, alt, imgHeight, navigate }) {
  return (
    <motion.div
      style={{ display: "flex", justifyContent: "center" }}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1.3 }}
      onClick={() => navigate(path)}
    >
      <img src={src} alt={alt} height={imgHeight} style={{ marginTop: 10 }} />
    </motion.div>
  );
}

function CBAppBar() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const openLoader = useImagePreload(imageUrls);
  const isWide = width > 1000;
  const imgHeight = width < 800 ? 0.1 * width : 90;

  return (
    <Box sx={{ minHeight: "100px", zIndex: 1000 }}>
      <AppBar position="static" elevation={0}>
        <Container
          sx={{
            minHeight: "50px",
            minWidth: "100%",
            bgcolor: "#F9E57A",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Toolbar disableGutters sx={{ width: "100%" }}>
            <Grid container>
              {/* Home / CB Logo */}
              <Grid
                item
                xs={isWide ? 4 : 2.4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isWide ? (
                  <motion.div
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.1 }}
                    onClick={() => navigate("/home")}
                  >
                    <img
                      src={imageUrls[0]}
                      alt="CB Logo"
                      width="100%"
                      style={{ minWidth: "200px" }}
                    />
                  </motion.div>
                ) : (
                  <NavItem
                    path="/home"
                    src={imageUrls[1]}
                    alt="Home"
                    imgHeight={imgHeight}
                    navigate={navigate}
                  />
                )}
              </Grid>
              {/* Nav items */}
              {navItems.map((item) => (
                <Grid item xs={isWide ? 2 : 2.4} key={item.path}>
                  <NavItem
                    {...item}
                    imgHeight={imgHeight}
                    navigate={navigate}
                  />
                </Grid>
              ))}
            </Grid>
          </Toolbar>
        </Container>
        <Box sx={{ bgcolor: "#F9E57A" }}>
          <img
            src={imageUrls[6]}
            alt="App Divider"
            height="30px"
            width="100%"
          />
        </Box>
      </AppBar>
      <LoadingPage openLoader={openLoader} handleClose={() => {}} />
    </Box>
  );
}
export default CBAppBar;
