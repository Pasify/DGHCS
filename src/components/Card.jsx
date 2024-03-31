function Card({ iconBgColor = "", icon, cardTitle, value }) {
  return (
    <div className="grid h-[10rem] w-[15rem] grid-cols-2 grid-rows-7 outline-background">
      <div className="z-10 row-start-1 row-end-2 h-[3rem] w-[3rem] translate-x-5  rounded bg-midBlack p-4 shadow-md">
        {icon}
      </div>
      <div className="z-20 col-start-2 col-end-3 row-start-2 row-end-4 me-3 mt-3 rounded text-lg font-semibold capitalize text-midBlack">
        {cardTitle}
      </div>
      <div className=" z-0 col-span-full row-span-full row-start-2  flex items-end rounded-lg bg-white p-2 text-3xl font-semibold shadow-lg outline outline-2 outline-background">
        {value}
      </div>
    </div>
  );
}

export default Card;
