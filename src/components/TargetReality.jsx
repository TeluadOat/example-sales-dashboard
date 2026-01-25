import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { FaRegBell } from "react-icons/fa";

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
