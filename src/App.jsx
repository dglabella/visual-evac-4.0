import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import WorkingPanel from "./pages/WorkingPanel";
import globalTheme from "./styles/globalTheme";
import Login from "./pages/Login";
import ScenarioSelection from "./pages/ScenarioSelection";
import Test from "./pages/Test";

const App = () => {
	return (
		<ThemeProvider theme={globalTheme}>
			<Test />
		</ThemeProvider>
	);
};

export default App;
