import paymentOver from "@/assets/images/payment-over.png";

const SuccessPayment = () => {
  return (
    <div className=" w-[31.375rem] relative p-6  pb-12 ">
      <div className="absolute top-0 left-0 right-0 mx-auto w-fit -translate-y-[90%]">
        <img src={paymentOver} alt="" />
      </div>
      <p className="text-green-500  pt-7 text-center font-black text-2xl">
        پرداخت با موفقیت انجام شد.
      </p>
      <div className="rounded-full py-2 border border-green-500 border-dashed text-green-500  w-fit mx-auto mt-4  px-7.5 bg-green-500/5 ">
        <p>
          <span className="font-bold">کد رهگیری</span>: 22870516781
        </p>
      </div>
      <p className="mt-4 text-center">
        پرداخت موفقیت آمیز بود و طی چند ثانیه آینده
        <br /> به صورت خودکار به صفحه اول انتقال پیدا می کنید.
      </p>
    </div>
  );
};

export default SuccessPayment;
