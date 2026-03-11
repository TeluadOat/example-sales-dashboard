// components/KPI/KPISkeleton.jsx
import SkeletonBlock from "../../skeletons/SkeletonBlock";

export default function KPISkeleton() {
    const headerClass = "h-5 w-40 mb-2"; // height and width of the header
    const subHeaderClass = "h-3 w-24 mb-4"; // height and width of small text
    const cardClass = "w-full"; // match your KPIcard height

    return (
        <div className="flex flex-col justify-between gap-4 bg-white p-4 rounded shadow w-full lg:w-3/5">
            {/* Header */}
            <div>
                <SkeletonBlock className={headerClass} />
                <SkeletonBlock className={subHeaderClass} />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                <SkeletonBlock className={cardClass} count={4} />
            </div>
        </div>
    );
}