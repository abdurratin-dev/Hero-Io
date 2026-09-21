"use client";
import { AppContext } from "@/context/AppContext";
import { TApp } from "@/types/apps.type";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

interface InstallButtonProps {
  app: TApp;
}
const UnInstallButton = ({ app }: InstallButtonProps) => {
  const { install, setInstall } = useContext(AppContext);
  const handleUnInstallButton = () => {
    const unInstallApps = install.filter((item) => item.id !== app.id);
    setInstall(unInstallApps);
    toast.success(`${app.title} is Uninstalled`, {
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
  };
  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-emerald-600 active:scale-95"
        onClick={() => handleUnInstallButton()}
      >
        Uninstall
      </button>
    </div>
  );
};

export default UnInstallButton;
