import React, { useState, useCallback, useEffect, useRef } from "react";
import StatusBar from "./StatusBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { red, grey, green, amber } from "@mui/material/colors";
import GameOfLifeCell from "./GameOfLifeCell";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const gridSquareSize = 10;

const CellularAutomatonDisplay = (props) => {
	const generationIndexRef = useRef(0);
	const [generationIndex, setGenerationIndex] = useState(0);

	const [buttonsStatus, setButtonsStatus] = useState({
		stepBackward: false,
		stop: false,
		play: false,
		pause: false,
		stepForward: false
	});

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

	useEffect(() => {
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
			if (
				generationIndexRef.current <
				props.executionOutputData.generations.length
			) {
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
				disabled={props.executionOutputData !== null ? false : true}
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
				{props.executionOutputData !== null ? (
					<div
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${props.executionOutputData.params.colsQuantity},${gridSquareSize}px)`
						}}
					>
						{props.executionOutputData.generations[generationIndex].map(
							(row, i) =>
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
				<Fab
					color="primary"
					aria-label="new"
					size="small"
					sx={{
						position: "fixed",
						bottom: (theme) => theme.spacing(1),
						right: (theme) => theme.spacing(4)
					}}
					onClick={() => {
						console.log("Holaaaa");
					}}
				>
					<AddIcon />
				</Fab>
			</Box>
		</>
	);
};

export default CellularAutomatonDisplay;
