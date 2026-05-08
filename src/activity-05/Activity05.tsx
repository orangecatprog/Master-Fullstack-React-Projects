import { useState } from "react";
import './Activity05.css'

export default function Activity05() {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    return (
        <div className="activity-card">
            <h1>Activity 05: Simple calculator</h1>
            <div className="calc-row">
                <input className="input-field" type="number" placeholder="Number 1" onChange={(e) => setNum1(Number(e.target.value))} />
                <input className="input-field" type="number" placeholder="Number 2" onChange={(e) => setNum2(Number(e.target.value))} />
            </div>
            <div className="calc-row">
                <button className="btn-add" onClick={() => setResult(num1 + num2)}>Add</button>
                <button className="btn-sub" onClick={() => setResult(num1 - num2)}>Subtract</button>
                <button className="btn-mul" onClick={() => setResult(num1 * num2)}>Multiply</button>
                <button className="btn-div" onClick={() => setResult(num1 / num2)}>Divide</button>
            </div>
            <p className="result-text">Result: {result}</p>
        </div>
    );
}
