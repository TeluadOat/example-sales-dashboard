import { useEffect, useState, useMemo } from "react";
import { getVolumeService } from "../../services/api";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import CustomLegend from "./CustomLegend";
import VolumeServiceSkeleton from "./VolumeServiceSkeleton";

export default function VolumeService() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getVolumeService()
            .then(setData)
            .catch(err => console.error('Error fetching Volume service data:', err))
            .finally(() => setLoading(false));
    }, []);

    const chartData = useMemo(() =>
        data.map(d => ({
            name: d.serviceName,
            volume: d.usageCount,
            service: d.successRate,
        }))
        , [data]);

    const { totalService, totalVolume } = useMemo(() => ({
        totalService: chartData.reduce((sum, d) => sum + d.service, 0),
        totalVolume: chartData.reduce((sum, d) => sum + d.volume, 0),
    }), [chartData]);

    if (loading) return (<VolumeServiceSkeleton />);

    return (
        <div
            className="bg-white p-4 rounded-xl shadow flex flex-col h-[340px] md:h-full"
        >
            <h3 className="font-semibold mb-2">Volume vs Service Level</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Legend
                            wrapperStyle={{ bottom: 0 }}
                            content={(props) => (
                                <CustomLegend
                                    {...props}
                                    totals={{ service: totalService, volume: totalVolume }}
                                />
                            )}
                        />
                        <Tooltip />

                        <Bar
                            dataKey="service"
                            barSize={25}
                            stackId="a"
                            fill="#22c55e"
                            radius={[0, 0, 6, 6]}
                        />

                        <Bar
                            dataKey="volume"
                            barSize={25}
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