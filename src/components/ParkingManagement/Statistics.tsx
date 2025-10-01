import Capacity from "@/assets/images/capacity.svg?react";
import Car from "@/assets/images/car.svg?react";
import Clock from "@/assets/images/clock.svg?react";
import Danger from "@/assets/images/danger.svg?react";
import People from "@/assets/images/people.svg?react";
import StatisticCard from "@/components/ParkingManagement/StatisticCard";

const statistics = [
  { title: "مجموع ظرفیت", value: "۱۲۰", icon: Capacity },
  { title: "اشغال شده", value: "۳۰", percentage: "25%", icon: People },
  { title: "در دسترس", value: "64", icon: Car },
  { title: "رزرو", value: "۲۰", icon: Clock },
  { title: "خرابی", value: "۲۰", icon: Danger },
];

const Statistics = () => {
  return (
    <div>
      <ul className="flex items-center *:basis-full gap-5">
        {statistics.map((stat, idx) => (
          <StatisticCard
            key={idx}
            icon={stat.icon}
            title={stat.title}
            value={stat.value}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
