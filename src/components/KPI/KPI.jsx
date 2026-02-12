import { useEffect, useState } from "react";
import KPIcard from "./KPIcard";
import { getKpis } from "../../services";
import { FaChartBar, FaCartArrowDown, FaChartLine, FaUserCircle } from "react-icons/fa";

export default function KPI() {
    const [kpis, setKpis] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const bgMap = {
        sales: "red",
        orders: "orange",
        products: "green",
        customers: "purple"
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
                                    className="flex items-center justify-center rounded-full opacity-80 ml-1 w-6 h-6 md:w-10 md:h-10"
                                    style={{ background: bgMap[kpi.category] }}
                                >
                                    <Icon className="w-4 h-4 md:w-6 md-h6 text-white" />
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