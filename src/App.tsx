import "./App.css";
import AppRouter from "./shared/router/Router";

function App() {
    const calculate = (count: number) => {
        const disallow = (num: number) => {
            if (num < 1) return 9;
            if (num > 9) return 1;
            return num;
        }
        return window.location.pathname.replace(
            /\/activity_(\d{2})/,
            (_, num) =>
                "/activity_" + disallow(Number(num) + count).toString().padStart(2, "0"),
        );
    };

    return (
        <div className="app-container">
            <nav className="app-nav">
                <a className="app-link" href={calculate(-1)}>
                    &larr; Previous Activity
                </a>
                
                <a className="app-link" href={calculate(1)}>
                    Next Activity &rarr;
                </a>
            </nav>
            <AppRouter />
        </div>
    );
}

export default App;
