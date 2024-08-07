import React from "react";
import { Typography } from "@mui/material";
import useFontFamily from "./hooks/useFontFamily";

export default function App() {
  const useFont = useFontFamily();
  return (
    <div>
      <Typography sx={{ fontFamily: useFont.bold }}>Chickblood</Typography>
    </div>
  );
}
