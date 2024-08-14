import { Box } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function PageTwo() {
  // glitch effect
  const glitchAnimation = `
    @keyframes glitch {
      0% { opacity: 1; }
      20% { opacity: 0; }
      40% { opacity: 1; }
      60% { opacity: 0; }
      80% { opacity: 1; }
      100% { opacity: 1; }
    }
  `;
  const handleMouseEnter = (e) => {
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = glitchAnimation;
    document.head.appendChild(styleElement);

    e.target.style.animation = "glitch 0.1s infinite";
  };
  const handleMouseLeave = (e) => {
    e.target.style.animation = "none";
  };

  return (
    <Box sx={{ position: "relative", height: "600px", width: "auto" }}>
      {/* background image */}
      <img
        src="src/assets/pics/calendar/page02.png"
        alt="page two bg"
        style={{
          height: "600px",
          width: "auto",
          display: "block",
        }}
      />
      {/* 31 */}
      <img
        src="src/assets/pics/calendar/31.png"
        alt="31"
        style={{
          position: "absolute",
          top: "170px",
          left: "15px",
          height: "150px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 30 */}
      <img
        src="src/assets/pics/calendar/30.png"
        alt="30"
        style={{
          position: "absolute",
          top: "170px",
          left: "80px",
          height: "80px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 29 */}
      <img
        src="src/assets/pics/calendar/29.png"
        alt="29"
        style={{
          position: "absolute",
          top: "170px",
          left: "220px",
          height: "70px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 28 */}
      <img
        src="src/assets/pics/calendar/28.png"
        alt="28"
        style={{
          position: "absolute",
          top: "167px",
          left: "300px",
          height: "90px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 27 */}
      <img
        src="src/assets/pics/calendar/28.png"
        alt="27"
        style={{
          position: "absolute",
          top: "245px",
          left: "80px",
          height: "90px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 26 */}
      <img
        src="src/assets/pics/calendar/26.png"
        alt="26"
        style={{
          position: "absolute",
          top: "258px",
          left: "180px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 25 */}
      <img
        src="src/assets/pics/calendar/25.png"
        alt="25"
        style={{
          position: "absolute",
          top: "238px",
          left: "270px",
          height: "95px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 24 */}
      <img
        src="src/assets/pics/calendar/24.png"
        alt="24"
        style={{
          position: "absolute",
          top: "320px",
          left: "15px",
          height: "95px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 23 */}
      <img
        src="src/assets/pics/calendar/23.png"
        alt="23"
        style={{
          position: "absolute",
          top: "390px",
          left: "10px",
          height: "95px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 22 */}
      <img
        src="src/assets/pics/calendar/22.png"
        alt="22"
        style={{
          position: "absolute",
          top: "470px",
          left: "15px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 21 */}
      <img
        src="src/assets/pics/calendar/21.png"
        alt="21"
        style={{
          position: "absolute",
          top: "330px",
          left: "155px",
          height: "160px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 20 */}
      <img
        src="src/assets/pics/calendar/20.png"
        alt="20"
        style={{
          position: "absolute",
          top: "322px",
          left: "188px",
          height: "80px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 19 */}
      <img
        src="src/assets/pics/calendar/19.png"
        alt="19"
        style={{
          position: "absolute",
          top: "360px",
          left: "210px",
          height: "80px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 18 */}
      <img
        src="src/assets/pics/calendar/18.png"
        alt="18"
        style={{
          position: "absolute",
          top: "445px",
          left: "210px",
          height: "41.5px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 17 */}
      <img
        src="src/assets/pics/calendar/17.png"
        alt="17"
        style={{
          position: "absolute",
          top: "490px",
          left: "210px",
          height: "41.5px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Box>
  );
}
