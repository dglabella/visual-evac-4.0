import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const customDiv1Grow = 0.1;
const customDiv2Grow = 1 - customDiv1Grow;

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
					{/* <Button
                    variant="outlined"
                    aria-label="profile button"
                    color="inherit"
                    onClick={loginIconButtonClicked}
                >
                    Profile
                </Button> */}
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
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleProfileMenuClose}
				onClick={handleProfileMenuClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0
						}
					}
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem>
					<Avatar /> Profile
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<SnippetFolderIcon fontSize="small" />
					</ListItemIcon>
					My proyects
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<ImportExportIcon fontSize="small" />
					</ListItemIcon>
					Import-Export
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Experiment setup
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export default ConfigBar;
