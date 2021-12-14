import React, { useState, useCallback } from "react";
import GameOfLifeCell from "./GameOfLifeCell";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const gridSquareSize = 10;

const CellularAutomaton = (props) => {
    let [isRunning, setIsRunning] = useState(props.running);
    let [execOutputData, setExecOutputData] = useState(props.execOutputData);
    let [generationIndex, setGenerationIndex] = useState(0);
    const columnsQuantity = execOutputData.params.colsQuantity;

    console.log("cols", columnsQuantity);

    const run = useCallback(() => {
        if (!isRunning) {
            return;
        }

        console.log("isRunning");

        setGenerationIndex(++generationIndex);

        if (generationIndex === execOutputData.generations.lenght) {
            setIsRunning((isRunning = false));
        }
        setTimeout(run, 500);
    }, []);

    return (
        <>
            <IconButton
                aria-label="play"
                onClick={() => {
                    run();
                }}
            >
                <PlayArrowRoundedIcon />
            </IconButton>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columnsQuantity},${gridSquareSize}px)`
                }}
            >
                {execOutputData.generations[generationIndex].map((row, i) =>
                    row.map((cellState, j) => (
                        <GameOfLifeCell
                            key={`(${i},${j})`}
                            cellState={cellState}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default CellularAutomaton;
