import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

export default function TotalRevenueChart({ data }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Total Revenue</h3>
                <span className="text-sm text-gray-400">Last 7 days</span>
            </div>

            <ResponsiveContainer width="100%" height={260}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="online"
                        fill="#6366F1"
                        radius={[2, 2, 0, 0]}
                    />
                    <Bar
                        dataKey="offline"
                        fill="#22655e"
                        radius={[2, 2, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div >
    )

}