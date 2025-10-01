import Category from "@/assets/images/category.svg?react";
import Clipboard from "@/assets/images/clipboard-text.svg?react";
import Document from "@/assets/images/document-text.svg?react";
import logo from "@/assets/images/logo-second.png";
import invisLogo from "@/assets/images/nav-logo.svg";
import Tag from "@/assets/images/tag-2.svg?react";
import User from "@/assets/images/user-edit.svg?react";
import Profile from "../Navbar/Profile";
import SidebarLink from "./SidebarLink";
import ArrowLeft from "@/assets/images/arrow-left.svg?react";
import { useState } from "react";

const links = [
  { label: "مدیریت پارکینگ", href: "", icon: Category },
  { label: "نرخ گذاری", href: "", icon: Tag },
  { label: "مدیریت کارکنان", href: "", icon: User },
  { label: "صورتحساب ها", href: "", icon: Document },
  { label: "گزارشات", href: "", icon: Clipboard },
];
const Sidebar = () => {
  const [visible, setVisible] = useState(true);
  const baseClassName =
    "relative  [.invis]:w-14  w-[15%] duration-700  flex pb-3 group [.invis]:!px-0 transition-all flex-col  justify-between rounded-[30px] bg-neutral-200 px-3 pt-6 ";

  return (
    <aside
      aria-label="Side bar"
      className={[baseClassName, !visible && "invis", "transition-all "].join(
        " "
      )}
    >
      <div className="flex  flex-col justify-between h-full">
        <button
          onClick={() => setVisible(!visible)}
          className="size-8 group-[.invis]:rotate-180  absolute left-0 -translate-x-1/2 top-[10%] bg-neutral-200 rounded-full  flex items-center justify-center"
        >
          <ArrowLeft />
        </button>
        <div>
          <div className="w-fit mx-auto">
            <img className="group-[.invis]:hidden" src={logo} alt="" />
            <img
              className="hidden group-[.invis]:block"
              src={invisLogo}
              alt=""
            />
          </div>
          <ul className="mt-23.5 space-y-4 text-sm group-[.invis]:px-3 overflow-hidden text-nowrap">
            {links.map((link, i) => (
              <SidebarLink
                key={i}
                label={link.label}
                icon={link.icon}
                active={i === 0}
              />
            ))}
          </ul>
        </div>
        <Profile className=" rounded-xl self-end text-nowrap  overflow-hidden w-full justify-between text-[10px] bg-neutral-300" />
      </div>
    </aside>
  );
};

export default Sidebar;
