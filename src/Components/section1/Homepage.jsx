import CategoryTabs from "./CategoryTabs";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer1 from "../../Assets/sector1/Union.png";
import gifAnimation from "../../Assets/sector1/avatar.gif";

function Section1() {
  return (
    <>
      <div className=" container  mx-auto bg-white max-w-[1300px] lg:pt-[36px]">
        <Header />
        <main className="mt-[150px] md:mt-[200px] px-5 text-center">
          <div className=" ">
            <div className="text-center px-4">
              <h1 className="mx-auto max-w-lg md:w-[700px] text-4xl sm:text-5xl md:text-4xl font-bold">
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <span>Finding the right fit </span>
                  <img
                    src={gifAnimation}
                    alt="Avatars"
                    className="w-[40px] h-[25px] md:w-[68px] md:h-[43px] mx-2"
                  />
                  <span>has</span>
                </div>
                <div className="mt-2">never been easier.</div>
              </h1>
            </div>
            <p className="mt-[20px] mb-[30px] text-gray-500">
              With our rigorous pre-vetting process, you'll never have to worry
              about finding the ideal candidate ever again.
            </p>
            <SearchBar />
            <CategoryTabs />
          </div>
        </main>
      </div>
      <div className="lg:mt-[100px] mt-[50px] w-full mb-0 m-0">
        <img alt="Section-footer" src={Footer1} className="w-full" />
      </div>
    </>
  );
}

export default Section1;
