import React, { useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import AppBar from "./../components/styled/AppBar";
import AppBarSpacing from "./../components/styled/AppBarSpacing";
import ProfileMenu from "./../components/ProfileMenu";

const customDiv1Grow = 1;

const CustomDiv1 = styled("div")(({ theme }) => ({
	flexGrow: customDiv1Grow
}));

const renderRow = (props) => {
	const { index, style } = props;

	return (
		<ListItem style={style} key={index} component="div" disablePadding>
			<ListItemButton>
				<ListItemText primary={`Item ${index + 1}`} />
			</ListItemButton>
		</ListItem>
	);
};

const ScenarioSelection = () => {
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const profileButtonPressed = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleProfileMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Scenario selection
					</Typography>
					<CustomDiv1 />
					<Tooltip title="Settings">
						<IconButton
							size="small"
							sx={{ ml: 2 }}
							onClick={profileButtonPressed}
						>
							<Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<AppBarSpacing />
			<Box>
				<Grid container spacing={theme.spacing(2)}>
					<Grid item xs={8}>
						<Box
							sx={{
								border: "1px dashed grey",
								width: 850,
								height: 475,
								m: theme.spacing(2)
							}}
						></Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								width: 400,
								height: 475,
								bgcolor: "background.paper",
								m: theme.spacing(2)
							}}
						>
							<FixedSizeList
								height={475}
								width={360}
								itemSize={46}
								itemCount={2}
								overscanCount={5}
							>
								{renderRow}
							</FixedSizeList>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								border: "1px dashed grey",
								height: 50,
								mx: theme.spacing(2)
							}}
						></Box>
					</Grid>
				</Grid>
			</Box>
			<ProfileMenu
				anchorEl={anchorEl}
				open={open}
				handleProfileMenuClose={handleProfileMenuClose}
			/>
		</>
	);
};

export default ScenarioSelection;
