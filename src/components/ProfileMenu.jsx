import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SnippetFolderIcon from "@mui/icons-material/SnippetFolder";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const ProfileMenu = (props) => {
	return (
		<Menu
			anchorEl={props.anchorEl}
			open={props.open}
			onClose={props.handleProfileMenuClose}
			onClick={props.handleProfileMenuClose}
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
	);
};

export default ProfileMenu;
