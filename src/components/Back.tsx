import twmerge from "../utils/twmerge";

export default function Back({
  className,
  text,
  card,
}: {
  className?: string;
  text: string;
  card: any;
}) {
  return (
    <div
      className={twmerge(
        className ?? "",
        "flex flex-col justify-center items-center h-[40vh] sm:h-[60vh]"
      )}
    >
      <div
        className={"bg-back bg-bottom bg-no-repeat bg-cover w-full h-full"}
      ></div>
      <div
        className="text-neutral-400 font-gloria-hallelujah p-4 text-3xl whitespace-nowrap overflow-hidden mt-auto w-full"
        style={{ backgroundColor: "#292828" }}
      >
        {text} {text} {text}
      </div>
      {card}
    </div>
  );
}
