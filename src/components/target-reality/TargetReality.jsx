import { useState, useEffect, useMemo } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { getTargetReality } from "../../services/api";
import { FaRegBell } from "react-icons/fa";
import TargetRealitySkeleton from "./TargetRealitySkeleton";

export default function TargetReality() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTargetReality()
            .then(setData)
            .catch(err => console.error("Error fetching Target Reality data:", err))
            .finally(() => setLoading(false));
    }, []);

    const chartData = useMemo(() =>
        data.map(d => ({
            ...d,
            month: new Date(d.periodStart).toLocaleString("default", { month: "short" }),
            actualSales: Number(d.actualSales),
            targetSales: Number(d.targetSales),
        })),
        [data]);

    const { realityTotal, targetTotal } = useMemo(() => ({
        realityTotal: chartData.reduce((a, b) => a + b.actualSales, 0),
        targetTotal: chartData.reduce((a, b) => a + b.targetSales, 0),
    }), [chartData]);


    if (loading || !chartData.length) return (<TargetRealitySkeleton />)

    return (
        <div className="bg-white p-4 rounded shadow flex flex-col">
            <h3 className="font-semibold mb-2">Target vs Reality</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} barGap={4}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip formatter={(value) => value.toLocaleString()} />

                        <Bar
                            name="Reality Sales"
                            dataKey="actualSales"
                            fill="#22c55e"
                            radius={[3, 3, 0, 0]}
                            isAnimationActive={false}
                        />

                        <Bar
                            name="Target Sales"
                            dataKey="targetSales"
                            fill="#facc15"
                            radius={[3, 3, 0, 0]}
                            isAnimationActive={false}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Legend */}
            <div className="ml-3 flex flex-col justify-between mt-3 text-sm">
                <div className="flex items-center gap-2 w-3/5">
                    <span className="inline-flex items-center justify-center p-2 bg-green-200 h-8 w-8">
                        <FaRegBell className="text-green-600" />
                    </span>
                    <div>
                        <p className="font-semibold">Reality Sales</p>
                        <small className="text-gray-400">Stat</small>
                    </div>
                    <p className="font-semibold text-green-600 text-lg flex-shrink-0 ml-auto">{realityTotal.toLocaleString()}</p>
                </div>

                <div className="flex items-center gap-2 w-3/5">
                    <span className="inline-flex items-center justify-center p-2 bg-yellow-200 h-8 w-8">
                        <FaRegBell className="text-yellow-600" />
                    </span>
                    <div>
                        <p className="font-semibold">Target Sales</p>
                        <small className="text-gray-400">Commerce</small>
                    </div>
                    <p className="font-semibold text-yellow-600 text-lg flex-shrink-0 ml-auto">{targetTotal.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}
