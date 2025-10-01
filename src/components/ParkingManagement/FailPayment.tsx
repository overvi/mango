import paymentOver from "@/assets/images/payment-fail.png";
import Button from "../Button";

const FailPayment = () => {
  return (
    <div className=" w-[31.375rem] relative p-6 pb-12 ">
      <div className="absolute top-0 left-0 right-0 mx-auto w-fit -translate-y-[80%]">
        <img src={paymentOver} alt="" />
      </div>
      <p className="text-error pt-10 text-center font-black text-2xl">
        پرداخت با موفقیت انجام شد.
      </p>
      <div className="rounded-full py-2 border border-error border-dashed text-error  w-fit mx-auto mt-4  px-7.5 bg-error/5 ">
        <p>
          <span className="font-bold">کد رهگیری</span>: 22870516781
        </p>
      </div>
      <div className="flex items-center   pt-6 mt-2 gap-4 justify-center">
        <Button
          className="outline-gray-600 text-gray-600 bg-gray-600/5"
          variant="outline"
          label="بازگشت به صفحه اول"
        />
        <Button
          className="text-nowrap !h-10  hover:text-white"
          variant="form"
          label="پرداخت مجدد"
        />
      </div>
    </div>
  );
};

export default FailPayment;
