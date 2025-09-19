import Banner from "@/components/Login/Banner";
import Content from "@/components/NewPassword/Content";

const NewPassword = () => {
  return (
    <main className="min-w-[var(--breakpoint-desktop)] bg-base  text-base">
      <div className="flex min-h-screen gap-8.5 items-center py-15 pe-15 ps-4  justify-between *:basis-[43.5%]">
        <Banner />
        <Content />
      </div>
    </main>
  );
};

export default NewPassword;
