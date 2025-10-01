import Danger from "@/assets/images/danger.svg?react";

const FailureNotice = () => {
  return (
    <div className="bg-orange-500/5 border border-orange-500/30  mb-3  p-4 mt-4  rounded-[.875rem] ">
      <div className="flex items-center gap-2">
        <div className="size-7.5 bg-orange-500/15  flex items-center justify-center rounded-lg">
          <Danger width={20} height={20} className="*:fill-orange-500" />
        </div>
        <p className="text-sm">در دست تعمیر</p>
      </div>
      <p className="text-xs mt-2.5">
        این کار باعث می‌شود فضای پارکینگ از دسترس خارج شود و تیم تعمیر و نگهداری
        مطلع شود.
      </p>
    </div>
  );
};

export default FailureNotice;
