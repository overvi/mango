import { Outlet } from "react-router";

const LoginLayout = () => {
  return (
    <main className="min-w-[var(--breakpoint-desktop)]  min-h-[800px]  bg-base text-base">
      <div className="flex min-h-screen gap-8.5 items-center  *:basis-[43.5%] py-15 pe-15   justify-between ">
        <Outlet />
      </div>
    </main>
  );
};

export default LoginLayout;
