import React, { type ReactNode, type SetStateAction } from "react";

export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

interface Props {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
}

export default function Tabs({ tabs, activeTab, setActiveTab }: Props) {
  return (
    <div>
      <div className=" border-b border-gray-300 dark:border-b-0 dark:*:text-white bg-neutral-15 rounded-xl flex items-center justify-evenly">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 text-xs py-1 group text-black flex before:hidden  items-center before:right-0  before:left-0 before:mx-auto gap-2 -mb-px  before:content-['']  before:bg-orange-500 before:w-full relative before:h-[6px] before:rounded-b-2xl before:absolute before:bottom-0 font-medium
              ${
                activeTab === tab.id
                  ? "text-orange-500 active before:!block"
                  : "text-black"
              }`}
          >
            {tab.icon &&
              React.createElement(tab.icon, {
                className:
                  "w-[20px] *:fill-black dark:*:fill-white group-[.active]:*:fill-orange-500",
              })}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
