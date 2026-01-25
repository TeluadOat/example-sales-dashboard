export default function CustomLegend({ payload, totals }) {
    return (
        <div className="flex justify-center gap-4 border-t border-t-gray-100 pt-2 mb-2">
            {payload.map((entry, index) => (
                <div key={entry.value} className="flex items-center gap-4">
                    <div className="text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <span
                                className="inline-block w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-sm text-gray-600">{entry.value.charAt(0).toUpperCase() + entry.value.slice(1)}</span>
                        </div>

                        <p className="font-semibold text-gray-800">
                            {totals[entry.dataKey].toLocaleString()}
                        </p>
                    </div>

                    {index !== payload.length - 1 && (
                        <span className="h-8 w-px bg-gray-200" />
                    )}
                </div>
            ))}
        </div>
    );
}
