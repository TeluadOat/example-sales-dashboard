import { topProducts } from "../data/dashboard";
function hexToRgba(hex, alpha = 0.12) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function TopProducts() {
    return (
        <div className="bg-white p-4 rounded shadow flex flex-col"
            style={{ height: "clamp(220px, 28vh, 340px)" }}
        >
            <h3 className="font-semibold mb-3">Top Products</h3>
            <div className="flex-1">
                <table className="w-full test-sm">
                    <thead>
                        <tr className="text-left text-gray-400 border-b">
                            <th className="pb-2">#</th>
                            <th className="pb-2">Name</th>
                            <th className="pb-2 px-3">Popularity</th>
                            <th className="pb-2">Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topProducts.map((item, i) => {
                            const bg = hexToRgba(item.color);
                            return (
                                <tr key={item.name} className="border-b border-gray-300 last:border-none">
                                    <td className="py-3 pr-4">{i + 1}</td>
                                    <td className="py-3">{item.name}</td>
                                    <td className="py-3 px-3 w-2/5">
                                        <div
                                            className="h-2 rounded"
                                            style={{ backgroundColor: bg }}
                                        >
                                            <div
                                                className="h-2 rounded"
                                                style={{
                                                    width: `${item.popularity}%`,
                                                    backgroundColor: item.color,
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-3 pl-3">
                                        <span
                                            className="px-3 py-1 rounded text-xs font-medium border"
                                            style={{
                                                color: item.color,
                                                borderColor: item.color,
                                                backgroundColor: bg,
                                            }}
                                        >
                                            {item.sales}
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}