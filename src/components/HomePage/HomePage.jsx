import {React,useState} from "react";
import Introduction from "./Introduction/Introduction";
import "./HomePage.scss";
import WhySimmi from "./WhySimmi/WhySimmi";
import Mission from "./Mission/Mission";
import HelpUs from "./HelpUs/HelpUs";
import TrendingFundraisers from "./TrendingFundraisers/TrendingFundraisers";
import RaiseFunds from "./RaiseFunds/RaiseFunds";
import Events from "./Events/Events";
import PeopleSay from "./PeopleSays/PeopleSay";
import Stories from "./Stories/Stories";
import Social from "./Social/Social";
import Volunteers from "./Volunteers/Volunteers";
import Partners from "./Partners/Partners";
import TouchWithUs from "./TouchWithUs/TouchWithUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Speakers from "../HomePage/Speakers/Speakers";
import GoToTop from "../GoToTop/GoToTop";
// import Cookies from "js-cookie";

const HomePage = () => {
  // Cookies.set('islogin','false');
  // localStorage.setItem('islogin','false');
  // const ids = localStorage.getItem('id');
  // console.log(ids);
  // window.location.reload();
  const [homePageState, setHomePageState] = useState(true);
 
  return (
    <div className="homePage">
      <GoToTop />
      <Header homestate = {homePageState} loginState={localStorage.getItem('islogin')} />
      <Introduction />
      <WhySimmi />
      {/* <Mission /> */}
      <HelpUs />
      <TrendingFundraisers />
      <RaiseFunds />
      <Events />
      <Stories />
      <PeopleSay />
      {/* <Social /> */}
      {/* <Volunteers /> */}
      <Partners />
      <Speakers />
      <TouchWithUs />
      <Footer />
    </div>
  );
};

export default HomePage;
