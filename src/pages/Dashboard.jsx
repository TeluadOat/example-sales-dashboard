import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar active="Dashboard" />
            <div className="flex-1">
                <Navbar />
            </div>
        </div>
    )
}