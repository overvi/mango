import React from "react";

interface StatisticCardProps {
  title: string;
  value: string | number;
  percentage?: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconBgColor?: string;
  cardBgColor?: string;
  percentageColor?: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  percentage,
  icon: Icon,
  iconBgColor = "bg-neutral-100",
  cardBgColor = "bg-neutral-200",
  percentageColor = "text-[#005EFF]",
}) => {
  return (
    <li className={`flex items-center gap-2 p-4 rounded-[1rem] ${cardBgColor}`}>
      <div className={`p-3.5 rounded-[0.875rem] ${iconBgColor}`}>
        <Icon />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-sm font-light">{title}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-[1.25rem]">{value}</p>
          {percentage && (
            <p className={`text-xs font-light ${percentageColor}`}>
              {percentage}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default StatisticCard;
