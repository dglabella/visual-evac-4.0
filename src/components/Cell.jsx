import React from "react";
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

const Cell = (props) => {
    const cellState = props.cellState;

    const aliveCellStyleClass = aliveCellStyle();
    const deadCellStyleClass = deadCellStyle();

    return (
        <div
            className={
                cellState.isAlive
                    ? aliveCellStyleClass.aliveCell
                    : deadCellStyleClass.deadCell
            }
        />
    );
};

export default Cell;
