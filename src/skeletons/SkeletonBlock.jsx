export default function SkeletonBlock({ className, count = 1 }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className={`bg-gray-100 animate-pulse rounded ${className}`}
                />
            ))}
        </>
    );
}