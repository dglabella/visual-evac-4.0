import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseCircleFilledRoundedIcon from "@mui/icons-material/PauseCircleFilledRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

const StatusBar = (props) => {
	return (
		<Box
			backgroundColor="WhiteSmoke"
			border={1}
			borderRadius={2}
			mt={2}
			sx={{
				display: "flex",
				alignItems: "center"
			}}
		>
			<Typography variant="overline" ml={2}>
				Generation:
			</Typography>
			<Typography
				variant="overline"
				color="primary"
				ml={1}
				sx={{ flexGrow: 1 }}
			>
				{props.generation}
			</Typography>

			<ButtonGroup
				variant="outlined"
				aria-label="outlined button group"
				sx={{ flexGrow: 1 }}
			>
				<IconButton
					aria-label="step backward"
					disabled={props.disabled}
					onClick={props.onStepBackward}
				>
					<FirstPageIcon />
				</IconButton>
				<IconButton
					aria-label="stop"
					disabled={props.disabled}
					onClick={props.onStop}
				>
					<StopRoundedIcon />
				</IconButton>
				<IconButton
					aria-label="play"
					disabled={props.disabled}
					onClick={props.onPlay}
				>
					<PlayArrowRoundedIcon />
				</IconButton>
				<IconButton
					aria-label="pause"
					disabled={props.disabled}
					onClick={props.onPause}
				>
					<PauseCircleFilledRoundedIcon />
				</IconButton>
				<IconButton
					aria-label="step forward"
					disabled={props.disabled}
					onClick={props.onStepForward}
				>
					<LastPageIcon />
				</IconButton>
			</ButtonGroup>

			<Typography variant="overline" ml={2}>
				execution state:
			</Typography>
			<Typography variant="overline" color={props.statusColor} mr={2}>
				{props.executionState}
			</Typography>
		</Box>
	);
};

export default StatusBar;
