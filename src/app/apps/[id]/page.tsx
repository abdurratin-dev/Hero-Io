import AppDetailsCard from "@/components/cards/AppDetailsCard";
import { getApps } from "@/lib/apps";

interface AppDetailsProps {
  params: Promise<{ id: string }>;
}

const AppDetailsPage = async ({ params }: AppDetailsProps) => {
  const { id } = await params;
  const apps = await getApps();
  return (
    <>
      <main className="min-h-screen max-w-6xl mx-auto py-8 flex flex-col justify-center items-center gap-5">
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Main Card */}
          <AppDetailsCard apps={apps} id={id} />
        </div>
      </main>
    </>
  );
};

export default AppDetailsPage;
