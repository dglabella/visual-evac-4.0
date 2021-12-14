import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkPanel from "./WorkPanel";
import globalTheme from "./styles/globalTheme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={globalTheme}>
            <WorkPanel />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
