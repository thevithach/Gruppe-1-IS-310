import "./output.css";
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar/>
      <div className="flex-grow">
        {/* Your page content goes here */}
      </div>
      <Footer /> {/* This is the footer */}
    </div>
  );
}

export default App;
