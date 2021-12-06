import React from "react";
import Button from "@mui/material/Button";

function UploadButton(props) {
    function getFile() {
        props.getFileCallBack(document.getElementById(props.id).files.item(0));
    }

    return (
        <div>
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
            {props.fileName}
        </div>
    );
}

export default UploadButton;
