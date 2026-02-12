export default function KPIcard({ description, value, unit, growthRate, icon, bgColor }) {
    const isPositive = growthRate >= 0;
    return (
        <div className={`flex flex-col justify-between p-4 gap-2 rounded-lg ${bgColor}`}>
            <div className="text-3xl">{icon}</div>
            <div className="pl-1.5">
                <h2 className="text-xl font-bold">{unit}{value}</h2>
                <p className="text-gray-700">{description}</p>
                <p className={`text-sm ${isPositive ? "text-green-600" : "text-red-600"}`}>
                    {isPositive ? "+" : "-"} {growthRate}%
                </p>
            </div>
        </div>
    )
}