import './Activity01.css'

export default function Activity01() {
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeBackgroundColor = () => {
        const color = generateRandomColor();
        document.body.style.backgroundColor = color;
    };

    return (
        <div className="activity-card">
            <h1>Activity 01: Background color changer</h1>
            <button className="btn-primary" onClick={changeBackgroundColor}>
                Change Background Color
            </button>
        </div>
    );
}
