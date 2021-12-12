import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import LoadFileButton from "./components/LoadFileButton";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CellularAutomaton from "./components/CellularAutomaton";
import ConfigBar from "./components/ConfigBar";
import Typography from "@mui/material/Typography";
import DrawerPanel from "./components/DrawerPanel";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

const useStyle = makeStyles({
    content: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },

    drawerPaper: {
        width: drawerWidth
    }
});

const WorkPanel = () => {
    const classes = useStyle();

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
            <ConfigBar
                style={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: `${drawerWidth}px`
                }}
            />
            <Toolbar />
            <DrawerPanel
                className={classes.drawer}
                classes={{ paper: classes.drawerPaper }}
            />
            <div className={classes.content}>
                <Box border={1} borderRadius={2}>
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
                </Box>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                ></div>
                {cellularAutomatonState !== null ? (
                    <CellularAutomaton state={cellularAutomatonState} />
                ) : (
                    <Typography variant="body1" color="initial">
                        Load the cellular automaton life cycle file in order to
                        create the view
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default WorkPanel;
