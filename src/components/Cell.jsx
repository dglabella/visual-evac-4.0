import styled from "@mui/material/styles/styled";

const NeutralCell = styled("div")(() => ({
    width: "10px",
    height: "10px",
    border: "1px solid black",
    backgroundColor: "white"
}));

export const Cell = () => {
    return <NeutralCell />;
};

export default Cell;
