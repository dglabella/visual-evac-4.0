import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import unslLogo from "./../assets/images/logo-unsl.png";
import uabLogo from "./../assets/images/logo-uab.png";
import fcfmynLogo from "./../assets/images/logo-fcfmyn.png";
import dirinfoLogo from "./../assets/images/logo-dirinfo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const card = (
	<React.Fragment>
		<CardContent>
			<Typography variant="h5" component="div" mb={3} color="primary">
				Want to develop your own model?
			</Typography>
			<Typography mb={1.5} color="text.secondary">
				Create your own model, read more for further information
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small">Read More</Button>
		</CardActions>
	</React.Fragment>
);

const Login = () => {
	const theme = useTheme();
	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Box sx={{ p: theme.spacing(2), height: 400 }}>
						<Typography variant="h1" mb={2} color="primary">
							Visual EVAC
						</Typography>
						<Typography variant="h4" mb={2}>
							Agent-based simulation
						</Typography>
						<Typography
							variant="body1"
							sx={{ color: theme.palette.text.secondary }}
						>
							This software is an agent-based simulation tool that combines
							concept of cellular automaton as an environment sheet and agents
							interacting upon it and between them. You can use defined models
							to create your own scenarios, saves them, execute them, analyze
							them and get statisticasl results of them.This software is a
							agent-based simulation tool that combines concept of cellular
							automaton as an environment sheet and agents interacting upon it
							and between them. You can use defined models to create your own
							scenarios, saves them, execute them, analyze them and get
							statisticals results.
						</Typography>
						<Button
							variant="outlined"
							endIcon={<ArrowForwardIosIcon />}
							sx={{ mt: theme.spacing(4) }}
						>
							About us
						</Button>
					</Box>
				</Grid>
				<Grid item xs={4} mb={theme.spacing(4)}>
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
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							width: 256,
							mt: theme.spacing(4)
						}}
					>
						<Card variant="outlined">{card}</Card>
					</Box>
				</Grid>
				<Grid item xs={12} mb={theme.spacing(2)}>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Card
							sx={{
								mr: theme.spacing(6),
								"&:hover": {
									backgroundColor: theme.palette.grey[300],
									opacity: [0.9, 0.8, 0.7]
								}
							}}
						>
							<CardMedia
								component="img"
								height="140"
								image={unslLogo}
								alt="unsl-logo"
							/>
						</Card>
						<Card
							sx={{
								mr: theme.spacing(6),
								"&:hover": {
									backgroundColor: theme.palette.grey[300],
									opacity: [0.9, 0.8, 0.7]
								}
							}}
						>
							<CardMedia
								component="img"
								height="140"
								image={uabLogo}
								alt="uab-logo"
							/>
						</Card>
						<Card
							sx={{
								maxWidth: 300,
								mr: theme.spacing(6),
								"&:hover": {
									backgroundColor: theme.palette.grey[300],
									opacity: [0.9, 0.8, 0.7]
								}
							}}
						>
							<CardMedia
								component="img"
								height="140"
								image={fcfmynLogo}
								alt="uab-logo"
							/>
						</Card>
						<Card
							sx={{
								"&:hover": {
									backgroundColor: theme.palette.grey[300],
									opacity: [0.9, 0.8, 0.7]
								}
							}}
						>
							<CardMedia
								component="img"
								height="140"
								image={dirinfoLogo}
								alt="uab-logo"
							/>
						</Card>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Login;
