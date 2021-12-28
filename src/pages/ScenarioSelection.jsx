import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useTheme from "@mui/material/styles/useTheme";

const ScenarioSelection = () => {
	const theme = useTheme();
	return (
		<Box>
			<Grid container spacing={theme.spacing(2)}>
				<Grid item xs={8}>
					<Box sx={{ border: "1px dashed grey" }}></Box>
				</Grid>
				<Grid item xs={4}>
					<Box sx={{ border: "1px dashed grey" }}></Box>
				</Grid>
				<Grid item xs={12}>
					<Box sx={{ border: "1px dashed grey" }}></Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ScenarioSelection;
