import { Box, Grid, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Marquee from "react-fast-marquee";
import HideableDrawer from "../utils/HideableDrawer";

export default function Playground() {
  return (
    <Box height={"100vh"}>
      {/* <CustomCursor></CustomCursor> */}
      <Grid container>
        <Grid item xs={12}>
          <Box position={"absolute"} sx={{ marginLeft: "1%", marginTop: "1%" }}>
            <HideableDrawer />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            height={"10vh"}
            width={"100%"}
          >
            <Box ml={10}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <Ticker></Ticker>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          {/* -------------------- Embedding Youtube Video -------------------- */}
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Youtube Embed</Typography>
          </Box>
          {/* bootstrap embed ratio is not used */}
          {/* <div class="ratio ratio-16x9"> */}
          <Box height={"40vh"} p={1}>
            <iframe
              src="https://www.youtube.com/embed/g6-Wf79K_zE?si=e2LG_Z2EHC5b20iR"
              title="YouTube video"
              allowFullScreen
              height="100%"
              width="100%"
              style={{ "border-radius": "12px" }}
            ></iframe>
          </Box>
          {/* Second Embed */}
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Youtube Embed</Typography>
          </Box>
          {/* bootstrap embed ratio is not used */}
          {/* <div class="ratio ratio-16x9"> */}
          <Box height={"40vh"} p={1}>
            <iframe
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/videoseries?si=I4gF-6JmkHPgMeDZ&amp;list=PLNgJGFt78ojOMvd-QVQm3OmMWSFxPGgn2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ "border-radius": "12px" }}
            ></iframe>
          </Box>
          {/* </div> */}
          {/* -------------------- End of Embedding Youtube Video -------------------- */}
        </Grid>
        {/* Ticker Test */}
        <Grid item xs={2}>
          <Box>
            <Marquee>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, maxime veritatis nam nisi nesciunt eius at harum
                repellat cum iure iste quis possimus autem, consequuntur dolore
                explicabo assumenda. Ipsa, repudiandae?
              </Typography>
            </Marquee>
          </Box>
        </Grid>
        <Grid item xs={4}>
          {/* -------------------- Embedding Spotify Component -------------------- */}
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              Soundcloud & Spotify Embed
            </Typography>
          </Box>
          {/* bootstrap embed ratio is not used */}
          {/* <div class="ratio ratio-16x9"> */}
          <Box
            p={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "40vh",
              width: "100%",
            }}
          >
            <iframe
              title="soundcloud"
              style={{ "border-radius": "12px" }}
              width="100%"
              height="100%"
              frameborder="no"
              allow=""
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1080371245&color=%23363636&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </Box>
          {/* -------------------- End of Spotify Embed -------------------- */}
          {/* -------------------- Soundcloud Embed -------------------- */}
          <Box
            p={0.5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "180px",
              width: "100%",
            }}
          >
            <SpotifyEmbed1></SpotifyEmbed1>
          </Box>
          <Box
            p={0.5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "180px",
              width: "100%",
            }}
          >
            <SpotifyEmbed2></SpotifyEmbed2>
          </Box>
          {/* </div> */}
          {/* -------------------- End of Spotify Embed -------------------- */}
        </Grid>
      </Grid>
    </Box>
  );
}

/**
 * Spotify Embed is self-responsive and is based on pixels. Works fine on laptop but 45vh triggers smaller window on ipad
 *  **/
const SpotifyEmbed1 = () => {
  const embedCode = `<iframe style="border-radius:12px" 
  src="https://open.spotify.com/embed/playlist/1nHHxMzRJVaD6Cru1okKxd?utm_source=generator" 
  width="100%" height="100%" frameBorder="0" allow="autoplay; 
  clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy"></iframe>`;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    ></Box>
  );
};

const SpotifyEmbed2 = () => {
  const embedCode = `<iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/playlist/3TYCQYrMRi9q6jCh23MogZ?utm_source=generator"
  width="100%"
  height="100%"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>;`;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        marginTop: -5,
      }}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    ></Box>
  );
};

const Ticker = () => {
  return (
    <Marquee>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
      maxime veritatis nam nisi nesciunt eius at harum repellat cum iure iste
      quis possimus autem, consequuntur dolore explicabo assumenda. Ipsa,
      repudiandae?
    </Marquee>
  );
};
