import React from "react";
import Button from "@mui/material/Button";

function UploadButton() {
    return (
        <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden />
        </Button>
    );
}

export default UploadButton;
