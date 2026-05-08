import { useState } from "react";
import './Activity07.css'

export default function Activity07() {
    const [password, setPassword] = useState<string>("");
    const [err, setErr] = useState<string>("");
    const [length, setLength] = useState<number>(8);

    const generatePassword = () => {
        setErr("");
        if (length < 4) {
            setErr("Length must be at least 4");
            return;
        }
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setPassword(result);
    };

    return (
        <div className="activity-card">
            <h1>Activity 07: Random password generator</h1>
            <div className="input-row">
                <input
                    className="input-field"
                    type="number"
                    placeholder="Length"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                />
                <button className="btn-gen" onClick={() => generatePassword()}>
                    Generate
                </button>
            </div>
            {err && <div className="alert-error">{err}</div>}
            {password && <p className="password-result">{password}</p>}
        </div>
    );
}
