import "./App.css";
import Back from "./components/Back";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Releases from "./components/Releases";
import Stats from "./components/Stats";

function App() {
  const state = {
    backText: "John Bill / Creator / Moved to NYC / 27.11.22 / Live now/",
    card: {
      cardTitle: "John Bill",
      cardTitleMeta: "/John_Bill/",
      cardContent:
        "Simply a film fan creating original content for YouTube. Let’s Collaborate.",
    },
    releases: [
      {
        img: "/release.png",
        title: "The Last of Us",
        stats: {
          shares: 317,
          offered: "75%",
          raised: "$9510",
        },
      },
    ],
    statsData: [
      {
        value: "1",
        title: "Shared Videos",
      },
      {
        value: "$9510",
        title: "Funds Raised",
      },
      {
        value: "317",
        title: "Co-owner Community",
      },
      {
        value: "$3804",
        title: "Co-owner Earnings",
      },
    ],
  };

  const card = (
    <Card
      {...state.card}
      className="absolute lg:left-20 bottom-[-10%] shadow-outer-shadow"
    />
  );

  return (
    <>
      <div className="w-full">
        <Header />
        <Back text={state.backText} card={card} className="relative" />
        <Stats statsData={state.statsData} className="mt-20" />
        <Releases releasesState={state.releases} />
        <Footer />
      </div>
    </>
  );
}

export default App;
