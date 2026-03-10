import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceDot } from "recharts";
import { getVisitorInsights } from "../../services/api";
import { useMemo } from "react";


export default function LineChartComponent() {
    const [data, setData] = useState([]);


    function getHighestOverall(data) {
        let best = {
            value: -Infinity,
            month: null,
            type: null,
        };

        for (let row of data) {
            const entries = [
                ["loyalVisitors", row.loyalVisitors],
                ["newVisitors", row.newVisitors],
                ["uniqueVisitors", row.uniqueVisitors],
            ];

            for (let [type, value] of entries) {
                if (value > best.value) {
                    best = {
                        value,
                        month: row.month,
                        type
                    }
                }
            }
        }

        return best;

    };

    const lines =
        [
            { dataKey: "loyalVisitors", color: "#7c3aed" },
            { dataKey: "newVisitors", color: "#ef4444" },
            { dataKey: "uniqueVisitors", color: "#10b981" },
        ];

    const formatLegendText = text => {
        return `${text.charAt(0).toUpperCase()}${text.slice(1)} Customers`
    };

    useEffect(() => {
        getVisitorInsights()
            .then(data => {
                setData(data);
            })
            .catch(err => console.error('Error fetching visitor insights:', err));
    }, []);

    const highestData = useMemo(() => {
        if (!data.length) return null;
        return getHighestOverall(data);
    })

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
                            <Line key={line.dataKey} type="monotone" dataKey={line.dataKey} stroke={line.color} dot={false} strokeWidth={2} />
                        ))}
                        <ReferenceLine x={highestData?.month} stroke="rgba(150, 40, 10, 0.3)" />
                        <ReferenceDot x={highestData?.month} y={highestData?.value} r={5} fill="red" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}


