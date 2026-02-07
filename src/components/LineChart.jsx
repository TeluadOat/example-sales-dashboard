import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceDot } from "recharts";


export default function LineChartComponent({ data, lines }) {
    lines =
        [
            { dataKey: "loyal", color: "#7c3aed" },
            { dataKey: "new", color: "#ef4444" },
            { dataKey: "unique", color: "#10b981" },
        ];

    const formatLegendText = text => {
        return `${text.charAt(0).toUpperCase()}${text.slice(1)} Customers`
    };

    return (
        <div className="bg-white p-4 rounded h-full flex flex-col shadow min-h-[320px]">
            <h3 className="font-semibold mb-2">Visitor Insights</h3>
            <div className="h-[250px] md:h-[300px] lg:h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 6, right: 0, left: 0, bottom: 20 }}>
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} dx={-10} />
                        <Tooltip />
                        <Legend
                            iconType="square"
                            iconSize={7}
                            formatter={(value) => formatLegendText(value)}
                            wrapperStyle={{ left: "50%", transform: "translate(-45% , 25%)" }}
                        />
                        {lines.map((line) => (
                            <Line key={line.keydata} type="monotone" dataKey={line.dataKey} stroke={line.color} dot={false} strokeWidth={2} />
                        ))}
                        <ReferenceLine x="Jul" stroke="rgba(150, 40, 10, 0.3)" />
                        <ReferenceDot x="Jul" y={380} r={5} fill="red" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


