import ApplicationCard from "./ApplicationCard";

const ApplicationModal = () => {
  return (
    <div className="shadow-[0_0_20px_0_rgba(0,0,0,.08)] -mt-8  overflow-hidden application-notch bg-neutral-200 relative  rounded-3xl px-6 pb-6 pt-12.5">
      <div className="curve dark:!bg-[#ffffff59] bg-[#0000000d] "></div>
      <ul className="flex flex-wrap max-w-[29rem] gap-6">
        {[...Array(8)].map((_, i) => (
          <ApplicationCard id={i} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default ApplicationModal;
