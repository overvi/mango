import Logout from "@/assets/images/logout.svg?react";
import profile from "@/assets/images/profile.png";

const Profile = () => {
  return (
    <button className="bg-neutral-200 group flex gap-2 p-2 items-center rounded-full">
      <div>
        <img src={profile} alt="" />
      </div>
      <div className="flex flex-col items-start justify-between">
        <p className="text-xs">محمد مهدی زاده</p>
        <p className="text-xs font-light">مدیریت اصلی</p>
      </div>
      <div
        aria-label="Logout"
        className="ms-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Logout />
      </div>
    </button>
  );
};

export default Profile;
