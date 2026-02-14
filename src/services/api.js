// src/services/api.ts
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getKpis = async () => {
    const res = await fetch(`${BASE_URL}/kpis`);
    return res.json();
};

export const getVisitorInsights = async () => {
    const res = await fetch(`${BASE_URL}/visitor-insights`);
    return res.json();
}

export const getSalesMap = async () => {
    const res = await fetch(`${BASE_URL}/sales-map`);
    return res.json();
};
export const getRevenue = async () => {
    const res = await fetch(`${BASE_URL}/revenues`);
    return res.json();
};

export const getCustomerSatisfactions = async () => {
    const res = await fetch(`${BASE_URL}/customer-satisfactions`);
    return res.json();
}