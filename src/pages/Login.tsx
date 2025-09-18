import Banner from "@/components/Login/Banner";
import Welcome from "@/components/Login/Welcome";

const Login = () => {
  return (
    <main className="min-w-[var(--breakpoint-desktop)] min-h-[800px] bg-base text-base">
      <div className="flex min-h-screen gap-8.5 items-center py-15 pe-15 ps-4  justify-between *:basis-full ">
        <Banner />
        <Welcome />
      </div>
    </main>
  );
};

export default Login;
