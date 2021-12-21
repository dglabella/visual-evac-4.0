import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const Div = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center"
}));

const LoadFileButton = (props) => {
    const hiddenFileInput = React.useRef(null);

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        props.getFileCallBack(fileUploaded);
    };

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
                <input
                    type="file"
                    ref={hiddenFileInput}
                    accept={props.format}
                    onChange={handleChange}
                    hidden
                />
                {props.children}
            </Button>
        </Div>
    );
};

export default LoadFileButton;
