import { createTheme } from "@material-ui/core";

const primary = "#04064a";
const secondary = "#232425";

//#D1B000
export default createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: primary,
    },
  },
  overrides: {
    MuiDialogActions: {
      root: {
        padding: "8px 24px 16px 24px",
      },
    },
    MuiButton: {
      root: {
        fontWeight: 600,
        textTransform: "none",
        color: secondary,
        padding: "6px 24px",
      },
      outlined: {
        borderRadius: "35px",
        borderColor: secondary,
        padding: "6px 20px",
      },
    },
    MuiSelect: {
      filled: {
        padding: "15px 0 15px 15px",
      },
    },
    MuiFilledInput: {
      input: {
        height: "49px",
        padding: "0px 0 0 10px",
      },
    },
  },
});