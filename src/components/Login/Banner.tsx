import sakura from "@/assets/images/login-banner.png";

const Banner = () => {
  return (
    <div>
      <div className="min-h-[42.5rem]">
        <img
          className="object-cover min-h-[42.5rem] h-[85vh] rounded-4xl "
          src={sakura}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
