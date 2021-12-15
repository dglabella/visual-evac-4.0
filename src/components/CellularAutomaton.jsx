import React, { useState, useCallback, useEffect, useRef } from "react";
import GameOfLifeCell from "./GameOfLifeCell";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const gridSquareSize = 10;

const CellularAutomaton = (props) => {
	console.log("rendering: Cellular Automaton");
	let isRunning = useRef(props.play);
	let [execOutputData, setExecOutputData] = useState(props.execOutputData);
	let [generationIndex, setGenerationIndex] = useState(0);

	const columnsQuantity = execOutputData.params.colsQuantity;

	useEffect(() => {
		console.log("EFECTO");

		if (props.play) {
			isRunning.current = true;
		} else {
			isRunning.current = false;
		}

		console.log("is running", isRunning.current);
		run();
	});

	const run = useCallback(() => {
		console.log("is running inside run function:", isRunning.current);
		if (!isRunning.current) {
			return;
		}

		console.log("isRunning");

		setGenerationIndex(++generationIndex);

		if (generationIndex === execOutputData.generations.length - 1) {
			isRunning.current = false;
		}

		setTimeout(run, 500);
	}, []);

	return (
		<>
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
		</>
	);
};

export default CellularAutomaton;
