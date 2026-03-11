import SkeletonBlock from "../../skeletons/SkeletonBlock";

export default function TotalRevenueSkeleton() {
    const headerClass = "h-5 w-40 mb-2"
    return (
        <div className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <SkeletonBlock className={headerClass} />
                <SkeletonBlock className={headerClass} />
            </div>
            <SkeletonBlock className="flex-1" />
        </div>
    )
}
