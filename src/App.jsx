import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import GameOfLifeCell from "./components/GameOfLifeCell";
import UploadButton from "./components/UploadButton";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DoneIcon from "@mui/icons-material/Done";

const rowsQuantity = 10;
const colsQuantity = 10;
const gridSquareSize = 10;

const cellularAutomataStyle = makeStyles({
    cellularAutomata: {
        display: "grid",
        gridTemplateColumns: `repeat(${colsQuantity},${gridSquareSize}px)`
    }
});

function App() {
    const cellularAutomataStyleClass = cellularAutomataStyle();

    let [cellularAutomatonLifeCycle, setCellularAutomatonLifeCycle] = useState(
        []
    );
    let [cellularAutomaton, setCellularAutomaton] = useState(
        createEmptyCellularAutomatom()
    );
    let [fileName, setFileName] = useState(null);

    const buttonColor = fileName !== null ? "success" : "primary";
    const buttonIcon =
        fileName !== null ? <DoneIcon /> : <UploadFileOutlinedIcon />;

    function createEmptyCellularAutomatom() {
        let ret = [];
        for (let i = 0; i < rowsQuantity; i++) {
            ret[i] = [];
            for (let j = 0; j < colsQuantity; j++) {
                ret[i][j] = {};
            }
        }

        return ret;
    }

    async function getFileCallBack(uploadedFile) {
        if (uploadedFile !== null) {
            const lifeCicle = JSON.parse(await uploadedFile.text());
            console.log(lifeCicle);
            setCellularAutomatonLifeCycle(
                (cellularAutomatonLifeCycle = lifeCicle)
            );
            setCellularAutomaton((cellularAutomaton = lifeCicle[0]));
            setFileName((fileName = uploadedFile.name));
        }
    }

    return (
        <div>
            <UploadButton
                id="uploadFileButton1"
                format="application/JSON"
                buttonColor={buttonColor}
                buttonIcon={buttonIcon}
                fileName={fileName}
                getFileCallBack={getFileCallBack}
            >
                file
            </UploadButton>
            <div className={cellularAutomataStyleClass.cellularAutomata}>
                {cellularAutomaton.map((row, i) =>
                    row.map((cellState, j) => (
                        <GameOfLifeCell
                            key={`(${i},${j})`}
                            cellState={cellState}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
