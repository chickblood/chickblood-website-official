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

const ListItemTextStyle = {
  "& .MuiListItemText-primary": {
    fontFamily: "PT Mono",
    fontSize: 15,
  },
};

export default function HideableDrawer() {
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
          <ListItemButton>
            <ListItemText primary={t("story")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Events */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("events")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Mercahndise */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("merchandise")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Archive */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("archive")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Gallery */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("gallery")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Blog */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("blog")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Contact */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("contact")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Member */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={t("member")} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Divider. End of Router components. */}
      </List>
      <Divider />
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
