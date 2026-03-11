import { useEffect, useState } from "react";
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { getCustomerSatisfactions } from "../../services/api";
import CustomLegend from "./CustomLegend";
import CustomerSatisfactionSkeleton from "./customerSatisfactionSkeleton";

export default function CustomerSatisfaction() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomerSatisfactions()
            .then(setData)
            .catch(err => console.error('Error fetching cutomer satisafaction data', err))
            .finally(() => setLoading(false))
    }, []);

    const workedData = data.map(d => {
        const prev = d.previousMonthAverage ?? 0;
        const curr = d.currentMonthAverage ?? 0;

        return {
            ...d,
            date: new Date(d.date).toLocaleDateString("en-US", { weekday: "short" }),
            band: Math.max(curr - prev, 0)
        };
    });

    const previousMonthTotal = workedData.reduce((sum, d) => sum + d.previousMonthAverage ?? 0, 0);
    const currentMonthTotal = workedData.reduce((sum, d) => sum + d.currentMonthAverage ?? 0, 0);

    if (loading) return (<CustomerSatisfactionSkeleton />);

    return (
        <div className="bg-white p-4 rounded shadow flex flex-col h-full min-h-[220px]"
        >
            <h3 className="font-semibold mb-2">Customer Satisfaction</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={workedData}>
                        <XAxis dataKey="date" hide />
                        <YAxis hide />
                        <Tooltip />
                        <Legend
                            content={(props) => (
                                <CustomLegend
                                    {...props}
                                    totals={{ previousMonthAverage: previousMonthTotal, currentMonthAverage: currentMonthTotal }}
                                />
                            )}
                        />

                        {/*  Last month line */}
                        <Line
                            name="Last Month"
                            type="monotone"
                            dataKey="previousMonthAverage"
                            stroke="#3b82f6"
                            strokeWidth={2.5}
                            dot={{ r: 4, fill: "#3b82f6" }}
                        />

                        {/* This month line */}
                        <Line
                            name="This Month"
                            type="monotone"
                            dataKey="currentMonthAverage"
                            stroke="#22c55e"
                            strokeWidth={2.5}
                            dot={{ r: 4, fill: "#22c55e" }}
                        />
                        {/* Blue shade to X-axis */}
                        <Area
                            type="monotone"
                            dataKey="previousMonthAverage"
                            stroke="none"
                            fill="rgba(59,130,246,0.25)"
                            stackId="1"
                        />

                        {/* Green shade BETWEEN lines (stacked on top of lastMonth) */}
                        <Area
                            type="monotone"
                            dataKey="band"
                            stroke="none"
                            fill="rgba(34,197,94,0.25)"
                            stackId="1"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>)
};