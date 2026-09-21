const AppDetailsSkeleton = () => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm animate-pulse">
      {/* Top Section */}
      <div className="flex gap-5">
        {/* App Image */}
        <div className="h-32 w-32 shrink-0 rounded-xl bg-gray-200"></div>

        {/* App Info */}
        <div className="flex-1">
          {/* Title */}
          <div className="h-6 w-72 rounded bg-gray-200"></div>

          {/* Developer */}
          <div className="mt-2 h-4 w-32 rounded bg-gray-200"></div>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-gray-200"></div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="h-5 w-20 rounded bg-gray-200"></div>
              <div className="mt-2 h-3 w-16 rounded bg-gray-200"></div>
            </div>

            <div>
              <div className="h-5 w-16 rounded bg-gray-200"></div>
              <div className="mt-2 h-3 w-24 rounded bg-gray-200"></div>
            </div>

            <div>
              <div className="h-5 w-20 rounded bg-gray-200"></div>
              <div className="mt-2 h-3 w-20 rounded bg-gray-200"></div>
            </div>
          </div>

          {/* Install Button */}
          <div className="mt-4 h-8 w-32 rounded-md bg-gray-200"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-gray-200"></div>

      {/* Ratings */}
      <div>
        <div className="h-5 w-20 rounded bg-gray-200"></div>

        <div className="mt-5 space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center gap-4">
              {/* Star text */}
              <div className="h-3 w-8 rounded bg-gray-200"></div>

              {/* Progress bar */}
              <div className="h-2 flex-1 rounded-full bg-gray-200"></div>

              {/* Number */}
              <div className="h-3 w-16 rounded bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px w-full bg-gray-200"></div>

      {/* Description */}
      <div>
        <div className="h-5 w-28 rounded bg-gray-200"></div>

        <div className="mt-5 space-y-3">
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-11/12 rounded bg-gray-200"></div>
          <div className="h-3 w-4/5 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsSkeleton;
