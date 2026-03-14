import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { getSalesMap } from '../../services/api';
import worldData from '../../data/world.json';
import 'leaflet/dist/leaflet.css';
import SalesMappingSkeleton from './SalesMappingSkeleton';

function FitBoundsAndLock() {

    const map = useMap();

    useEffect(() => {
        // Create a layer from your GeoJSON
        const geoLayer = L.geoJSON(worldData);
        // Fit map to the bounds of the GeoJSON
        map.fitBounds(geoLayer.getBounds());
        // Restrict panning
        map.setMaxBounds(geoLayer.getBounds());
        // Prevent zooming out beyond initial fit
        map.setMinZoom(map.getZoom());
    }, [map]);

    return null;
}

export default function SalesMapping() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSalesMap()
            .then(setData)
            .catch(err => console.error("Error loading sales map data:", err))
            .finally(() => setLoading(false));
    });


    const getColor = (countryName) => {
        const sales = data.find((d) => d.country === countryName)?.totalSales || 0;
        if (sales > 300000) return '#10b981'; // Green for high scores
        if (sales > 100000) return '#f59e0b'; // Yellow for medium scores
        return '#ef4444'; // Red for low scores
    };

    const style = (feature) => ({
        fillColor: getColor(feature.properties.name),
        weight: 1,
        color: "#fff",
        fillOpacity: 0.7,
    });

    if (loading) return (<SalesMappingSkeleton />)

    return (
        <div className="bg-white p-4 rounded-xl shadow relative z-0 h-full w-full">
            <h3 className="font-semibold mb-2">Sales Mapping by Country</h3>

            <div>
                <MapContainer
                    // style={{ height: '400px', minHeight: "100%", width: '100%' }}
                    style={{ height: '100%', width: '100%', minHeight: '400px', minWidth: '100%' }}
                    zoom={2}
                    center={[0, 0]}
                    scrollWheelZoom={true}
                    worldCopyJump={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        noWrap={true}
                    />
                    <GeoJSON data={worldData} style={style} />
                    <FitBoundsAndLock />
                </MapContainer>
            </div>
        </div >
    );
}