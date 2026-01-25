import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import CustomLegend from "./volumeService/CustomLegend";

export default function VolumeService({ data }) {
    const totalService = data.reduce((sum, d) => sum + d.service, 0);
    const totalVolume = data.reduce((sum, d) => sum + d.volume, 0);
    return (
        <div
            className="bg-white p-4 rounded-xl shadow flex flex-col h-[340px] md:h-full"
        >
            <h3 className="font-semibold mb-2">Volume vs Service Level</h3>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
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