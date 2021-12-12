import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DoneIcon from "@mui/icons-material/Done";
import CellularAutomaton from "./components/CellularAutomaton";
import LoadFileButton from "./components/LoadFileButton";
import ConfigBar from "./components/ConfigBar";
import DrawerPanel from "./components/DrawerPanel";
import { display } from "@mui/system";

const Content = styled("Content", {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${theme.drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

function WorkPanel2() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <ConfigBar
                position="fixed"
                open={open}
                openWidth={theme.drawerWidth}
                IconButtonOnClick={handleDrawerOpen}
            ></ConfigBar>

            <DrawerPanel
                open={open}
                IconButtonOnClick={handleDrawerClose}
            ></DrawerPanel>

            <Content open={open}>
                <div
                    style={{
                        // necessary for content to be below app bar
                        ...theme.mixins.toolbar
                    }}
                />
                <Box border={1} borderRadius={1}>
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
                <Box
                    mt={4}
                    sx={{
                        width: "100%",
                        height: "100%",
                        border: "1px dashed grey"
                    }}
                >
                    {cellularAutomatonState !== null ? (
                        <CellularAutomaton state={cellularAutomatonState} />
                    ) : (
                        <Typography
                            variant="body1"
                            color="initial"
                            sx={}
                        >
                            Load the cellular automaton life cycle file in order
                            to create the view
                        </Typography>
                    )}
                </Box>
            </Content>
        </Box>
    );
}

export default WorkPanel2;
