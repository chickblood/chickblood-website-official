import React, { useEffect, useState } from "react";
import "../App.css";

export default function CustomCursor({ size = 192 }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true); // Show the cursor when the mouse moves
    };

    const handleMouseOver = (event) => {
      if (event.target.closest("a, button, [role='button'], .clickable")) {
        setIsHoveringClickable(true);
      }
    };

    const handleMouseOut = (event) => {
      if (event.target.closest("a, button, [role='button'], .clickable")) {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false); // Hide the cursor when it leaves the document
    };

    const handleWindowBlur = () => {
      setIsVisible(false); // Hide the cursor when the window loses focus
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return (
    <div className="custom-cursor-container">
      {isVisible && (
        <img
          src={
            isHoveringClickable
              ? "/pics/cursors/custom-cursor-ms2.png"
              : "/pics/cursors/custom-cursor-ms1.png"
          }
          alt="Custom Cursor"
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            pointerEvents: "none",
            transform: "translate(-29%, -25%)",
            zIndex: 1400,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )}
    </div>
  );
}
