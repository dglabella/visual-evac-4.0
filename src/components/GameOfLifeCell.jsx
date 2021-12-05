import React from "react";
import Cell from "./Cell";
import { makeStyles } from "@mui/styles";

const aliveCellStyle = makeStyles({
    aliveCell: {
        width: "10px",
        height: "10px",
        border: "solid 1px black",
        backgroundColor: "black"
    }
});

const deadCellStyle = makeStyles({
    deadCell: {
        width: "10px",
        height: "10px",
        border: "solid 1px black",
        backgroundColor: "white"
    }
});

const cellState = {
    isAlive: false
};

function GameOfLifeCell() {
    const aliveCellStyleClass = aliveCellStyle();
    const deadCellStyleClass = deadCellStyle();

    cellState.isAlive = Math.random() < 0.5;

    return (
        <Cell
            cellState={cellState}
            className={
                cellState.isAlive
                    ? aliveCellStyleClass.aliveCell
                    : deadCellStyleClass.deadCell
            }
        />
    );
}

export default GameOfLifeCell;
