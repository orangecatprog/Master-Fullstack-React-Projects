import { useState } from "react";
import './Activity04.css'

const LIST = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
]

export default function Activity04() {
    const [search, setSearch] = useState<string>("");

    return (
        <div className="activity-card">
            <h1>Activity 04: Real-time search filter</h1>
            <input className="search-input" type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
            <ul className="filter-list">
                {LIST.filter((item) => item.toLowerCase().startsWith(search.toLowerCase())).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
