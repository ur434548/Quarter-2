import Header from "../src/components/Header/Header"
import Navigation from "../src/components/pages/Navigation"
import Slider from "../src/components/pages/Slider"
import TheLeadingRealEstate from "../src/components/pages/TheLeadingRealEstate"
import Counters from "../src/components/pages/Counters"
import TodaySellProperties from "../src/components/pages/TodaySellProperties"
import Cards from "../src/components/Cards/Cards"
import FeaturedListing from "../src/components/pages/FeaturedListing"
import ApartmentsPlan from "../src/components/pages/ApartmentsPlan"
import Portals from "../src/components/pages/Portals"
import BuildingAminities from "../src/components/pages/BuildingAminities"
import ClientsFeeback from "../src/components/pages/ClientsFeeback"
import LatestNews from "../src/components/pages/LatestNews"
import Footer from "../src/components/pages/Footer"
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Slider />
      <TheLeadingRealEstate />
      <Counters />
      <TodaySellProperties />
      <Cards />
      <FeaturedListing />
      <ApartmentsPlan />
      <Portals />
      <BuildingAminities />
      <ClientsFeeback />
      <LatestNews />
      <Footer/>
      
    </div>
  );
}

export default App;
