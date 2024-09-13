import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./routes/home.jsx";
// import ThankYou from "./components/ThankYou.jsx";
import axios from "./instance.js";
// import Congratulation from "./components/congratulations.jsx";

import Register from "./routes/register.jsx";
import Otp from "./routes/otp.jsx";
import Thankyou from "./routes/thank-you.jsx";

import { useEffect, useState } from "react";
import Congratulation from "./routes/Congratulation.jsx";
import TermsCondition from "./components/TermsCondition.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Share from "./components/Share.jsx";
import Finish from "./routes/Finish.jsx";

const AppRouter = () => {
  const [userCount, setuserCount] = useState(1040);
  const userCountCalculation = async () => {
    const response = await axios.get("/get-pladge");

    if (response.status === 200) {
      setuserCount(userCount + response.data.msg);
    }
  };

  useEffect(() => {
    userCountCalculation();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
         
          <Route
            path="/"
            element={<Home userCount={userCount} setuserCount={setuserCount} />}
          />

          <Route
            path="/register"
            element={<Register userCount={userCount} />}
          />
          <Route path="/verify-otp" element={<Otp userCount={userCount} />} />

          <Route
            path="/thank-you"
            element={<Thankyou userCount={userCount} />}
          />

          <Route
            path="/congratulations"
            element={<Congratulation userCount={userCount} />}
          />
        </Route> */}

        <Route
          path="/finish"
          element={<Finish userCount={userCount} setuserCount={setuserCount} />}
        />
        <Route path="/" element={<Navigate to="/finish" />} />

        {/* </Routes>
              <Routes>  */}

        {/* <Route
            path="/congratulationss"
            element={<Congratulations userCount={userCount} />}
          /> */}

        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
