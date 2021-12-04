import React from "react";
import cellStyle from "./../styles/Cell.css";

const aliveClassName = "Cell-alive";
const deadClassName = "Cell-dead";

const Cell = (props) => {
    const cellState = props.cellState;
    return (
        <div
            className={cellState.isAlive ? aliveClassName : deadClassName}
            style={cellStyle.Cell}
        />
    );
};

export default Cell;
