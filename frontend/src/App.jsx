import { Route, Routes } from "react-router-dom";
import SiteLayout from "./siteLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
