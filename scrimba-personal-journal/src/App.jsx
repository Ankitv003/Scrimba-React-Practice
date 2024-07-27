import "./App.css";
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import data from "./data";
function App() {
  const travelJournal = data.map((dataEl) => {
    return <TravelCard key={dataEl.key} dataEl={dataEl} />;
  });
  return (
    <>
      <Navbar />
      {travelJournal}
    </>
  );
}

export default App;
