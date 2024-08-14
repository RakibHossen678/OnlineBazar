import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import FeatureProduct from "./Components/Freature/FeatureProduct";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <FeatureProduct/>
      <About/>
    </>
  );
}

export default App;
