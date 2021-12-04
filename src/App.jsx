import "./styles/App.css";
import Cell from "./components/Cell";

function App() {
    const rowsQuantity = 10;
    const colsQuantity = 10;

    let cellularAutomaton = [];

    for (let i = 0; i < rowsQuantity; i++) {
        cellularAutomaton[i] = [];
        for (let j = 0; j < colsQuantity; j++) {
            cellularAutomaton[i][j] = {
                isAlive: Math.random() < 0.5 //generate true or false randomlly
            };
        }
    }

    console.log(cellularAutomaton);
    // console.log([
    //     { isAlive: true },
    //     { isAlive: true },
    //     { isAlive: false },
    //     { isAlive: true }
    // ]);

    const list = [
        {
            isAlive: Math.random() < 0.5
        },
        {
            isAlive: Math.random() < 0.5
        },
        {
            isAlive: Math.random() < 0.5
        },
        {
            isAlive: Math.random() < 0.5
        },
        {
            isAlive: Math.random() < 0.5
        }
    ];

    return (
        <div>
            {list.map((cellState, i) => (
                <Cell key={i} cellState={cellState} />
            ))}
        </div>
    );
}

export default App;
