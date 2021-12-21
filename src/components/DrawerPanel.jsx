import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerHeader from "./DrawerHeader";

const DrawerPanel = (props) => {
    const theme = useTheme();
    return (
        <Drawer
            sx={{
                width: theme.drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: theme.drawerWidth,
                    boxSizing: "border-box"
                }
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <DrawerHeader>
                <IconButton onClick={props.iconButtonOnClick}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            {props.children}
        </Drawer>
    );
};

export default DrawerPanel;
