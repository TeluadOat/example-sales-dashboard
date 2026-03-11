import SkeletonBlock from "../../skeletons/SkeletonBlock";

export default function TopProductsSkeletion() {
    const headerClass = "h-5 w-40 mb-2";
    const bodyClass = "h-3/5 w-full mb-1";
    return (
        <div className="bg-white p-4 rounded shadow flex flex-col">
            <SkeletonBlock className={headerClass} />
            <div className="flex-1">
                <SkeletonBlock className={bodyClass} />
            </div>
        </div>
    )
}