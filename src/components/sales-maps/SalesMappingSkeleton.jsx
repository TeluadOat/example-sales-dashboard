import SkeletonBlock from "../../skeletons/SkeletonBlock";

export default function SalesMappingSkeleton() {
    const headerClass = "h-5 w-40 mb-2"
    const bodyClass = "flex-1"
    return (
        <div className="bg-white p-4 rounded shadow flex flex-col h-full min-h-[220px]">
            <SkeletonBlock className={headerClass} />
            <SkeletonBlock className={bodyClass} />
        </div>
    )
}