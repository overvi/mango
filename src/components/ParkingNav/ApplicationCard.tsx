import img from "@/assets/images/plan-image.png";

const ApplicationCard = ({ id }: { id: number }) => {
  return (
    <label htmlFor={`app-${id}`}>
      <input
        type="radio"
        className="peer opacity-0 hidden"
        name="app"
        id={`app-${id}`}
      />
      <div className="bg-gray-300 dark:bg-gray-700 size-24 rounded-full peer-checked:outline-orange-500 outline outline-transparent flex items-center justify-center">
        <img src={img} alt="" />
      </div>
      <p className="text-xs font-bold mt-1">نرم افزار حسابداری</p>
    </label>
  );
};

export default ApplicationCard;
