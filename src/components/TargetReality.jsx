import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function TargetReality({ data }) {
    const realityTotal = data.reduce((a, b) => a + b.reality, 0);
    const targetTotal = data.reduce((a, b) => a + b.target, 0);

    return (
        <div className="bg-white p-4 rounded shadow flex flex-col">
            <h3 className="font-semibold mb-2">Target vs Reality</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barGap={4}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip />

                        <Bar
                            dataKey="reality"
                            fill="#22c55e"
                            radius={[3, 3, 0, 0]}
                        />

                        <Bar
                            dataKey="target"
                            fill="#facc15"
                            radius={[3, 3, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* ✅ Custom Legend */}
            <div className="flex flex-col justify-between mt-3 text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                    <div>
                        <p className="text-gray-500">Reality Sales</p>
                        <p className="font-semibold">{realityTotal.toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div>
                        <p className="text-gray-500">Target Sales</p>
                        <p className="font-semibold">{targetTotal.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
