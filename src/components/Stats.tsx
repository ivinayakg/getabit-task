import twmerge from "../utils/twmerge";

export default function Stats({
  statsData,
  className,
}: {
  statsData: any[];
  className?: string;
}) {
  return (
    <div
      className={twmerge(
        className ?? "",
        "flex justify-between items-center p-10 sm:p-20 flex-col lg:flex-row gap-10"
      )}
    >
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="text-3xl sm:text-5xl font-eb-garamond">Releases</h1>
        <p className="text-lg sm:text-2xl font-eb-garamond text-left">
          Videos that you upload in collaboration with aBit appear here
        </p>
      </div>

      <div className="grid justify-center items-start gap-4 text-left grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4">
        {statsData.map((stat) => (
          <div className="border-l-4 border-[rgba(86, 86, 86, 1)] text-md sm:text-xl flex flex-col justify-start items-start gap-2 sm:gap-8 text-[#565656] h-full">
            <h3 className="p-4 py-0 font-bold">{stat.value}</h3>
            <p className="p-4 py-0">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
