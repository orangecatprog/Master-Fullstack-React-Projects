import { useState } from "react";
import './Activity03.css'

export default function Activity03() {
    const [text, setText] = useState<string>("");
    const [list, setList] = useState<string[]>([]);

    return (
        <div className="activity-card">
            <h1>Activity 03: Dynamic list</h1>
            <div className="input-row">
                <input
                    className="input-field"
                    type="text"
                    onChange={(newText) => setText(newText.target.value)}
                />
                <button className="btn-add" onClick={() => setList([...list, text])}>Add</button>
            </div>

            <ul className="item-list">
                {list.map((item, index) => (
                    <li key={index} className="list-item">
                        <span>{item}</span>
                        <button className="btn-quit" onClick={() => setList(list.filter((_val, i) => i !== index))}>Quit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
