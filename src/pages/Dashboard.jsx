import KPI from "../components/KPI/KPI";
import LineChartComponent from "../components/visitor-insights/LineChart";
import TotalRevenueChart from "../components/revenue/TotalRevenueChart";
import TopProducts from "../components/top-products/TopProducts";
import CustomerSatisfaction from "../components/customerSatisfaction/CustomerSatisfaction";
import TargetReality from "../components/target-reality/TargetReality";
import VolumeService from "../components/volumeService/VolumeService";
import SalesMapping from "../components/sales-maps/SalesMapping";
import DashBoardLayout from "../layouts/DashBoardLayout";

export default function Dashboard() {
    return (
        <DashBoardLayout>
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
                        <TargetReality />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        <SalesMapping />
                        <VolumeService />
                    </div>
                </div>
            </div>
        </DashBoardLayout>
    );
}