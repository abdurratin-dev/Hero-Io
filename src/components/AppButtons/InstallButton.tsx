"use client";
import { AppContext } from "@/context/AppContext";
import { TApp } from "@/types/apps.type";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface InstallButtonProps {
  app: TApp;
}
const InstallButton = ({ app }: InstallButtonProps) => {
  const { install, setInstall } = useContext(AppContext);
  const handleInstallButton = () => {
    if (install.some((item) => item.id === app.id)) {
      toast.warning(`${app.title} is Already installed`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setInstall([...install, app]);
      toast.success(`${app.title} is Installing...`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="mt-5">
      <button
        type="button"
        className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 active:scale-95"
        onClick={() => handleInstallButton()}
      >
        Install Now ({app.size} MB)
      </button>
    </div>
  );
};

export default InstallButton;
