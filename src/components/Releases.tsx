import twmerge from "../utils/twmerge";

function CreateCard() {
  return (
    <div className="w-[280px] h-[312px] bg-[#EDEDED] p-8 rounded-2xl flex flex-col justify-center items-center transition-all duration-500 hover:cursor-pointer hover:scale-105">
      <h2 className="text-6xl text-gray-600 opacity-50">+</h2>
      <p className="text-gray-600">
        You haven’t uploaded any videos with aBit yet. Add now!
      </p>
    </div>
  );
}

function ReleaseCard({ release }: { release: any }) {
  return (
    <div className="w-[280px] h-[312px] rounded-2xl flex flex-col justify-center items-center transition-all duration-500 hover:cursor-pointer hover:scale-105 relative">
      <img
        src={release.img}
        className="w-[280px] h-[312px] object-none rounded-2xl absolute -z-10"
      />
      <div className="p-4 w-full h-full flex flex-col justify-between items-start">
        <h2 className="text-white font-semibold text-2xl">{release.title}</h2>
        <div className="stats flex justify-center items-center relative text-white w-full p-1">
          <div className="w-full h-full absolute bg-[rgba(255,255,255,0.2)] rounded-2xl backdrop-blur-lg -z-10"></div>
          <span className="p-2 flex flex-col justify-center items-center text-sm">
            <p>Shares</p>
            <p className="font-semibold">{release.stats.shares}</p>
          </span>
          <span className="p-2 flex flex-col justify-center items-center text-sm">
            <p>Offered</p>
            <p className="font-semibold">{release.stats.offered}</p>
          </span>
          <span className="p-2 flex flex-col justify-center items-center text-sm">
            <p>Raised</p>
            <p className="font-semibold">{release.stats.raised}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Releases({
  className,
  releasesState,
}: {
  className?: string;
  releasesState: any[];
}) {
  return (
    <div className={twmerge("p-6 sm:p-28 max-h-screen overflow-x-scroll", className ?? "")}>
      <div className="min-w-fit flex justify-start gap-12 items-center p-4">
        <CreateCard />
        {releasesState.map((release) => (
          <ReleaseCard release={release} />
        ))}
      </div>
    </div>
  );
}
