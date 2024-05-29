import "./App.css";

import Section1 from "./Components/section1/Homepage";
import Section2 from "./Components/section2/Homepage";
import Section3 from "./Components/section3/Homepage";
import Section4 from "./Components/section4/Homepage";
import Section5 from "./Components/section5/Homepage";
import Section6 from "./Components/section6/Homepage";

function App() {
  return (
    <div className="App font-switzer">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
