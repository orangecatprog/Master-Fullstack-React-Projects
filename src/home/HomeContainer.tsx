import './HomeContainer.css'

export default function HomeContainer() {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <ul className="home-list">
                <li><a className="home-link" href="/activity_01">Activity 01</a></li>
                <li><a className="home-link" href="/activity_02">Activity 02</a></li>
                <li><a className="home-link" href="/activity_03">Activity 03</a></li>
                <li><a className="home-link" href="/activity_04">Activity 04</a></li>
                <li><a className="home-link" href="/activity_05">Activity 05</a></li>
                <li><a className="home-link" href="/activity_06">Activity 06</a></li>
                <li><a className="home-link" href="/activity_07">Activity 07</a></li>
                <li><a className="home-link" href="/activity_08">Activity 08</a></li>
                <li><a className="home-link" href="/activity_09">Activity 09</a></li>
            </ul>
        </div>
    );
}
