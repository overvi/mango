import patternTop from "@/assets/images/login-pattern-top.png";

const Pattern = () => {
  return (
    <>
      <div className="absolute top-0 right-10 pointer-events-none -z-[1]">
        <img width={200} src={patternTop} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none -z-[1] rotate-180 rotate-y-[140deg]">
        <img width={240} src={patternTop} alt="" />
      </div>
    </>
  );
};

export default Pattern;
