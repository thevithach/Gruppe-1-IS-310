import Header from "../components/Header/Header";

import About from "../components/About/About";

const Home = () => {
  return (
    <>
      <Header />
      <div className="border-t-2 border-[#11133c]">
        <About />
      </div>
    </>
  );
};

export default Home;
