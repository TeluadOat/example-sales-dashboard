import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import KPIcard from "../components/KPIcard";
import { kpiData, visitorInsightsData, totalRevenueData, targetRealityData, volumeServiceData, customerSatisfactionData } from "../data/dashboard";
import LineChartComponent from "../components/LineChart";
import TotalRevenueChart from "../components/TotalRevenueChart";
import TopProducts from "../components/TopProducts";
import CustomerSatisfaction from "../components/CustomerSatisfaction";
import TargetReality from "../components/TargetReality";
import VolumeService from "../components/VolumeService";
import SalesMapping from "../components/SalesMapping";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar active="Dashboard" />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <div className="p-6 bg-gray-50 flex-1">
                    {/* ===== top row ===== */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        {/* KPI Cards */}
                        <div className="flex flex-col justify-between bg-white p-4 rounded shadow w-full lg:w-3/5">
                            <div className="flex flex-col mb-2">
                                <h3 className="font-semibold">Today's Sales</h3>
                                <small className="text-gray-400">Sales Summary</small>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 mb-6 gap-4">
                                {kpiData.map((kpi) =>
                                    <KPIcard key={kpi.title} {...kpi} />
                                )}
                            </div>
                        </div>
                        {/* chart */}
                        <div className="w-full lg:w-2/5">
                            <LineChartComponent data={visitorInsightsData} />
                        </div>
                    </div>
                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 mb-6">
                        <div className="grid grid-rows-2 gap-4">
                            <TotalRevenueChart data={totalRevenueData} />
                            <TopProducts />
                        </div>
                        <div className="grid grid-rows-2 gap-4 h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <CustomerSatisfaction data={customerSatisfactionData} />
                                <TargetReality data={targetRealityData} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <SalesMapping />
                                <VolumeService data={volumeServiceData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}