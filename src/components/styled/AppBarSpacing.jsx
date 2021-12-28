import styled from "@mui/material/styles/styled";

const AppBarSpacing = styled("div")(({ theme }) => ({
	...theme.mixins.toolbar
}));

export default AppBarSpacing;
