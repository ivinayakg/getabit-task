import twmerge from "../utils/twmerge";

export default function Card({
  cardTitle,
  cardTitleMeta,
  cardContent,
  className,
}: {
  cardTitle: string;
  cardTitleMeta: string;
  cardContent: string;
  className?: string;
}) {
  return (
    <div
      className={twmerge(
        className ?? "",
        "flex justify-center items-center bg-gray-200 rounded-xl h-[20vh] sm:h-[25vh]"
      )}
      style={{ aspectRatio: "4/2" }}
    >
      <div
        className="w-2/5 h-full bg-center bg-no-repeat bg-cover rounded-l-xl"
        style={{ backgroundImage: "url('/profile.png')" }}
      ></div>
      <div className="w-3/5 h-full rounded-r-xl flex flex-col justify-between items-start p-3 sm:p-6 gap-2">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-bold text-lg sm:text-5xl">{cardTitle}</h2>
          <p className="text-gray-600 text-xs sm:text-base font-semibold">
            {cardTitleMeta}
          </p>
        </div>
        <div className="flex justify-start items-start flex-col text-lg">
          <p className="font-bold text-xs sm:text-base">Bio</p>
          <p className="text-left text-xs sm:text-base">{cardContent}</p>
        </div>
        <div
          className="rounded-md border-2 border-black w-full flex justify-start self-end"
          style={{ backgroundColor: "rgb(63,63,63)", padding: "2px" }}
        >
          <button
            className=" text-black rounded-md p-2 py-1 w-1/2"
            style={{ backgroundColor: "rgb(229,231,235)" }}
          >
            Creator
          </button>
        </div>
      </div>
    </div>
  );
}
