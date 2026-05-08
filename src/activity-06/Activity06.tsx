import { useEffect, useRef, useState } from "react";
import './Activity06.css'

export default function Activity06() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const startTimeRef = useRef<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (running) {
            startTimeRef.current = Date.now() - time;
            intervalRef.current = setInterval(() => {
                setTime(Date.now() - (startTimeRef.current ?? 0));
            }, 10);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [running]);

    const handleReset = () => {
        setRunning(false);
        setTime(0);
    };

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);
        return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
    };

    return (
        <div className="activity-card">
            <h1>Activity 06: Simple timer</h1>
            <h2 className="timer-display">{formatTime(time)}</h2>
            <div className="btn-row">
                <button className="btn-start" onClick={() => setRunning(true)}>Start</button>
                <button className="btn-stop" onClick={() => setRunning(false)}>Stop</button>
                <button className="btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
