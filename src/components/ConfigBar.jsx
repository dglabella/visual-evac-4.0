import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar, Button, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const customDiv1Grow = 0.1;
const customDiv2Grow = 1 - customDiv1Grow;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        marginLeft: `${theme.drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const CustomDiv1 = styled("div")(({ theme }) => ({
    flexGrow: customDiv1Grow
}));

const CustomDiv2 = styled("div")(({ theme }) => ({
    flexGrow: customDiv2Grow
}));

const ConfigBar = (props) => {
    const configIconButtonClicked = () => {
        console.log("config button clicked!");
    };

    const loginIconButtonClicked = () => {
        console.log("login button clicked!");
    };

    return (
        <AppBar position={props.position} open={props.open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.iconButtonOnClick}
                    edge="start"
                    sx={{ mr: 2, ...(props.open && { display: "none" }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Elements
                </Typography>
                <CustomDiv1 />
                <Button
                    variant="outlined"
                    aria-label="config button"
                    color="inherit"
                    onClick={configIconButtonClicked}
                >
                    Configs
                </Button>
                <CustomDiv2 />
                <Button
                    variant="outlined"
                    aria-label="profile button"
                    color="inherit"
                    onClick={loginIconButtonClicked}
                >
                    Profile
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default ConfigBar;
