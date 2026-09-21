import InstalledAppCard from "@/components/cards/InstalledAppCard";

const InstalledAppPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 grid gap-12 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <h3 className="text-4xl font-bold text-center">Installed Apps</h3>
        <p className=" text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <InstalledAppCard />
    </div>
  );
};

export default InstalledAppPage;
