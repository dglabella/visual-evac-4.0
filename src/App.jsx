import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkingPanel from "./pages/WorkingPanel";
import globalTheme from "./styles/globalTheme";
import Login from "./pages/Login";
import ScenarioSelection from "./pages/ScenarioSelection";

const App = () => {
	return (
		<ThemeProvider theme={globalTheme}>
			<ScenarioSelection />
		</ThemeProvider>
	);
};

export default App;
