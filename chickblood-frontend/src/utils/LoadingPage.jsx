import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

export default function LoadingPage({ openLoader, handleClose }) {
  //   const [openLoader, setOpenLoader] = React.useState(false);
  //   const handleClose = () => {
  //     setOpenLoader(false);
  //   };
  //   const handleOpen = () => {
  //     setOpenLoader(true);
  //   };
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
        // onClick={handleClose}
      >
        <img
          src={
            "https://imagedelivery.net/luUTa6EFyOmipDilm9a3Jw/df3521ea-558c-4087-a9b6-f585a0770b00/public"
          }
          alt="loader icon"
          style={{
            width: "50vh",
            height: "50vh",
            top: "10vh",
          }}
        ></img>
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </div>
  );
}
