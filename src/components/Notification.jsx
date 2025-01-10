const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className || ""
        }  z-10 flex cursor-pointer items-center overflow-hidden rounded-lg border p-[2px] bg-n-9/40 backdrop-blur border-n-1/10 gap-5`}
    >

      <div className="animate-rotate absolute scale-exact-7 inset-0 h-full w-full rounded-lg bg-[conic-gradient(#FF3131_120deg,#38B6FF_120deg)]"/>

      <div className="relative justify-center z-20 flex w-full rounded-lg bg-n-19 p-2">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
      </div>
    </div>
  );
};

export default Notification;
