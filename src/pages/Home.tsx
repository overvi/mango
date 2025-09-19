import Navbar from "@/components/Navbar/Navbar";
import PlanCard from "@/components/Home/PlanCard";

const Home = () => {
  return (
    <div className="bg-primary text-base  min-h-screen  pb-6 min-w-[var(--breakpoint-desktop)]  ">
      <header>
        <Navbar />
      </header>
      <main>
        <ul className="grid pt-6 px-12  *:justify-self-center grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] justify-between  gap-4">
          {[...Array(12)].map((_, i) => (
            <PlanCard key={i} active={i == 2 || i == 5} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
