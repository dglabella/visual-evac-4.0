import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkPanel from "./pages/WorkPanel";
import globalTheme from "./styles/globalTheme";
import Login from "./pages/Login";
import ScenarioSelection from "./pages/ScenarioSelection";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={globalTheme}>
			<Login />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
