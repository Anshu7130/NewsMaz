import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import NewsItem from "./Components/NewsItem";

const App = () => {
  return (
    <div>
      <div style={{ position: "fixed", width: "100vw", zIndex: "1000" }}>
        <Navbar />
      </div>
      <div style={{ paddingTop: "80px" }}>
        <NewsBoard />
      </div>
    </div>
  );
};

export default App;
