import Header from "../components/Header/Header";
import About from "../components/About/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToProfileSection } from "../util/scrollUtils";

interface LocationState {
  scrollToProfile?: boolean;
}

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.scrollToProfile) {
      scrollToProfileSection();
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="border-t-2 border-[#11133c]" id="profile-section">
        <About />
      </div>
    </>
  );
};

export default Home;
