import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const CustomDropDownList = (props) => {
    const [open, setOpen] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby={"list -" + props.title}
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.list.map((element, index) => (
                        <ListItemButton
                            key={index}
                            sx={{ pl: 4 }}
                            selected={selectedIndex === index}
                            onClick={() => handleListItemClick(index)}
                        >
                            <ListItemIcon>{element.icon}</ListItemIcon>
                            <ListItemText primary={element.name} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    );
};

export default CustomDropDownList;
