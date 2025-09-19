import Guide from "@/components/DashboardWithoutLogin/Guide";
import Banner from "@/components/Login/Banner";

const DashboardWithoutLogin = () => {
  return (
    <main className="min-w-[var(--breakpoint-desktop)]  bg-base text-base">
      <div className="flex min-h-screen gap-8.5 items-center *:basis-[43.5%] py-15 pe-15 ps-4  justify-between ">
        <Banner />
        <Guide />
      </div>
    </main>
  );
};

export default DashboardWithoutLogin;
