export default function CustomLegend({ payload = [], totals = {} }) {
    if (!Array.isArray(payload) || payload.length === 0) return null;

    // Filter out entries we don't want to show (e.g. 'band')
    const filtered = payload.filter((e) => e && e.dataKey !== "band");

    // Deduplicate by dataKey to avoid duplicate legend items (Area + Line same dataKey)
    const seen = new Set();
    const items = [];
    for (const e of filtered) {
        const key = e?.dataKey ?? e?.value;
        if (!key) continue;
        if (seen.has(key)) continue;
        seen.add(key);
        items.push(e);
    }

    if (items.length === 0) return null;

    return (
        <div className="flex justify-center gap-4 border-t pt-3 border-t-gray-200">
            {items.map((entry, index) => {
                const label = entry && entry.value ? (entry.value.charAt(0).toUpperCase() + entry.value.slice(1)) : '';
                const amount = totals && entry && entry.dataKey ? totals[entry.dataKey] : undefined;

                // Derive color from several possible fields Recharts might provide
                const color = entry?.color ?? entry?.stroke ?? entry?.fill ?? entry?.payload?.stroke ?? entry?.payload?.fill ?? entry?.payload?.color ?? '#9ca3af';

                return (
                    <div key={entry?.dataKey ?? entry?.value ?? index} className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <span
                                    className="inline-block w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                                <span className="text-sm text-gray-600">{label}</span>
                            </div>

                            <p className="font-semibold text-gray-800">
                                {amount !== undefined && amount !== null ? amount.toLocaleString() : '-'}
                            </p>
                        </div>

                        {index !== items.length - 1 && (
                            <span className="h-8 w-px bg-gray-200" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}