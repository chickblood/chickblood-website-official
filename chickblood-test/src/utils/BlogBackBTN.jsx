import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

export default function BlogBackBTN() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        color="inherit"
        variant=""
        style={{ cursor: "none" }}
        onClick={() => {
          navigate("/blog");
        }}
      >
        <RiArrowGoBackLine size={"25px"}></RiArrowGoBackLine>
      </Button>
    </div>
  );
}
