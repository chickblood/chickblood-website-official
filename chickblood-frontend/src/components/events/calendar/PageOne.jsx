import { Box } from "@mui/material";
import React from "react";

export default function PageOne() {
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
        src="src/assets/pics/calendar/page01.png"
        alt="page one bg"
        style={{
          height: "600px",
          width: "auto",
          display: "block",
        }}
      />
      {/* 16 */}
      <img
        src="src/assets/pics/calendar/16.png"
        alt="16"
        style={{
          position: "absolute",
          top: "170px",
          left: "15px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 15 */}
      <img
        src="src/assets/pics/calendar/15.png"
        alt="15"
        style={{
          position: "absolute",
          top: "170px",
          left: "145px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 14 */}
      <img
        src="src/assets/pics/calendar/14.png"
        alt="14"
        style={{
          position: "absolute",
          top: "170px",
          left: "265px",
          height: "60px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 13 */}
      <img
        src="src/assets/pics/calendar/13.png"
        alt="13"
        style={{
          position: "absolute",
          top: "170px",
          left: "340px",
          height: "155px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 12 */}
      <img
        src="src/assets/pics/calendar/12.png"
        alt="12"
        style={{
          position: "absolute",
          top: "240px",
          left: "30px",
          height: "70px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 11 */}
      <img
        src="src/assets/pics/calendar/11.png"
        alt="11"
        style={{
          position: "absolute",
          top: "230px",
          left: "120px",
          height: "85px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 10 */}
      <img
        src="src/assets/pics/calendar/10.png"
        alt="10"
        style={{
          position: "absolute",
          top: "241px",
          left: "250px",
          height: "70px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 9 */}
      <img
        src="src/assets/pics/calendar/9.png"
        alt="9"
        style={{
          position: "absolute",
          top: "310px",
          left: "20px",
          height: "40px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 8 */}
      <img
        src="src/assets/pics/calendar/8.png"
        alt="8"
        style={{
          position: "absolute",
          top: "355px",
          left: "20px",
          height: "40px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 7 */}
      <img
        src="src/assets/pics/calendar/7.png"
        alt="7"
        style={{
          position: "absolute",
          top: "400px",
          left: "20px",
          height: "40px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {/* 6 */}
      <img
        src="src/assets/pics/calendar/6.png"
        alt="6"
        style={{
          position: "absolute",
          top: "305px",
          left: "190px",
          height: "160px",
          width: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Box>
  );
}
