import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import CBAppBar from "../utils/CBAppBar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  return (
    // Base div with background image. on repeat, full cover.
    <Box
      height="100vh"
      style={{
        backgroundImage: `url(https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/616c50e0-6502-4279-27e5-4b9c4b379000/public)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center 0px",
        backgroundSize: "contain",
      }}
    >
      {/* Top App Bar */}
      <CBAppBar />
      {/* Box for three img components */}
      <Box
        position={"relative"}
        sx={{
          height: "calc(100% - 130px)",
          width: "100%",
        }}
      >
        {/* Rita with the poster */}
        <Box
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            style={{
              display: "inline-block",
              transformOrigin: "bottom center",
            }}
            onClick={() => {
              navigate("/event");
            }}
          >
            <img
              src="pics/WEB_image/homepage/rita.png"
              alt="rita"
              style={{
                height: "100%",
                width: "auto",
              }}
            />
          </motion.div>
        </Box>
        {/* Plant */}
        {width > 1000 && (
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { ease: "easeOut", duration: 0.2 },
            }}
            style={{
              position: "absolute",
              height: "40%",
              width: "auto",
              marginLeft: "85%",
              marginTop: "25%",
            }}
          >
            <img
              src="pics/WEB_image/homepage/plant.png"
              alt="plant"
              style={{
                height: "100%",
                width: "auto",
              }}
            />
          </motion.div>
        )}
        {/* Language Icon */}
      </Box>
    </Box>
  );
}

export default HomePage;
