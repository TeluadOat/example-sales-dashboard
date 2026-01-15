export default function ({ title, value, change, bgColor, icon }) {
    return (
        <div className={`flex flex-col justify-between p-2 gap-2 rounded-lg ${bgColor}`}>
            <div className="text-3xl">{icon}</div>
            <div className="pl-1.5">
                <h2 className="text-xl font-bold">{value}</h2>
                <p className="text-gray-700">{title}</p>
                <p className="text-sm text-gray-500">{change}</p>
            </div>
        </div>
    )
}