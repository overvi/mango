import Code from "@/components/EnterRecovery/Code";
import Banner from "@/components/Login/Banner";

const EnterRecovery = () => {
  return (
    <main className="min-w-[var(--breakpoint-desktop)] bg-base text-base">
      <div className="flex min-h-screen gap-8.5 items-center py-15 pe-15 ps-4  justify-between *:basis-full ">
        <Banner />
        <Code />
      </div>
    </main>
  );
};

export default EnterRecovery;
