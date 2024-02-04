import twmerge from "../utils/twmerge";

export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={twmerge(
        className ?? "",
        "flex justify-between items-center px-[8%] py-32 border-t-4"
      )}
    >
      <div className="text-left flex flex-col justify-start items-start gap-2">
        <h1 className="text-3xl sm:text-7xl font-bold">aBit</h1>
        <p className="text-lg sm:text-xl">
          Changing the way in which creators and fans interact.
        </p>
      </div>

      <div className="flex flex-col justify-start items-start gap-4 text-lg border-l-4 border-[#9F9D9D] p-1 pl-4 text-left">
        <a href="/" className="font-semibold">
          Home
        </a>
        <a href="/" className="font-semibold">
          Are you a Creator?
        </a>
        <a href="/" className="font-semibold">
          Support
        </a>
      </div>
    </div>
  );
}
