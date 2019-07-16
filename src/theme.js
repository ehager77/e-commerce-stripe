import { createMuiTheme } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "#F1570A",
        margin: "10px",
        "&:hover": {
          backgroundColor: "white",
          borderColor: "#F1570A"
        }
      }
    }
  }
});