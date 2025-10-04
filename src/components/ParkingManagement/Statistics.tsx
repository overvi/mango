import Capacity from "@/assets/images/capacity.svg?react";
import Car from "@/assets/images/car.svg?react";
import Clock from "@/assets/images/clock.svg?react";
import Danger from "@/assets/images/danger.svg?react";
import People from "@/assets/images/people.svg?react";
import StatisticCard from "@/components/ParkingManagement/StatisticCard";

const statistics = [
  { title: "مجموع ظرفیت", value: 120, icon: Capacity },
  { title: "اشغال شده", value: 30, percentage: 99, icon: People },
  { title: "در دسترس", value: 64, icon: Car },
  { title: "رزرو", value: 20, icon: Clock },
  { title: "خرابی", value: 20, icon: Danger },
];

const Statistics = () => {
  return (
    <div>
      <ul className="flex items-center *:basis-full gap-5">
        {statistics.map((stat, idx) => {
          const isPeople = stat.icon === People;
          const isOver50 = stat.percentage && stat.percentage > 50;

          return (
            <StatisticCard
              key={idx}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              percentage={stat.percentage ? `${stat.percentage}%` : undefined}
              className={
                isPeople && isOver50 ? "*:*:*:text-error *:*:*:!fill-error" : ""
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Statistics;
