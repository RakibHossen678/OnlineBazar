import "./App.css";
import About from "./Components/About/About";
import Banner from "./Components/Banner/Banner";
import FeatureProduct from "./Components/Freature/FeatureProduct";
import Navbar from "./Components/Navbar/Navbar";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <FeatureProduct/>
      <About/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;
