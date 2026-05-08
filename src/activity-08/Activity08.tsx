import { useState } from "react";
import './Activity08.css'

export default function Activity08() {
    const [text, setText] = useState<string>("Hello World!");

    return (
        <div className="activity-card">
            <h1>Activity 08: Word and character Counter</h1>
            <textarea
                className="counter-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="stats">
                <p className="stat-item">Characters: <span className="stat-num">{text.length}</span></p>
                <p className="stat-item">Words: <span className="stat-num">{text.split(" ").length}</span></p>
            </div>
        </div>
    );
}
