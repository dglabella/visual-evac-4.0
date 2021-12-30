import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import AppBar from "./styled/AppBar";
import ProfileMenu from "./ProfileMenu";

const customDiv1Grow = 0.1;
const customDiv2Grow = 1 - customDiv1Grow;

const CustomDiv1 = styled("div")(({ theme }) => ({
	flexGrow: customDiv1Grow
}));

const CustomDiv2 = styled("div")(({ theme }) => ({
	flexGrow: customDiv2Grow
}));

const ConfigBar = (props) => {
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
			<AppBar position={props.position} open={props.open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={props.iconButtonOnClick}
						edge="start"
						sx={{ mr: 2, ...(props.open && { display: "none" }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Elements
					</Typography>
					<CustomDiv1 />
					<CustomDiv2 />
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
			<ProfileMenu
				anchorEl={anchorEl}
				open={open}
				handleProfileMenuClose={handleProfileMenuClose}
			/>
		</>
	);
};

export default ConfigBar;
