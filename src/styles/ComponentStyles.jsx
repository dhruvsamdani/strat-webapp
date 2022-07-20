import { createTheme } from "@mui/material/styles";

const colors = {
  white: "#F2F3F8",
  dblue: "#4357ad",
  coral: "#EF767A",
  lcoral: "#F08286",
  lblue: "#EBF3FF",
  blue: "#c2daff",
  accent: "#d7daea",
  daccent: "#CACDE3",
  secondary: "#70769E",
};

const InputFieldAC = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          marginTop: "1rem",
          borderRadius: 20,
        },
        listbox: {
          backgroundColor: colors.daccent,
          borderRadius: 20,
        },
        root: {
          color: colors.secondary,
        },
        inputFocused: {
          textTransform: "uppercase",
          fontWeight: "600",
        },
        focused: {
          color: colors.secondary,
          textColor: colors.secondary,
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
        style: {
          textTransform: "uppercase",
        },
      },
      styleOverrides: {
        root: {
          border: "None",
          underline: "false",
          borderRadius: "15px",
          backgroundColor: colors.accent,
          fontSize: "18pt",
          fontFamily: "Outfit",
          fontWeight: "400",
          width: "7em",
          "&.Mui-focused": {
            backgroundColor: colors.daccent,
            textTransform: "uppercase",
            fontWeight: "600",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          background: "None",
          color: colors.secondary,
          fontFamily: "Outfit",
          fontWeight: "600",
          fontSize: "18pt",
          textAlign: "center",
          "&.Mui-focused": {
            color: colors.secondary,
            fontWeight: "600",
          },
        },
      },
    },
  },
});

export const PaperTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        },
      },
    },
  },
});

export const ButtonTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: false,
      },

      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            borderRadius: "15px",
            backgroundColor: "#49516F",
          },
          height: "2.5rem",
          width: "6rem",
          fontFamily: "Outfit",
          fontWeight: 600,
        },
      },
    },
  },
});
export default InputFieldAC;
