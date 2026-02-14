import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import KPI from "../components/KPI/KPI";
import { targetRealityData, volumeServiceData } from "../data/dashboard";
import LineChartComponent from "../components/LineChart";
import TotalRevenueChart from "../components/TotalRevenueChart";
import TopProducts from "../components/TopProducts";
import CustomerSatisfaction from "../components/customerSatisfaction/CustomerSatisfaction";
import TargetReality from "../components/TargetReality";
import VolumeService from "../components/volumeService/VolumeService";
import SalesMapping from "../components/SalesMapping";

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar active="Dashboard" isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col w-full overflow-x-hidden">
                <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
                <div className="p-3 mt-15 md:p-6 bg-gray-50 flex-1 overflow-x-auto">
                    {/* ===== top row ===== */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        {/* KPI Cards */}
                        <KPI />
                        {/* chart */}
                        <div className="w-full lg:w-2/5">
                            <LineChartComponent />
                        </div>
                    </div>
                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 mb-6">
                        <div className="grid grid-rows-2 gap-4">
                            <TotalRevenueChart />
                            <TopProducts />
                        </div>
                        <div className="grid grid-rows-2 gap-4 h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <CustomerSatisfaction />
                                <TargetReality data={targetRealityData} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <SalesMapping />
                                <VolumeService data={volumeServiceData} />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}