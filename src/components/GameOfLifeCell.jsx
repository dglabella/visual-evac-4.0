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

const GameOfLifeCell = (props) => {
    const aliveCellStyleClass = aliveCellStyle();
    const deadCellStyleClass = deadCellStyle();

    return (
        <Cell
            cellState={props.cellState}
            className={
                props.cellState.isAlive
                    ? aliveCellStyleClass.aliveCell
                    : deadCellStyleClass.deadCell
            }
        />
    );
};

export default GameOfLifeCell;
