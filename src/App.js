import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NgoRegistration from "./components/NgoRegistration/NgoRegistration";
import NgoRegistrationProgress from "./components/NgoRegistration/NgoRegistrationProgress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
import Default from "./components/Medical/defaultPage";
import Beneficiary from "./components/Medical/Beneficiary";
import Medical from "./components/Medical/Medical";
import Fund from "./components/Medical/Fund";
import Documents from "./components/Medical/Documents";
import Others from "./components/Others/Others";
import Others1 from "./components/Others/Others1";
import Others2 from "./components/Others/Others2";
import Others3 from "./components/Others/Others3";
import NGOFundraising from "./components/NGOFundraising/NGOFundraising";
import NGOFundraisingInitiate from "./components/NGOFundraising/NGOFundraising2";
import NGOFundraisingProgram from "./components/NGOFundraising//NGOFundraising1";
import StartFund from "./components/Start Funds/start_fund";
import IndividualFunds from "./components/Start Funds/individual-funds";
// import Token from "./components/token";
import FundraisingShowpage from "./components/Donations/fundraisingShowpage";
import Header from "./components/Header/Header";
import MyDashboard from "./components/MyDashboard/MyDashboard";
import Footer from "./components/Footer/Footer";
import { Register } from "./components/Authentication/pages/Register";
import { Login } from "./components/Authentication/pages/Login";
import ResetPassword from "./components/Authentication/pages/ResetPassword";
import SendEmailLink from "./components/Authentication/pages/SendEmailLink";
import Campaign from "./components/Campaign/Campaign";
import Step1 from "./components/Campaign/StepsCampaign/Pages/Step1";
import Step2 from "./components/Campaign/StepsCampaign/Pages/Step2";
import Faqpage1 from "./components/FAQS/Component/pages/faqpage1";
import PageNotFound from "./components/PageNotFound";
import Cookies from "js-cookie";
import AboutUs from "./components/AboutUs/AboutUs";
import Contactus from "./components/ContactUs/Contactus";
import Changepassword from "./components/Authentication/pages/Changepassword";
import WithdrawFundsEmpty from "./components/WithdrawFunds/WithdrawFundsEmpty";
import GoogleLoginComponent from "./components/Googlelogincomp";
import { gapi } from 'gapi-script';

// import Token1 from "./components/token1";
const clientId = "101154564786-02909v6m0f2tnoj4dppi901mpbl5oikp.apps.googleusercontent.com";

function App() {
  const userId = localStorage.getItem("id") && localStorage.getItem("id");

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })

  // const isLoginState = Cookies.get("islogin");



  useEffect(() => {
    getToken();
  }, []);

  const getToken = async (e) => {
    // e.preventDefault();
    const data = {
      //login name of the user
      username: "amitkumardubey",
      //login password of the user
      password: "Amit@100",
    };
    let res = await axios.post(
      "http://127.0.0.1:8000/api/token/",
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let recievedData = res.data;
    //json.stringify converts javascript objects into strings
    // console.log("Recieved data is: " + JSON.stringify(recievedData));
    // console.log("Refresh token is :" + recievedData.refresh)
    // console.log("Access token is :" + recievedData.access)
    if (res.status === 200) {
      localStorage.setItem("token", recievedData.access);
      localStorage.setItem('apitoken', recievedData.access);
    }
  };
  console.log(userId)

  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ngoregis" element={<NgoRegistration />} />
        <Route exact path="/glogin" element={<GoogleLoginComponent />} />
        <Route exact path="/ngoregprogress" element={<NgoRegistrationProgress />} />

        
        <Route
          exact
          path="/default-beneficiary"
          element={
            <>
              <Beneficiary />
              <Default />
            </>
          }
        />
        <Route
          exact
          path="/myDashboard"
          element={
            <>
              <Header />
              <MyDashboard />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/default-medical"
          element={
            <>
              <Medical />
              <Default />
            </>
          }
        />
        <Route
          exact
          path="/default-fund"
          element={
            <>
              <Fund />
              <Default />
            </>
          }
        />
        <Route
          exact
          path="/default-documents"
          element={
            <>
              <Documents />
              <Default />
            </>
          }
        />
        <Route
          exact
          path="/others-fundraiser"
          element={
            <>
              <Others1 />
              <Others />
            </>
          }
        />
        <Route
          exact
          path="/others-beneficiary"
          element={
            <>
              <Others2 />
              <Others />
            </>
          }
        />
        <Route
          exact
          path="/others-congratulations"
          element={
            <>
              <Others3 />
              <Others />
            </>
          }
        />
        <Route
          exact
          path="/ngo-fundraising-program"
          element={
            <>
              <NGOFundraisingProgram />
              <NGOFundraising />
            </>
          }
        />
        <Route
          exact
          path="/ngo-fundraising-initiate"
          element={
            <>
              <NGOFundraisingInitiate />
              <NGOFundraising />
            </>
          }
        />
        <Route exact path="/register" element={<Register />} />

        <Route exact path='api/user/reset/:uid/:token' element={<ResetPassword />} />
        {
          (localStorage.getItem("islogin") === 'false' || !localStorage.getItem("islogin")) && (<Route exact path="/login" element={<Login />} />)
        }
        {/* <Route exact path='/login' element={<Login />} /> */}
        <Route path='campaign' element={<Campaign />} />
        {
          localStorage.getItem("islogin") === 'true' && (<Route exact path="/login" element={<HomePage />} />)
        }
        <Route path='/step1' element={<Step1 />} />
        <Route path='/step1/step2' element={<Step2 />} />
        <Route path='/aboutus' element={<AboutUs />} />

        <Route path='/faqpage' element={<Faqpage1 />} />
        <Route path='/send-email-link' element={<SendEmailLink />} />
        <Route exact path="/start-fund" element={<StartFund />} />
        <Route exact path="/individual-funds" element={<IndividualFunds />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path='/changepassword' element={<Changepassword />} />
        {/* <Route path = '/startfunds' element={<StartFund/>} /> */}

        <Route exact path="/startfunds" element={<StartFund />} />

        {/* {
        (localStorage.getItem("islogin") === 'false') && (<Route exact path="/startfunds" element={<Login />} />)
       } */}



        <Route exact path='/fundraising-showpage' element={<FundraisingShowpage />} />

        <Route path='/withdraw&&funds==empty' element={<WithdrawFundsEmpty />} />

        {/* <Route
          exact
          path="/fundraising-showpage"
          element={<FundraisingShowpage />}
        /> */}
        {/* <Route exact path="/token1" element={<Token1 />} /> */}

        {/* <Route exact path="/others"  element={<Others4/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
