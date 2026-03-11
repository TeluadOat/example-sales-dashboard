import SkeletonBlock from "../../skeletons/SkeletonBlock";

export default function VisistorInsightsSkeleton() {
    const headerClass = "h-5 w-40 mb-2";
    const bodyClass = "h-[250px] md:h-[300px] lg:h-full";

    return (
        <div className="bg-white p-4 rounded h-full flex flex-col shadow min-h-[320px]">
            <SkeletonBlock className={headerClass} />
            <SkeletonBlock className={bodyClass} />
        </div>
    )
}