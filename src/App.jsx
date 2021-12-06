import { makeStyles } from "@mui/styles";
import GameOfLifeCell from "./components/GameOfLifeCell";
import UploadButton from "./components/UploadButton";
import FileUploader from "./components/FileUploader";

const rowsQuantity = 10;
const colsQuantity = 10;

const gridSquareSize = 10;

const cellularAutomataStyle = makeStyles({
    cellularAutomata: {
        display: "grid",
        gridTemplateColumns: `repeat(${colsQuantity},${gridSquareSize}px)`
    }
});

function App() {
    const cellularAutomataStyleClass = cellularAutomataStyle();

    let cellularAutomaton = [];
    for (let i = 0; i < rowsQuantity; i++) {
        cellularAutomaton[i] = [];
        for (let j = 0; j < colsQuantity; j++) {
            cellularAutomaton[i][j] = {
                isAlive: Math.random() < 0.5 //generate true or false randomlly
            };
        }
    }

    return (
        <div>
            <FileUploader />
            <UploadButton />
            <div className={cellularAutomataStyleClass.cellularAutomata}>
                {cellularAutomaton.map((row, i) =>
                    row.map((cellState, j) => (
                        <GameOfLifeCell
                            key={`(${i},${j})`}
                            cellState={cellState}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
