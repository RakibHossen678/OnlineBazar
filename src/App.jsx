import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import FeatureProduct from "./Components/Freature/FeatureProduct";
import Navbar from "./Components/Navbar/Navbar";
import Review from "./Components/Review/Review";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <FeatureProduct/>
      <About/>
      <Review/>
    </>
  );
}

export default App;
