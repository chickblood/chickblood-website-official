import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";

export default function Issue1() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* This grid should be unscrollable */}
      <Grid
        container
        sx={{
          position: "absolute",
        }}
      >
        {/* This grid should be scrollabble upon overflow */}
        <Grid item xs={9} sx={{ overflow: "hidden" }}>
          <Box>
            <IndexDrawer />
          </Box>
        </Grid>
        {/* This grid should be unscrollable */}
        <Grid item xs={3} sx={{ overflow: "hidden" }}>
          <Box>
            <iframe
              style={{ borderRadius: "12px", padding: 4 }}
              src="https://open.spotify.com/embed/playlist/1nHHxMzRJVaD6Cru1okKxd?utm_source=generator"
              width="100%"
              height="360px"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="SPF 1"
            ></iframe>
          </Box>
          <Box>linkslinks</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Drawer List that controls items inside the blog */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Index 1"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Index 2"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Index 3"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Index 4"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Index 5"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </CustomDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: "auto",
          //   height: "calc(100vh - 100px)",
        }}
      >
        header
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, unde
          error quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aliquid, unde error quisquam beatae eius consequuntur ratione
          consequatur, corrupti perspiciatis quam veritatis necessitatibus qui
          fuga ad quas, nemo odit eaque dolorem.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, unde error quisquam beatae eius
          consequuntur ratione consequatur, corrupti perspiciatis quam veritatis
          necessitatibus qui fuga ad quas, nemo odit eaque dolorem.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, unde error
          quisquam beatae eius consequuntur ratione consequatur, corrupti
          perspiciatis quam veritatis necessitatibus qui fuga ad quas, nemo odit
          eaque dolorem.
        </Typography>
      </Box>
    </Box>
  );
}
