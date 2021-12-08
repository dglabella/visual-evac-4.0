import React from "react";
//import { makeStyles } from "@mui/styles";
import GameOfLifeCell from "./GameOfLifeCell";

const gridSquareSize = 10;

// const cellularAutomataStyle = makeStyles({
//     cellularAutomata: {
//         display: "grid",
//         gridTemplateColumns: `repeat(${colsQuantity},${gridSquareSize}px)`
//     }
// });

const CellularAutomaton = (props) => {
    //const cellularAutomataStyleClass = cellularAutomataStyle();
    //const [state, setstate] = useState(props.state);
    const columnsQuantity = props.state[0].length;
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columnsQuantity},${gridSquareSize}px)`
            }}
        >
            {props.state.map((row, i) =>
                row.map((cellState, j) => (
                    <GameOfLifeCell key={`(${i},${j})`} cellState={cellState} />
                ))
            )}
        </div>
    );
};

export default CellularAutomaton;
