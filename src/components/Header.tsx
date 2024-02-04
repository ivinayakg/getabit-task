export default function Header() {
  return (
    <header
      className="w-full relative h-[90px]"
      style={{ backgroundColor: "rgba(217, 224, 236, 0.2)" }}
    >
      <div className="bg-paper-crumble w-full min-h-full absolute opacity-95 -z-10"></div>
      <div className="grid grid-cols-mobileHeader md:grid-cols-tabletHeader lg:grid-cols-header xl:grid-cols-overSizeheader items-center w-full h-full p-2 sm:p-4 lg:p-6 lg:px-12">
        <h2 className="text-2xl font-bold justify-self-start">aBit</h2>
        {/* CTA */}
        <button className="justify-self-end hidden md:block text-secondary font-bold border-2 sm:border-4 border-secondary rounded-3xl p-2 sm:px-4 sm:py-2 shadow-sm mr-3">Share New Video</button>
        <div className="header_btns justify-self-end flex justify-center items-center gap-6">
          <button>
            <img
              src="/wallet.png"
              alt="decoration"
              className="object-contain w-6 sm:w-8"
            />
          </button>
          <button className="">
            <img
              src="/notification.png"
              alt="decoration"
              className="object-contain w-7 sm:w-10"
            />
          </button>
          <button className="user">
            <img
              src="/user.png"
              alt="decoration"
              className="object-contain w-12 sm:w-20"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
