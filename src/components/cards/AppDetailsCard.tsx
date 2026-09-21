import Image from "next/image";
import { TApp, TRating } from "@/types/apps.type";
import { FaDownload, FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import InstallButton from "@/components/AppButtons/InstallButton";
import { Suspense } from "react";
import AppDetailsSkeleton from "../loading/AppDetailsSkeleton";

interface AppDetailsCardProps {
  apps: TApp[];
  id: string;
}

const AppDetailsCard = ({ apps, id }: AppDetailsCardProps) => {
  const app = apps.find((app: TApp) => app.id === Number(id)) as TApp;
  const totalRatings = app.ratings.reduce(
    (total: number, item: TRating) => total + item.count,
    0,
  );

  return (
    <>
      <Suspense fallback={<AppDetailsSkeleton />}>
        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ">
          {/* App Header */}
          <section className="p-5 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* App Image */}
              <div className="h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm sm:h-40 sm:w-40">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={300}
                  height={300}
                />
              </div>

              {/* App Information */}
              <div className="flex flex-1 flex-col">
                <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl ">
                  {app.title}
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Developed by{" "}
                  <span className="font-medium text-blue-600">
                    {app.companyName}
                  </span>
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-200" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Downloads */}
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <FaDownload size={19} className="text-emerald-500" />

                      <span className="text-lg font-bold text-slate-900 ">
                        {app.downloads}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">Downloads</p>
                  </div>

                  {/* Rating */}
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <FaStar
                        size={19}
                        className="fill-orange-400 text-orange-400"
                      />

                      <span className="text-lg font-bold text-slate-900 ">
                        {app.ratingAvg}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">Average Rating</p>
                  </div>

                  {/* Reviews */}
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <FaMessage size={19} className="text-violet-500" />

                      <span className="text-lg font-bold text-slate-900">
                        {app.reviews}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500">Total Reviews</p>
                  </div>
                </div>

                {/* Install Button */}
                <InstallButton key={app.id} app={app} />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="mx-5 h-px bg-slate-200 sm:mx-8 " />

          {/* Ratings Section */}
          <section className="p-5 sm:p-8">
            <h2 className="mb-6 text-lg font-semibold text-slate-900 ">
              Ratings
            </h2>

            <div className="space-y-4">
              {app.ratings
                .slice()
                .sort((a: TRating, b: TRating) => {
                  const nameA = a.name.split(" ")[0];
                  const nameB = b.name.split(" ")[0];
                  return Number(nameB) - Number(nameA);
                })
                .map((item: TRating) => {
                  const percentage =
                    totalRatings > 0 ? (item.count / totalRatings) * 100 : 0;

                  return (
                    <div key={item.name} className="flex items-center gap-3">
                      {/* Rating Number */}
                      <span className="w-12 shrink-0 text-xs text-slate-500">
                        {item.name}
                      </span>

                      {/* Progress */}
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100 ">
                        <div
                          className="h-full rounded-full bg-orange-400 transition-all duration-500"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>

                      {/* Count */}
                      <span className="w-12 text-right text-xs text-slate-400">
                        {item.count}
                      </span>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* Divider */}
          <div className="mx-5 h-px bg-slate-200 sm:mx-8" />

          {/* Description */}
          <section className="p-5 sm:p-8">
            <h2 className="mb-5 text-lg font-semibold text-slate-900">
              Description
            </h2>
            <p className="text-gray-500">{app.description}</p>
          </section>
        </div>
      </Suspense>
    </>
  );
};

export default AppDetailsCard;
