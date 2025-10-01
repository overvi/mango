import clsx from "clsx";

const SidebarLink = ({
  label,
  icon: Icon,
  active = false,
}: {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
}) => (
  <li
    className={clsx(
      "flex group cursor-pointer group-[.invis]:!bg-transparent group-[.invis]:before:rotate-180 group-[.invis]:before:-right-3 group-[.invis]:before:mx-0 group-[.invis]:left-auto  dark:[.active]:bg-[#655a47] py-3 ps-1 rounded-lg relative items-center gap-2.5",
      "before:hidden [.active]:before:block before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto before:h-8 before:w-1.5 before:rounded-tr-sm before:rounded-br-sm before:bg-orange-500",
      "[.active]:bg-orange-10  [.active]:text-orange-500 [.active]:font-bold",
      active && "active"
    )}
  >
    <div className="group-[.active]:*:*:fill-orange-500  *:*:fill-[#767676]">
      <Icon />
    </div>
    <p className="group-[.invis]:hidden">{label}</p>
  </li>
);

export default SidebarLink;
