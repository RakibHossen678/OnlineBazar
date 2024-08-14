import "./App.css"; // Importing the global CSS file for the entire application
import About from "./Components/About/About"; // Importing the About component
import Banner from "./Components/Banner/Banner"; // Importing the Banner component
import FeatureProduct from "./Components/Freature/FeatureProduct"; // Importing the FeatureProduct component
import Navbar from "./Components/Navbar/Navbar"; // Importing the Navbar component
import Review from "./Components/Review/Review"; // Importing the Review component
import Footer from "./Components/Footer/Footer"; // Importing the Footer component
import NewsLetter from "./Components/NewsLetter/NewsLetter"; // Importing the NewsLetter component

function App() {
  return (
    <>
      <Navbar /> {/* Renders the navigation bar at the top of the page */}
      <Banner /> {/* Renders the banner or hero section */}
      <FeatureProduct />{" "}
      {/* Renders the section for showcasing featured products */}
      <About /> {/* Renders the about section */}
      <Review /> {/* Renders the customer reviews section */}
      <NewsLetter /> {/* Renders the newsletter subscription section */}
      <Footer /> {/* Renders the footer at the bottom of the page */}
    </>
  );
}

export default App;
