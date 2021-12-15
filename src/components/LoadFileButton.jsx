import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const Div = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center"
}));

const LoadFileButton = (props) => {
	console.log("rendering: LoadFileButton");

	function getFile() {
		props.getFileCallBack(document.getElementById(props.id).files.item(0));
	}

	return (
		<Div>
			<Typography mr={2} variant="body1" color="initial">
				{props.fileName}
			</Typography>
			<Button
				variant="contained"
				component="label"
				color={props.buttonColor}
				startIcon={props.buttonIcon}
			>
				{props.children}
				<input
					type="file"
					accept={props.format}
					id={props.id}
					hidden
					onInput={getFile}
				/>
			</Button>
		</Div>
	);
};

export default LoadFileButton;
