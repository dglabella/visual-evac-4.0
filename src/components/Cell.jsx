import React from "react";
import { useState } from "react";

function Cell(props) {
    //const [cellState, updateCellState] = useState(props.cellState);

    return <div className={props.className} />;
}

export default Cell;
