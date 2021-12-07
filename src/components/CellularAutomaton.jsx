import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import GameOfLifeCell from "./GameOfLifeCell";

let rowsQuantity = 5;
let colsQuantity = 5;
const gridSquareSize = 10;

const cellularAutomataStyle = makeStyles({
    cellularAutomata: {
        display: "grid",
        gridTemplateColumns: `repeat(${colsQuantity},${gridSquareSize}px)`
    }
});

const CellularAutomaton = (props) => {
    rowsQuantity = props.rowsNumb;
    colsQuantity = props.colsNumb;
    const cellularAutomataStyleClass = cellularAutomataStyle();
    const [state, setstate] = useState(props.state);

    return (
        <div className={cellularAutomataStyleClass.cellularAutomata}>
            {state.map((row, i) =>
                row.map((cellState, j) => (
                    <GameOfLifeCell key={`(${i},${j})`} cellState={cellState} />
                ))
            )}
        </div>
    );
};

export default CellularAutomaton;
