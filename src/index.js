import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkPanel from "./WorkPanel";
import globalTheme from "./styles/globalTheme";
import Login from "./Login";
import ScenarioSelection from "./ScenarioSelection";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={globalTheme}>
            <Login />
            {/* <ScenarioSelection />
            <WorkPanel /> */}
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
