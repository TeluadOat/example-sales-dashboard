import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";


export default function LineChartComponent({ data, lines }) {
    lines =
        [
            { dataKey: "loyal", color: "#7c3aed" },
            { dataKey: "new", color: "#ef4444" },
            { dataKey: "unique", color: "#10b981" },
        ];
    return (


        <div className="bg-white p-4 rounded h-full flex flex-col shadow min-h-[320px]">
            <h3 className="font-bold mb-2">Visitor Insights</h3>
            <div className="h-[250px] md:h-[300px] lg:h-[100%]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {lines.map((line) => (
                            <Line key={line.keydata} type="monotone" dataKey={line.dataKey} stroke={line.color} dot={false} strokeWidth={2} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


