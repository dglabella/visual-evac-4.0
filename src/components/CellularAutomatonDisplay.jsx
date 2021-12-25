import React, { useState, useCallback, useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import StatusBar from "./StatusBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { red, grey, green, amber } from "@mui/material/colors";
import GameOfLifeCell from "./GameOfLifeCell";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Cell from "./Cell";

const gridSquareSize = 10;

const CellularAutomatonDisplay = (props) => {
	const theme = useTheme();

	const [hideFloatingButton, setHideFloatingButton] = useState(false);
	const [open, setOpen] = useState(false);

	const [execOutputData, setExecOutputData] = useState(null);

	const generationIndexRef = useRef(0);
	const [generationIndex, setGenerationIndex] = useState(0);

	const [buttonsStatus, setButtonsStatus] = useState({
		stepBackward: false,
		stop: false,
		play: false,
		pause: false,
		stepForward: false
	});

	let rowsForCreation = 0;
	const handleRowsInputChange = (event) => {
		rowsForCreation = event.target.value;
	};

	let colsForCreation = 0;
	const handleColsInputChange = (event) => {
		colsForCreation = event.target.value;
	};

	const closeBackDrop = () => {
		setOpen(false);
	};
	const openBackDrop = () => {
		setExecOutputData(null);
		setOpen(!open);
	};

	const handleStepBackwardButtonPressed = () => {
		console.log("step backward button pressed");
	};

	const handleStopButtonPressed = () => {
		setButtonsStatus({
			stepBackward: false,
			stop: true,
			play: false,
			pause: false,
			stepForward: false
		});
	};

	const handlePlayButtonPressed = () => {
		setButtonsStatus({
			stepBackward: false,
			stop: false,
			play: true,
			pause: false,
			stepForward: false
		});
	};

	const handlePauseButtonPressed = () => {
		setButtonsStatus(() => {
			return status.current.isRunning
				? {
						stepBackward: false,
						stop: false,
						play: false,
						pause: true,
						stepForward: false
				  }
				: buttonsStatus;
		});
	};

	const handleStepForwardButtonPressed = () => {
		console.log("step forward button pressed");
	};

	const status = useRef({
		isStopped: false,
		isRunning: false,
		isPaused: false
	});

	const handleCellClick = (event) => {
		console.log("clicked", event.target);
	};

	const acceptEnviromentCreation = () => {
		props.cleanExecutionOutputData();
		const generationsForCreation = [
			Array.from({ length: rowsForCreation }, (i) =>
				Array.from({ length: colsForCreation }, (j) => (
					<Cell key={`(${i},${j})`} />
				))
			)
		];
		closeBackDrop();
		setExecOutputData({
			params: {
				rowsQuantity: rowsForCreation,
				colsQuantity: colsForCreation,
				currentGeneration: 0
			},
			generations: generationsForCreation
		});
		generationIndexRef.current = 0;
		setGenerationIndex(0);
	};

	useEffect(() => {
		if (props.executionOutputData !== null) {
			setExecOutputData(props.executionOutputData);
		}

		resolveRunningStatus();
	});

	const resolveRunningStatus = () => {
		if (buttonsStatus.play && !status.current.isRunning) {
			status.current.isRunning = true;
			run();
		}

		if (buttonsStatus.stop) {
			generationIndexRef.current = 0;
			status.current.isRunning = false;
		}

		if (buttonsStatus.pause) {
			status.current.isRunning = false;
		}
	};

	const getStatusLabel = () => {
		const statusLabel = buttonsStatus.stop
			? "stopped"
			: buttonsStatus.play
			? "running"
			: buttonsStatus.pause
			? "pause"
			: "none";

		const labelColor = buttonsStatus.stop
			? red["A700"]
			: buttonsStatus.play
			? green[500]
			: buttonsStatus.pause
			? amber[900]
			: grey[900];

		return {
			status: statusLabel,
			color: labelColor
		};
	};

	const run = useCallback(() => {
		if (status.current.isRunning) {
			if (generationIndexRef.current < execOutputData.generations.length) {
				setGenerationIndex(generationIndexRef.current);
				generationIndexRef.current = generationIndexRef.current + 1;

				setTimeout(run, 500);
			} else {
				//finished
				status.current.isRunning = false;
			}
		} else {
			//stopped or paused
		}
	});

	return (
		<>
			<StatusBar
				generation={generationIndex}
				executionState={getStatusLabel().status}
				statusColor={getStatusLabel().color}
				disabled={execOutputData !== null ? false : true}
				onStepBackward={handleStepBackwardButtonPressed}
				onStop={handleStopButtonPressed}
				onPlay={handlePlayButtonPressed}
				onPause={handlePauseButtonPressed}
				onStepForward={handleStepForwardButtonPressed}
			/>
			<Box
				mt={4}
				sx={{
					display: "flex",
					height: "100vh",
					border: "1px dashed grey",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				{execOutputData !== null ? (
					<div
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${execOutputData.params.colsQuantity},${gridSquareSize}px)`
						}}
					>
						{execOutputData.generations[generationIndex].map((row, i) =>
							row.map((cellState, j) => (
								<GameOfLifeCell key={`(${i},${j})`} cellState={cellState} />
							))
						)}
					</div>
				) : (
					<Typography ml={1} variant="body1" color="initial">
						Hit the plus button in order to create a new enviroment or load the
						cellular automaton generations file in order to create the view.
					</Typography>
				)}
				{hideFloatingButton ? (
					<></>
				) : (
					<>
						<Fab
							color="primary"
							aria-label="new"
							size="small"
							sx={{
								position: "fixed",
								bottom: (theme) => theme.spacing(1),
								right: (theme) => theme.spacing(4)
							}}
							onClick={openBackDrop}
						>
							<AddIcon />
						</Fab>
						<Backdrop
							sx={{
								color: "#fff",
								zIndex: (theme) => theme.zIndex.drawer + 1
							}}
							open={open}
						>
							<Box
								sx={{
									display: "flex",
									bgcolor: theme.palette.background.paper,
									width: 526,
									height: 280,
									borderRadius: theme.shape.borderRadius,
									p: theme.spacing(4)
								}}
							>
								<Grid container spacing={6}>
									<Grid item xs={12}>
										<Typography ml={1} variant="body1" color="initial">
											Set the cellular automaton width and height
										</Typography>
									</Grid>
									<Grid item xs={12}>
										<TextField
											id="rows-input"
											label="rows"
											type="number"
											required
											InputLabelProps={{
												shrink: true
											}}
											sx={{ pr: theme.spacing(2) }}
											onChange={handleRowsInputChange}
										/>
										<TextField
											id="columns-input"
											label="columns"
											type="number"
											required
											InputLabelProps={{
												shrink: true
											}}
											onChange={handleColsInputChange}
										/>
									</Grid>
									<Grid item xs={6}>
										<IconButton
											aria-label="cancel"
											size="large"
											onClick={closeBackDrop}
										>
											<HighlightOffIcon fontSize="large" />
										</IconButton>
									</Grid>
									<Grid item xs={6}>
										<Box
											sx={{
												display: "flex",
												justifyContent: "right"
											}}
										>
											<IconButton
												aria-label="done"
												size="large"
												onClick={acceptEnviromentCreation}
											>
												<DoneIcon fontSize="large" />
											</IconButton>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Backdrop>
					</>
				)}
			</Box>
		</>
	);
};

export default CellularAutomatonDisplay;
