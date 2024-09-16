import NavBar from "./components/Layout/NavBar.tsx";
import Footer from "./components/Layout/Footer.tsx";
import Home from "./pages/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhyUsPage from "./pages/WhyUsPage.tsx";

function App() {
  return (
    <>
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HvorforOss" element={<WhyUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
