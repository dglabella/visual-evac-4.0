import React, { useState } from "react";
import LoadFileButton from "./components/LoadFileButton";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CellularAutomaton from "./components/CellularAutomaton";

function App() {
    let [cellularAutomatonLifeCycle, setCellularAutomatonLifeCycle] =
        useState(null);
    let [cellularAutomatonState, setCellularAutomatonState] = useState(null);
    let [fileName, setFileName] = useState(null);

    const buttonColor = fileName !== null ? "success" : "primary";
    const buttonIcon =
        fileName !== null ? <DoneIcon /> : <UploadFileOutlinedIcon />;

    async function getFileCallBack(uploadedFile) {
        if (uploadedFile !== null) {
            setCellularAutomatonLifeCycle(
                (cellularAutomatonLifeCycle = JSON.parse(
                    await uploadedFile.text()
                ))
            );
            setCellularAutomatonState(
                (cellularAutomatonState = cellularAutomatonLifeCycle[0])
            );
            setFileName((fileName = uploadedFile.name));
        }
    }

    return (
        <div>
            <LoadFileButton
                id="loadFileButton1"
                format="application/JSON"
                buttonColor={buttonColor}
                buttonIcon={buttonIcon}
                fileName={fileName}
                getFileCallBack={getFileCallBack}
            >
                file
            </LoadFileButton>
            {cellularAutomatonState !== null ? (
                <CellularAutomaton
                    rowsNumb={10}
                    colsNumb={10}
                    state={cellularAutomatonState}
                />
            ) : (
                "Load the cellular automaton life-Cycle file in order to create the view"
            )}
        </div>
    );
}

export default App;
