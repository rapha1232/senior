"use client";
import MapsRightSidebarContent from "@/components/Global/MapsRightSidebarContent";
import OngoingEmergencies from "@/components/Global/OngoingEmergencies";
import { ClientMap } from "@/components/dynamicExport";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { usePathname } from "next/navigation";

const RightSideBar = () => {
  const ongoingEmergencies = useQuery(api.broadcasts.getOngoingEmergencies);
  const pathName = usePathname();
  if (pathName.includes("/maps")) return <MapsRightSidebarContent />;
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="h-1/2">
        <h3 className="h3-bold text-dark200_light900 mb-2">Map</h3>
        <div className="flex size-full flex-col gap-[30px]">
          <ClientMap full markerData={ongoingEmergencies ?? undefined} />
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Ongoing Emergencies</h3>
        <OngoingEmergencies />
      </div>
    </section>
  );
};

export default RightSideBar;
