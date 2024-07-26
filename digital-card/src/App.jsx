import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import MainContent from "./components/MainContent";
function App() {
  return (
    <div className="container">
      <Info />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
