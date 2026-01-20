import {
    LineChart,
    Line,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function CustomerSatisfaction({ data }) {
    return (
        <div className="bg-white p-4 rounded shadow flex flex-col h-full"
        // style={{ height: "clamp(220px, 28vh, 340px)" }}
        >
            <h3 className="font-semibold mb-2">Customer Satisfaction</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="day" />
                        <YAxis hide />
                        <Tooltip />

                        {/* 🔵 Blue shade to X-axis */}
                        <Area
                            type="monotone"
                            dataKey="lastMonth"
                            stroke="none"
                            fill="rgba(59,130,246,0.25)"
                        />

                        {/* 🟢 Green shade BETWEEN lines */}
                        <Area
                            type="monotone"
                            dataKey="band"
                            baseValue={(x) => x.lastMonth}
                            stroke="none"
                            fill="#22c55e"
                        />

                        {/* 🔵 Last month line */}
                        <Line
                            type="monotone"
                            dataKey="lastMonth"
                            stroke="#3b82f6"
                            strokeWidth={2.5}
                            dot={{ r: 4 }}
                        />

                        {/* 🟢 This month line */}
                        <Line
                            type="monotone"
                            dataKey="thisMonth"
                            stroke="#22c55e"
                            strokeWidth={2.5}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}