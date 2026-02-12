import { useEffect, useState } from "react";
import KPIcard from "./KPIcard";
import { getKpis } from "../../services/api";
import { FaChartBar, FaCartArrowDown, FaChartLine, FaUserCircle } from "react-icons/fa";

export default function KPI() {
    const [kpis, setKpis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const bgMap = {
        sales: "bg-red-100",
        orders: "bg-orange-100",
        products: "bg-green-100",
        customers: "bg-purple-100",
    };

    const iconBgMap = {
        sales: "bg-red-500",
        orders: "bg-orange-500",
        products: "bg-green-500",
        customers: "bg-purple-500",
    };


    const iconMap = {
        sales: FaChartBar,
        orders: FaCartArrowDown,
        products: FaChartLine,
        customers: FaUserCircle,
    };

    useEffect(() => {
        getKpis()
            .then(data => setKpis(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading KPIs...</div>;
    if (error) return <div>Error loading KPIs</div>;

    return (
        <div className="flex flex-col justify-between gap-4 bg-white p-4 rounded shadow w-full lg:w-3/5">
            <div className="flex flex-col mb-2">
                <h3 className="font-semibold">Today's Sales</h3>
                <small className="text-gray-400">Sales Summary</small>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 gap-4">
                {kpis.map(kpi => {
                    const Icon = iconMap[kpi.category];
                    return (
                        <KPIcard
                            key={kpi.name}
                            icon={
                                <div
                                    className={`flex items-center justify-center rounded-full opacity-80 ml-1 w-6 h-6 md:w-10 md:h-10
                                    ${iconBgMap[kpi.category]}`}
                                >
                                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                                </div>}
                            bgColor={bgMap[kpi.category]}
                            {...kpi}
                        />
                    );
                })}
            </div>
        </div>
    );
}