"use client";
import { AppContext } from "@/context/AppContext";
import { TApp } from "@/types/apps.type";
import Image from "next/image";
import React, { useContext } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import UnInstallButton from "../AppButtons/UnInstallButton";

interface UseInsInterface {
  install: TApp[];
}
const InstalledAppCard = () => {
  const { install }: UseInsInterface = useContext(AppContext);
  if (install.length === 0) {
    return (
      <div className="flex justify-center items-center sm:border-3 border-2 border-dashed border-gray-500 rounded-2xl h-120">
        <p className="text-xl font-bold text-gray-500">0 App Installed</p>
      </div>
    );
  }
  return (
    <div className={`grid gap-5 ${install.length <= 3 ? "h-120" : ""}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{`${install.length} Apps Installed`}</h3>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort ⋁
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7">
        {install.map((app: TApp, ind: number) => (
          <div
            key={ind}
            className="flex justify-between items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm h-30"
          >
            {/* App Image */}
            <div className="flex items-center sm:gap-5 gap-2">
              <div className="relative sm:h-20 sm:w-20 h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* App Information */}
              <div className="min-w-0 flex-1">
                <h2 className="truncate sm:ext-lg text-sm font-semibold text-slate-900">
                  {app.title}
                </h2>

                <div className="sm:mt-2 mt-1 flex items-center gap-4 text-sm">
                  {/* Downloads */}
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <FaDownload size={15} />
                    <span className="sm:font-medium">{app.downloads}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <FaStar size={15} className="fill-orange-500" />
                    <span className="sm:font-medium">{app.ratingAvg}</span>
                  </div>

                  {/* Size */}
                  <span className="text-gray-500">{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Uninstall Button */}
            <UnInstallButton app={app} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default InstalledAppCard;
