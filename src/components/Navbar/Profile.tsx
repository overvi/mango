import Logout from "@/assets/images/logout.svg?react";
import profile from "@/assets/images/profile.png";

interface Props {
  className?: string;
}

const Profile = ({ className }: Props) => {
  return (
    <>
      <button
        className={`${className} bg-neutral-200 items-center group-[.invis]:items-start group-[.invis]:!ps-3 group-[.invis]:bg-transparent group-[.invis]:flex-col group-[.invis]:gap-4 group/profile flex gap-2 group-[.invis]:!p-0 p-2  rounded-full`}
      >
        <div className="flex items-center gap-2">
          <div className="shrink-0">
            <img src={profile} alt="" />
          </div>
          <div className="flex flex-col group-[.invis]:hidden items-start justify-between">
            <p className="text-xs">محمد مهدی زاده</p>
            <p className="text-xs font-light">مدیریت اصلی</p>
          </div>
        </div>
        <div
          aria-label="Logout"
          className="ms-2.5 group-[.invis]:hidden opacity-0 group-hover/profile:opacity-100 transition-opacity"
        >
          <Logout />
        </div>
        <div className="bg-gray-200 w-fit p-1 group-[.invis]:block hidden rounded-xl">
          <Logout />
        </div>
      </button>
    </>
  );
};

export default Profile;
