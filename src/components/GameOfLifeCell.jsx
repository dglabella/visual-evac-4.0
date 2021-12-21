import React from "react";
import { styled } from "@mui/material/styles";

const AliveCell = styled("div")(() => ({
    width: "10px",
    height: "10px",
    border: "solid 1px black",
    backgroundColor: "black"
}));

const DeadCell = styled("div")(() => ({
    width: "10px",
    height: "10px",
    border: "solid 1px black",
    backgroundColor: "white"
}));

const GameOfLifeCell = (props) => {
    return props.cellState.isAlive ? <AliveCell /> : <DeadCell />;
};

export default GameOfLifeCell;
