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
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import CustomCursor from "../../../utils/CustomCursor";
import useColorPalette from "../../../hooks/useColorPalette";

export default function Issue1() {
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
            <Box>linkslinks</Box>
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
          bgcolor: "divider",
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const colorPalette = useColorPalette();
  return (
    <Box sx={{ display: "flex", cursor: "none" }}>
      <CustomDrawer variant="permanent" open={open}>
        <CustomCursor></CustomCursor>
        <DrawerHeader>
          <Box>
            {open ? (
              <Box mt={-3}>
                <img
                  src="/pics/icons/blog_icon.png"
                  alt="blog icon"
                  style={{ width: "240px", height: "240px" }}
                ></img>
                <Box p={1} mt={-4} style={{ zIndex: -1 }}>
                  <Button
                    onClick={handleDrawerToggle}
                    variant="contained"
                    style={{
                      width: "100%",
                      cursor: "none",
                      backgroundColor: colorPalette.pear,
                      color: colorPalette.black,
                    }}
                  >
                    {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                  </Button>
                </Box>
              </Box>
            ) : (
              <Button onClick={handleDrawerToggle}>
                {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </Button>
            )}
          </Box>
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
        }}
      >
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
