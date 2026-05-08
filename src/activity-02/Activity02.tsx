import { useState } from "react";
import './Activity02.css'

export default function Activity02() {
    const [count, setCount] = useState(0);

    return (
        <div className="activity-card">
            <h1>Activity 02: Click counter</h1>
            <p className="count-text">Count: {count}</p>
            <button className="btn-primary" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
