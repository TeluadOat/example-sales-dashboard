import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import KPIcard from "../components/KPIcard";
import { kpiData } from "../data/dashboard";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar active="Dashboard" />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-6 bg-gray-50 min-h-screen">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {kpiData.map((kpi) =>
                            <KPIcard key={kpi.title} {...kpi} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}