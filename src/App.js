import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import TheLeadingRealEstate from "./components/TheLeadingRealEstate";
import Counters from "./components/Counters";
import TodaySellProperties from "./components/TodaySellProperties";
import Cards from "./components/Cards";
import FeaturedListing from "./components/FeaturedListing";
import ApartmentsPlan from "./components/ApartmentsPlan";
import Portals from "./components/Portals";
import BuildingAminities from "./components/BuildingAminities";
import ClientsFeeback from "./components/ClientsFeeback";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Slider/>
      <TheLeadingRealEstate />
      <Counters/>
      <TodaySellProperties/>
      <Cards />
      <FeaturedListing/>
      <ApartmentsPlan/>
      <Portals/>
    </div>
  );
}

export default App;
