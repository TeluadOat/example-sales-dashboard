import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import KPIcard from "../components/KPIcard";
import { kpiData, visitorInsightsData } from "../data/dashboard";
import LineChartComponent from "../components/LineChart";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar active="Dashboard" />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-6 bg-gray-50 min-h-screen">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-6 bg-white">
                        {kpiData.map((kpi) =>
                            <KPIcard key={kpi.title} {...kpi} />
                        )}
                    </div>
                    {/* Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="font-bold mb-2">Visitor Insights</h3>
                            <LineChartComponent
                                data={visitorInsightsData}
                                lines={[
                                    { dataKey: "loyal", color: "#7c3aed" },
                                    { dataKey: "new", color: "#ef4444" },
                                    { dataKey: "unique", color: "#10b981" },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}