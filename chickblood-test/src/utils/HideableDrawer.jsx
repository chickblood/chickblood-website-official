import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const ListItemTextStyle = {
  "& .MuiListItemText-primary": {
    fontFamily: "PT Mono",
    fontSize: 15,
  },
};

export default function HideableDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List disablePadding>
        {/* disablePadding is on at ListItem. Buttons are full bar width with padding */}
        {/* Story  */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Story"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Events */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Events"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Mercahndise */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Mercahndise"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Archive */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Archive"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Gallery */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Gallery"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Blog */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Blog"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Contact */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Contact"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
        {/* Member */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary={"Member"} sx={ListItemTextStyle} />
          </ListItemButton>
        </ListItem>
      </List>
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
