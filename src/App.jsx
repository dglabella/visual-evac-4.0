import Cell from "./components/Cell";
import { makeStyles } from "@mui/styles";

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

    //console.log(cellularAutomaton);
    // console.log([
    //     { isAlive: true },
    //     { isAlive: true },
    //     { isAlive: false },
    //     { isAlive: true }
    // ]);

    // const list = [
    //     {
    //         isAlive: true
    //     },
    //     {
    //         isAlive: false
    //     },
    //     {
    //         isAlive: true
    //     },
    //     {
    //         isAlive: false
    //     },
    //     {
    //         isAlive: true
    //     }
    // ];

    // return (
    //     <div>
    //         {list.map((cellState, i) => (
    //             <Cell key={i} cellState={cellState} />
    //         ))}
    //     </div>
    // );
    return (
        <div className={cellularAutomataStyleClass.cellularAutomata}>
            {cellularAutomaton.map((row, i) =>
                row.map((cellState, j) => (
                    <Cell key={`(${i},${j})`} cellState={cellState} />
                ))
            )}
        </div>
    );
}

export default App;
