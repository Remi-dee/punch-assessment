import CreativeBox from "./CreativeCarousel";
import Background from "../../Assets/sector1/slantBackground.png";
import Header from "./Header";
import DevelopmentBox from "./ItDevCarousel";
import ExploreMore from "./exploreMore";

function Section2() {
  return (
    <div
      className=" min-h-screen p-4 sm:p-8 relative w-full bg-cover -mt-[52px] lg:-mt-[35px]"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <Header />

      <DevelopmentBox />
      <CreativeBox />
      <ExploreMore />
    </div>
  );
}

export default Section2;
