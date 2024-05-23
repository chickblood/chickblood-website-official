import * as React from "react";
// MUI imports
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useTranslation } from "react-i18next";
import LanguageBTN from "./LanguageBTN";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * ListItemText Styles. Defines the FontSize/Family and Motion of List Item Texts.
 * **/
const ListItemTextStyle = {
  "& .MuiListItemText-primary": {
    fontFamily: "PT Mono", //used to be monospace
    fontSize: 15,
  },
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
 * **/
const MotionListItemButton = motion(ListItemButton);
const AnimatedListItemButton = ({ primary, sx, ...props }) => (
  <MotionListItemButton
    primary={primary}
    sx={sx}
    whileHover={{ scale: 1.2 }}
    style={{ originX: 0 }}
    {...props}
  />
);

/**
 * Main Component.
 **/
export default function HideableDrawer() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      role="presentation"
      // onClick={toggleDrawer(false)}
    >
      <List disablePadding>
        {/* disablePadding is on at ListItem. Buttons are full bar width with padding */}
        {/* Story  */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText primary={t("story")} sx={ListItemTextStyle} />
          </AnimatedListItemButton>
        </ListItem>
        {/* Events */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("events")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        {/* Mercahndise */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("merchandise")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        {/* Archive */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("archive")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        {/* Gallery */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("gallery")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        {/* Blog */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText primary={t("blog")} sx={ListItemTextStyle} />
          </AnimatedListItemButton>
        </ListItem>
        {/* Contact */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("contact")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
        {/* Member */}
        <ListItem disablePadding>
          <AnimatedListItemButton>
            <AnimatedListItemText
              primary={t("member")}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
      </List>
      {/* Divider. End of Router components. */}
      <Divider sx={{ mt: 1 }} />
      <List>
        <ListItem disablePadding>
          <AnimatedListItemButton
            onClick={() => {
              navigate("/playground");
            }}
          >
            <AnimatedListItemText
              primary={"Playground - Beta"}
              sx={ListItemTextStyle}
            />
          </AnimatedListItemButton>
        </ListItem>
      </List>
      <Box style={{ flexGrow: 1 }} />
      <Box
        p={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <LanguageBTN />
      </Box>
    </Box>
  );

  return (
    <React.Fragment>
      <Box>
        <Button onClick={toggleDrawer(true)} color="inherit">
          <MenuOpenIcon />
        </Button>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </React.Fragment>
  );
}
