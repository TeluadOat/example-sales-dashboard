export default function SalesMapping() {
    return (
        <div className="bg-white p-4 rounded-xl shadow flex flex-col">
            <h3 className="font-semibold mb-2">Sales Mapping by Country</h3>

            <div className="flex-1 flex items-center justify-center">
                <img
                    src="/images/map.jpg"
                    alt="map"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
}