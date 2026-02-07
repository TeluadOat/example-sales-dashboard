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
import CustomLegend from "./customerSatisfaction/CustomLegend";

export default function CustomerSatisfaction({ data }) {
    const lastMonthTotal = data.reduce((sum, d) => sum + d.lastMonth, 0);
    const thisMonthTotal = data.reduce((sum, d) => sum + d.thisMonth, 0);
    const chartData = data.map((d) => ({
        ...d,
        band: Math.max(0, (d.thisMonth ?? 0) - (d.lastMonth ?? 0)),
    }));

    return (
        <div className="bg-white p-4 rounded shadow flex flex-col h-full min-h-[220px]"
        >
            <h3 className="font-semibold mb-2">Customer Satisfaction</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData}>
                        <XAxis dataKey="day" hide />
                        <YAxis hide />
                        <Tooltip />
                        <Legend
                            content={(props) => (
                                <CustomLegend
                                    {...props}
                                    totals={{ lastMonth: lastMonthTotal, thisMonth: thisMonthTotal }}
                                />
                            )}
                        />

                        {/*  Last month line */}
                        <Line
                            type="monotone"
                            dataKey="lastMonth"
                            stroke="#3b82f6"
                            strokeWidth={2.5}
                            dot={{ r: 4, fill: "#3b82f6" }}
                        />

                        {/* This month line */}
                        <Line
                            type="monotone"
                            dataKey="thisMonth"
                            stroke="#22c55e"
                            strokeWidth={2.5}
                            dot={{ r: 4, fill: "#22c55e" }}
                        />
                        {/* Blue shade to X-axis */}
                        <Area
                            type="monotone"
                            dataKey="lastMonth"
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