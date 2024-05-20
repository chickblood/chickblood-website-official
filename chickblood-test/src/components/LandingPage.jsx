import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";

const buttonTheme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
          input: {
            fontSize: "0.8rem",
            fontFamily: "monospace",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "0.8rem",
            fontFamily: "monospace",
          },
        },
      },
    },
  });

function LandingPage() {
  const outerTheme = useTheme();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  /* 
    funcionality TBD. currently it logs the user input (@var input) to the console 
    and navigates to next layer.
   */
  const handleSubmit = () => {
    console.log(input);
    /* After desired interaction (such as mongoInsert), navigating to next story board. */
    navigate("/story");
  };
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            {/* ---------- Input Box ---------- */}
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField
                label="Type Your Question"
                onChange={handleInputChange}
              />
            </ThemeProvider>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            <ThemeProvider theme={buttonTheme}>
              <Stack direction="row" spacing={5} mt={3}>
                {/* ---------- Skip Button ---------- */}
                <Button
                  variant="outlined"
                  size="small"
                  color="inherit"
                  sx={{ fontFamily: "monospace", fontSize: "0.7rem" }}
                  onClick={() => {
                    navigate("/story");
                  }}
                >
                  Skip
                </Button>
                {/* ---------- Submit Button ---------- */}
                <Button
                  variant="contained"
                  size="small"
                  color="ochre"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Stack>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LandingPage;
