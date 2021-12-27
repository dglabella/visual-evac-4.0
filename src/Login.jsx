import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { spacing } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary
}));

const LoginSection = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.grey[50]
}));

const Login = () => {
	const theme = useTheme();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
				<Grid item xs={4}>
					<LoginSection>
						<Typography variant="h6" mb={2}>
							Login
						</Typography>
						<div>
							<TextField
								id="standard-basic"
								label="User"
								variant="outlined"
								sx={{ mb: theme.spacing(2) }}
							/>
						</div>
						<div>
							<TextField
								id="standard-basic"
								label="Password"
								variant="outlined"
								type="password"
								sx={{ mb: theme.spacing(2) }}
							/>
						</div>
						<Box sx={{ display: "flex", justifyContent: "right" }}>
							<Button variant="outlined">Log</Button>
						</Box>
					</LoginSection>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Login;
