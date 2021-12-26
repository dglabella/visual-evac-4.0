import React from "react";
import { styled } from "@mui/material/styles";

const AliveCell = styled("div")(() => ({
	width: "10px",
	height: "10px",
	border: "1px solid black",
	backgroundColor: "black"
}));

const DeadCell = styled("div")(() => ({
	width: "10px",
	height: "10px",
	border: "1px solid black",
	backgroundColor: "white"
}));

const GameOfLifeCell = (props) => {
	return props.cellState.isAlive ? (
		<AliveCell onClick={props.handleCellClick} />
	) : (
		<DeadCell onClick={props.handleCellClick} />
	);
};

export default GameOfLifeCell;
