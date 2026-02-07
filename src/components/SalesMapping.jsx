import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { salesData } from '../data/dashboard';
import worldData from '../data/world.json.json';
import 'leaflet/dist/leaflet.css';


export default function SalesMapping() {

    const getColor = (countryName) => {
        const sales = salesData.find((d) => d.country === countryName)?.totalSales || 0;
        if (sales > 300000) return '#10b981'; // Green for high scores
        if (sales > 100000) return '#f59e0b'; // Yellow for medium scores
        return '#ef4444'; // Red for low scores
    };

    const style = (feature) => ({
        fillColor: getColor(feature.properties.name),
        weight: 1,
        color: "fff",
        fillOpacity: 0.7,
    });

    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Sales Mapping by Country</h3>
            <MapContainer
                style={{ height: '400px', width: '100%' }}
                zoom={2}
                center={[50, 0]}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <GeoJSON data={worldData} style={style} />
            </MapContainer>
        </div>
    );
}