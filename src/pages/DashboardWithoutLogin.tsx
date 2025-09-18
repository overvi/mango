import Guide from "@/components/DashboardWithoutLogin/Guide";
import Banner from "@/components/Login/Banner";

const DashboardWithoutLogin = () => {
  return (
    <main className="min-w-[var(--breakpoint-desktop)] bg-base text-base">
      <div className="flex min-h-screen gap-8.5 items-center py-15 pe-15 ps-4  justify-between *:basis-full ">
        <Banner />
        <Guide />
      </div>
    </main>
  );
};

export default DashboardWithoutLogin;
