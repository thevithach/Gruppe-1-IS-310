import "./output.css";
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Your page content goes here */}
      </div>
      <Footer /> {/* This is the footer */}
    </div>
  );
}

export default App;
