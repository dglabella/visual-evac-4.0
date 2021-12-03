import React, { useState } from "react";

const CellularAutomaton = () => {
    const rowsNumber = 50;
    const colsNumber = 50;
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < rowsNumber; i++) {
            rows.push(
                Array.from(Array(colsNumber), () => {
                    false; //  is dead initially
                })
            );
        }
        return rows;
    });
    return <React.Fragment>{}</React.Fragment>;
};

export default CellularAutomaton;
