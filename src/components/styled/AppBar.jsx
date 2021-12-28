import styled from "@mui/material/styles/styled";
import MuiAppBar from "@mui/material/AppBar";

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		width: `calc(100% - ${theme.drawerWidth}px)`,
		marginLeft: `${theme.drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

export default AppBar;
