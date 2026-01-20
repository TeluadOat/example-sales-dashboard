import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function VolumeService({ data }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow flex flex-col">
            <h3 className="font-semibold mb-2">Volume vs Service Level</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis hide />
                        <Tooltip />

                        <Bar
                            dataKey="service"
                            stackId="a"
                            fill="#22c55e"
                            radius={[0, 0, 6, 6]}
                        />

                        <Bar
                            dataKey="volume"
                            stackId="a"
                            fill="#3b82f6"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}