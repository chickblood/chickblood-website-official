import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import useColorPalette from "../../../hooks/useColorPalette";
import useFontFamily from "../../../hooks/useFontFamily";
import CustomCursor from "../../../utils/CustomCursor";
import LanguageBTN from "../../../utils/LanguageBTN";
import { debounce } from "lodash";

export default function Issue1() {
  const useFont = useFontFamily();
  return (
    <Box>
      <Grid
        container
        sx={{
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Drawer & Content */}
        <Grid item xs={9} sx={{ overflow: "auto", height: "100vh" }}>
          <Box>
            <IndexDrawer />
          </Box>
        </Grid>

        {/* Spotify Embed & About Page */}
        <Grid item xs={3}>
          <Box sx={{ overflow: "visible", height: "100vh" }}>
            <Box p={2}>
              <iframe
                style={{ borderRadius: "12px", padding: 4 }}
                src="https://open.spotify.com/embed/playlist/1nHHxMzRJVaD6Cru1okKxd?utm_source=generator"
                width="100%"
                height="360px"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="SPF 1"
              ></iframe>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              p={2}
            >
              <Typography sx={{ fontFamily: useFont.bold, fontSize: 14 }}>
                hello i am a placeholder for 日本出的黑胶都会带的侧标那种格式
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* divider with absolute position */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          height: "100vh",
          position: "absolute",
          left: "75%",
          top: 0,
          bgcolor: "#000000",
        }}
      />
    </Box>
  );
}

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  ...theme.mixins.toolbar,
}));

const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidthOpen : drawerWidthClosed,
  "& .MuiDrawer-paper": {
    width: open ? drawerWidthOpen : drawerWidthClosed,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function IndexDrawer() {
  const [open, setOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const colorPalette = useColorPalette();
  const { t, i18n } = useTranslation();
  const useFont = useFontFamily();
  const [content, setContent] = useState(t("dummycontent"));
  /**
   * ListItemText Styles. Defines the FontSize/Family and Motion of List Item Texts.
   **/
  const ListItemTextStyle = {
    "& .MuiListItemText-primary": {
      fontSize: 13,
      fontFamily: useFont.bold,
    },
    textAlign: "center",
  };

  const MotionListItemText = motion(ListItemText);
  const AnimatedListItemText = ({ primary, sx, ...props }) => (
    <MotionListItemText
      primary={primary}
      sx={sx}
      whileHover={{ scale: 1 }}
      style={{ originX: 0 }}
      {...props}
    />
  );

  /**
   * ListItemButton Styles. Defines the Styling and motion of List Item Buttons.
   **/
  const MotionListItemButton = motion(ListItemButton);
  const AnimatedListItemButton = React.memo(({ primary, sx, ...props }) => (
    <MotionListItemButton
      primary={primary}
      sx={{ ...sx, borderRadius: 4 }}
      whileHover={{ scale: 1.1 }}
      {...props}
    />
  ));

  /*
   * Debounce functions for rapid changes in content
   */
  const setContentDebounced = useRef(
    debounce((contentKey) => {
      setContent(t(contentKey));
    }, 100)
  );

  useEffect(() => {
    setContentDebounced.current = debounce((contentKey) => {
      setContent(t(contentKey));
    }, 100);
  }, [t]);

  const updateContent = useCallback((contentKey) => {
    setContentDebounced.current(contentKey);
  }, []);

  return (
    <Box sx={{ display: "flex", cursor: "none" }}>
      <CustomDrawer variant="permanent" open={open}>
        <CustomCursor></CustomCursor>
        <Box overflow={"visible"}>
          <DrawerHeader>
            {open ? (
              <Box mt={-3}>
                <img
                  src="/pics/icons/blog_icon.png"
                  alt="blog icon"
                  style={{ width: "240px", height: "240px" }}
                ></img>
                <Box p={1} mt={-4}>
                  <Button
                    onClick={handleDrawerToggle}
                    variant="contained"
                    disableElevation
                    style={{
                      width: "100%",
                      cursor: "none",
                      backgroundColor: colorPalette.pear,
                      color: colorPalette.black,
                    }}
                  >
                    <Typography sx={{ fontFamily: useFont.bold, fontSize: 12 }}>
                      {t("hidebar")}
                    </Typography>
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box mr={0.5}>
                <Button
                  onClick={handleDrawerToggle}
                  variant="contained"
                  style={{
                    cursor: "none",
                    borderRadius: 10,
                    backgroundColor: colorPalette.pear,
                    color: colorPalette.black,
                  }}
                >
                  {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </Button>
              </Box>
            )}
          </DrawerHeader>
        </Box>
        <Divider sx={{ mt: 2, mb: 1 }} color={"#000000"} />
        {/* Drawer List that controls items inside the blog */}
        <Box mb={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 15, fontFamily: useFont.bold }}>
              {t("index")}
            </Typography>
          </Box>
          <List disablePadding>
            <ListItem disablePadding>
              <AnimatedListItemButton>
                <AnimatedListItemText
                  primary={open ? t("dummyheading") : "1"}
                  sx={ListItemTextStyle}
                  onClick={() => {
                    updateContent("dummycontent");
                  }}
                />
              </AnimatedListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AnimatedListItemButton>
                <AnimatedListItemText
                  primary={open ? t("dummyheading") : "2"}
                  sx={ListItemTextStyle}
                  onClick={() => {
                    updateContent("dummycontent_reverse");
                  }}
                />
              </AnimatedListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AnimatedListItemButton>
                <AnimatedListItemText
                  primary={open ? t("dummyheading") : "3"}
                  sx={ListItemTextStyle}
                  onClick={() => {
                    updateContent("dummycontent");
                  }}
                />
              </AnimatedListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AnimatedListItemButton>
                <AnimatedListItemText
                  primary={open ? t("dummyheading") : "4"}
                  sx={ListItemTextStyle}
                  onClick={() => {
                    updateContent("dummycontent_reverse");
                  }}
                />
              </AnimatedListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <AnimatedListItemButton>
                <AnimatedListItemText
                  primary={open ? t("dummyheading") : "5"}
                  sx={ListItemTextStyle}
                  onClick={() => {
                    updateContent("dummycontent");
                  }}
                />
              </AnimatedListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider color={"#000000"} />
        <Box sx={{ height: "100%", width: "100%" }}>
          {open && (
            <Box p={1}>
              <LanguageBTN />
            </Box>
          )}
        </Box>
      </CustomDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
        }}
      >
        <Typography
          paragraph
          key={i18n.language}
          sx={{ fontSize: 16, fontFamily: useFont.light }}
        >
          {content}
          <br></br>
          <br></br>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
