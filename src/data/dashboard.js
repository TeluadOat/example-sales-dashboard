// using this as a temporary data for the dashboard

export const kpiData = [
    { title: "Total Sales", value: "$1k", change: "+8%", bgColor: "bg-red-100", icon: "💰" },
    { title: "Total Orders", value: "300", change: "+5%", bgColor: "bg-yellow-100", icon: "🛒" },
    { title: "Product Sold", value: "5", change: "+12%", bgColor: "bg-green-100", icon: "✅" },
    { title: "New Customers", value: "8", change: "0.5%", bgColor: "bg-purple-100", icon: "👤" },
];

export const topProducts = [
    { name: "Home Decor Range", popularity: 78, sales: "45%", color: "#6366f1" },
    { name: "Disney Princess Dress", popularity: 62, sales: "29%", color: "#22c55e" },
    { name: "Bathroom Essentials", popularity: 51, sales: "18%", color: "#f97316" },
    { name: "Apple Smartwatch", popularity: 85, sales: "61%", color: "#ef4444" },
];


export const visitorInsightsData = [
    { month: "Jan", loyal: 200, new: 250, unique: 220 },
    { month: "Feb", loyal: 210, new: 230, unique: 200 },
    { month: "Mar", loyal: 180, new: 240, unique: 210 },
    { month: "Apr", loyal: 250, new: 280, unique: 260 },
    { month: "May", loyal: 300, new: 320, unique: 290 },
    { month: "Jun", loyal: 270, new: 350, unique: 300 },
    { month: "Jul", loyal: 320, new: 380, unique: 340 },
    { month: "Aug", loyal: 310, new: 360, unique: 330 },
    { month: "Sep", loyal: 280, new: 340, unique: 310 },
    { month: "Oct", loyal: 300, new: 330, unique: 320 },
    { month: "Nov", loyal: 290, new: 320, unique: 310 },
    { month: "Dec", loyal: 270, new: 300, unique: 290 },
];

export const totalRevenueData = [
    { name: "Mon", online: 1200, offline: 800 },
    { name: "Tue", online: 2100, offline: 1400 },
    { name: "Wed", online: 800, offline: 600 },
    { name: "Thu", online: 1600, offline: 1100 },
    { name: "Fri", online: 2400, offline: 1800 },
    { name: "Sat", online: 1800, offline: 1300 },
    { name: "Sun", online: 2200, offline: 1600 },
];

export const customerSatisfactionData = [
    { day: "Mon", thisMonth: 82, lastMonth: 40 },
    { day: "Tue", thisMonth: 70, lastMonth: 50 },
    { day: "Wed", thisMonth: 79, lastMonth: 25 },
    { day: "Thu", thisMonth: 65, lastMonth: 26 },
    { day: "Fri", thisMonth: 75, lastMonth: 28 },
    { day: "Sat", thisMonth: 55, lastMonth: 35 },
    { day: "Sun", thisMonth: 88, lastMonth: 50 },
].map(d => ({
    ...d,
    // `band` is the positive difference between thisMonth and lastMonth.
    // Use `null` when `lastMonth` is missing so the Area won't render there.
    band: typeof d.lastMonth === "number" ? Math.max(d.thisMonth - d.lastMonth, 0) : null,
}));

export const targetRealityData = [
    { name: "Jan", reality: 60, target: 80 },
    { name: "Feb", reality: 55, target: 75 },
    { name: "Mar", reality: 50, target: 70 },
    { name: "Apr", reality: 65, target: 75 },
    { name: "May", reality: 70, target: 85 },
    { name: "Jun", reality: 75, target: 90 },
    { name: "Jul", reality: 80, target: 95 },
];

export const volumeServiceData = [
    { name: "Mon", volume: 60, service: 40 },
    { name: "Tue", volume: 75, service: 55 },
    { name: "Wed", volume: 65, service: 35 },
    { name: "Thu", volume: 55, service: 45 },
    { name: "Fri", volume: 50, service: 40 },
    { name: "Sat", volume: 45, service: 35 },
];
