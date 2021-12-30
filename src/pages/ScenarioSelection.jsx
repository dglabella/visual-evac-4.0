import React, { useEffect, useState } from "react";
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
import Scenarios from "./../mock/Scenarios";
import CircularProgress from "@mui/material/CircularProgress";

const customDiv1Grow = 1;

const CustomDiv1 = styled("div")(({ theme }) => ({
	flexGrow: customDiv1Grow
}));

const ScenarioSelection = () => {
	console.log("render");
	const theme = useTheme();

	const [scenarios, setScenarios] = useState(null);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const profileButtonPressed = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleProfileMenuClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		setScenarios(Scenarios);
	}, [scenarios]);

	const renderRow = (props) => {
		const { index, style } = props;

		return (
			<ListItem style={style} key={index} component="div" disablePadding>
				<ListItemButton>
					<ListItemText primary={scenarios[index].name} />
				</ListItemButton>
			</ListItem>
		);
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
								width: 850,
								height: 475,
								borderRadius: theme.shape.borderRadius,
								boxShadow: theme.shadows[3],
								m: theme.spacing(2)
							}}
						></Box>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								display: "flex",

								width: 400,
								height: 475,
								bgcolor: "background.paper",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: theme.shape.borderRadius,
								boxShadow: theme.shadows[3],
								m: theme.spacing(2)
							}}
						>
							{scenarios !== null ? (
								<FixedSizeList
									height={475}
									width={400}
									itemSize={46}
									itemCount={15}
									overscanCount={5}
								>
									{renderRow}
								</FixedSizeList>
							) : (
								<CircularProgress />
							)}
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box
							sx={{
								height: 50,
								borderRadius: theme.shape.borderRadius,
								boxShadow: theme.shadows[3],
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
