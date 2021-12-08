import React, { useState } from "react";
import LoadFileButton from "./components/LoadFileButton";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CellularAutomaton from "./components/CellularAutomaton";
import DrawPanel from "./components/DrawPanel";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
    workPanel: {
        display: "flex"
    },

    toolbar: theme.mixins.toolbar
}));

const WorkPanel = () => {
    const classes = useStyles();

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
            console.log(
                "atomaton life cycle " + cellularAutomatonLifeCycle.length
            );
        }
    }

    return (
        <div className={classes.workPanel}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6"></Typography>
                </Toolbar>
            </AppBar>
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
            <DrawPanel />
            {cellularAutomatonState !== null ? (
                <CellularAutomaton state={cellularAutomatonState} />
            ) : (
                "Load the cellular automaton life-Cycle file in order to create the view"
            )}
        </div>
    );
};

export default WorkPanel;
