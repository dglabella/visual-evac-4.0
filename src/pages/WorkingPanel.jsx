import React, { useState } from "react";
import useTheme from "@mui/material/styles/useTheme";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CellularAutomatonDisplay from "../components/CellularAutomatonDisplay";
import LoadFileButton from "../components/LoadFileButton";
import ConfigBar from "../components/ConfigBar";
import DrawerPanel from "../components/DrawerPanel";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SquareIcon from "@mui/icons-material/Square";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DoorBackIcon from "@mui/icons-material/DoorBack";
import SensorsIcon from "@mui/icons-material/Sensors";
import SquareOutlinedIcon from "@mui/icons-material/SquareOutlined";
import CustomDropDownList from "../components/CustomDropDownList";
import Divider from "@mui/material/Divider";
import ConfigBarSpacing from "./../components/styled/AppBarSpacing";
import MainDisplaySection from "./../components/styled/MainDisplaySection";

const WorkingPanel = () => {
	const theme = useTheme();
	const [listItemSelected, setListItemSelected] = useState("none");

	const [executionOutput, setExecutionOutput] = useState({
		fileName: null,
		file: null
	});

	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const buttonColor = executionOutput.fileName !== null ? "success" : "primary";
	const buttonIcon =
		executionOutput.fileName !== null ? (
			<DoneIcon />
		) : (
			<UploadFileOutlinedIcon />
		);

	async function getFileCallBack(uploadedFile) {
		if (uploadedFile !== null) {
			setExecutionOutput({
				fileName: uploadedFile.name,
				file: JSON.parse(await uploadedFile.text())
			});
		}
	}

	const cleanExecutionOutput = () => {
		setExecutionOutput({ fileName: null, file: null });
	};

	const listItemPressed = (element, index) => {
		setListItemSelected(element);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<ConfigBar
				position="fixed"
				open={open}
				openWidth={theme.drawerWidth}
				iconButtonOnClick={handleDrawerOpen}
			></ConfigBar>

			<DrawerPanel open={open} iconButtonOnClick={handleDrawerClose}>
				<CustomDropDownList
					title={"Enviroment"}
					icon={<ViewComfyIcon />}
					handleItemSelection={listItemPressed}
					list={[
						{ name: "wall", icon: <SquareIcon /> },
						{ name: "fire", icon: <LocalFireDepartmentIcon /> },
						{ name: "exit", icon: <DoorBackIcon /> },
						{ name: "sensor", icon: <SensorsIcon /> }
					]}
				/>

				<Divider />
				<CustomDropDownList
					title={"Agents"}
					icon={<GroupAddRoundedIcon />}
					handleItemSelection={listItemPressed}
					list={[
						{ name: "closest exit", icon: <PersonRoundedIcon /> },
						{ name: "follow", icon: <PersonRoundedIcon /> },
						{ name: "known exit", icon: <PersonRoundedIcon /> }
					]}
				/>
			</DrawerPanel>

			<MainDisplaySection open={open}>
				<ConfigBarSpacing />
				<Box
					sx={{
						display: "flex",
						alignItems: "center"
					}}
				>
					<Typography variant="overline" ml={2}>
						Selection:
					</Typography>
					<Typography
						variant="overline"
						color="primary"
						ml={1}
						sx={{ flexGrow: 1 }}
					>
						<>
							{listItemSelected.icon}
							{listItemSelected.name}
						</>
					</Typography>
					<LoadFileButton
						format="application/JSON"
						buttonColor={buttonColor}
						buttonIcon={buttonIcon}
						fileName={executionOutput.fileName}
						getFileCallBack={getFileCallBack}
					>
						file
					</LoadFileButton>
				</Box>
				<CellularAutomatonDisplay
					executionOutputData={executionOutput.file}
					cleanExecutionOutputData={cleanExecutionOutput}
				/>
			</MainDisplaySection>
		</Box>
	);
};

export default WorkingPanel;
