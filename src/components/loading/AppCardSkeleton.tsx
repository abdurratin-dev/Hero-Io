const AppCardSkeleton = () => {
  return (
    <div className="w-full max-w-130 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
      {/* Image Skeleton */}
      <div className="h-83.75 bg-gray-200 animate-pulse">
        <div className="flex h-full items-center justify-center">
          <div className="h-52 w-52 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse"></div>

        {/* Company */}
        <div className="mt-3 h-4 w-28 rounded bg-gray-200 animate-pulse"></div>

        {/* Description */}
        <div className="mt-6 space-y-3">
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-full rounded bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-4/5 rounded bg-gray-200 animate-pulse"></div>
        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-between rounded-xl bg-gray-100 p-5">
          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="h-5 w-16 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-4 w-20 rounded bg-gray-200 animate-pulse"></div>
          </div>

          <div className="border-l border-gray-300"></div>

          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="h-5 w-16 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-4 w-20 rounded bg-gray-200 animate-pulse"></div>
          </div>

          <div className="border-l border-gray-300"></div>

          <div className="flex flex-1 flex-col items-center gap-2">
            <div className="h-5 w-16 rounded bg-gray-300 animate-pulse"></div>
            <div className="h-4 w-16 rounded bg-gray-200 animate-pulse"></div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex items-end justify-between">
          {/* Rating */}
          <div>
            <div className="h-4 w-14 rounded bg-gray-200 animate-pulse"></div>

            <div className="mt-2 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="h-4 w-4 rounded-full bg-gray-300 animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="h-11 w-32 rounded-xl bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AppCardSkeleton;
