import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function LineChartComponent({ data, lines }) {
    return (
        <ResponsiveContainer width="100%" height={250}>
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
    )
}