import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Activity01 from "../../activity-01/Activity01";
import Activity02 from "../../activity-02/Activity02";
import Activity03 from "../../activity-03/Activity03";
import Activity04 from "../../activity-04/Activity04";
import Activity05 from "../../activity-05/Activity05";
import Activity06 from "../../activity-06/Activity06";
import Activity07 from "../../activity-07/Activity07";
import Activity08 from "../../activity-08/Activity08";
import Activity09 from "../../activity-09/Activity09";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/activity_01" />} />
                <Route path="/activity_01" element={<Activity01 />} />
                <Route path="/activity_02" element={<Activity02 />} />
                <Route path="/activity_03" element={<Activity03 />} />
                <Route path="/activity_04" element={<Activity04 />} />
                <Route path="/activity_05" element={<Activity05 />} />
                <Route path="/activity_06" element={<Activity06 />} />
                <Route path="/activity_07" element={<Activity07 />} />
                <Route path="/activity_08" element={<Activity08 />} />
                <Route path="/activity_09" element={<Activity09 />} />
            </Routes>
        </Router>
    );
}
