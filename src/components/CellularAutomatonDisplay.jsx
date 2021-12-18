import React, { useState, useCallback, useEffect, useRef } from "react";
import StatusBar from "./StatusBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GameOfLifeCell from "./GameOfLifeCell";

const gridSquareSize = 10;

const CellularAutomatonDisplay = (props) => {
	const generationIndexRef = useRef(0);
	const [generationIndex, setGenerationIndex] = useState(0);

	const [execOutputData, setExecOutputData] = useState(props.execOutputData);

	const columnsQuantity = execOutputData.params.colsQuantity;

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
		setButtonsStatus({
			stepBackward: false,
			stop: false,
			play: false,
			pause: true,
			stepForward: false
		});
	};

	const handleStepForwardButtonPressed = () => {
		console.log("step forward button pressed");
	};

	console.log("rendering: Cellular Automaton");
	const status = useRef({
		isStopped: false,
		isRunning: false,
		isPaused: false
	});

	useEffect(() => {
		resolveRunningStatus();
	});

	const resolveRunningStatus = () => {
		if (props.buttonsStatus.play && !status.current.isRunning) {
			status.current.isRunning = true;
			run();
		}

		if (props.buttonsStatus.stop) {
			generationIndexRef.current = 0;
			status.current.isRunning = false;
		}

		if (props.buttonsStatus.pause) {
			status.current.isRunning = false;
		}
	};

	const run = useCallback(() => {
		if (generationIndexRef.current < execOutputData.generations.length) {
			setGenerationIndex(generationIndexRef.current);
			generationIndexRef.current = generationIndexRef.current + 1;

			setTimeout(run, 500);
		} else {
			status.current.isRunning = false;
		}
	});

	return (
		<>
			<StatusBar
				generation={"0"}
				executionState={"stoped"}
				disabled={props.executionOutput.file !== null ? false : true}
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
				{props.executionOutput.file !== null ? (
					<div
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${columnsQuantity},${gridSquareSize}px)`
						}}
					>
						{execOutputData.generations[generationIndex].map((row, i) =>
							row.map((cellState, j) => (
								<GameOfLifeCell key={`(${i},${j})`} cellState={cellState} />
							))
						)}
					</div>
				) : (
					<Typography variant="body1" color="initial">
						Load the cellular automaton life cycle file in order to create the
						view
					</Typography>
				)}
			</Box>
		</>
	);
};

export default CellularAutomatonDisplay;
