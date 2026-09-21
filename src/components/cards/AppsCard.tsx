import { TApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { IoMdStar } from "react-icons/io";
import AppCardSkeleton from "../loading/AppCardSkeleton";

type AppCardProps = {
  app: TApp;
};

const AppCard = ({ app }: AppCardProps) => {
  return (
    <Suspense fallback={<AppCardSkeleton />}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <div className="relative flex justify-center items-center overflow-hidden bg-gray-100">
          <Image
            src={app.image}
            alt={app.title}
            width={300}
            height={200}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold shadow-md backdrop-blur-sm">
            <IoMdStar size={15} className="fill-yellow-400 text-yellow-400" />
            {/* <span>{app.ratingAvg}</span> */}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Title + Company */}
          <div className="mb-3">
            <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
              {app.title}
            </h2>

            <p className="mt-1 text-sm font-medium text-gray-500">
              {app.companyName}
            </p>
          </div>

          {/* Description */}
          <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-600 ">
            {app.description}
          </p>

          {/* App Info */}
          <div className="mb-5 grid grid-cols-3 divide-x divide-gray-200 rounded-xl bg-gray-50 py-3 ">
            <div className="text-center">
              <p className="text-sm font-bold text-gray-900 ">
                {app.downloads}
              </p>
              <p className="mt-1 text-xs text-gray-500">Downloads</p>
            </div>

            <div className="text-center">
              <p className="text-sm font-bold text-gray-900 ">{app.reviews}</p>
              <p className="mt-1 text-xs text-gray-500">Reviews</p>
            </div>

            <div className="text-center">
              <p className="text-sm font-bold text-gray-900 ">{app.size} MB</p>
              <p className="mt-1 text-xs text-gray-500">Size</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500">Rating</p>

              <div className="mt-1 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IoMdStar
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(app.ratingAvg)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
            </div>
            <Link href={`/apps/${app.id}`}>
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-gray-700 active:scale-95"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AppCard;
