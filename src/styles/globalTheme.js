import createTheme from "@mui/material/styles/createTheme";
import { grey } from "@mui/material/colors";

const globalTheme = createTheme({
	drawerWidth: 240,
	palette: {
		neutral: {
			main: "#fafafa"
		},
		background: {
			blackPaper: grey[800]
		}
	}
});

export default globalTheme;
