import "./App.css";
import Card from "./Components/card-component/Card";
import Navbar from "./Components/navigation-component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-component">
        <Card
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          body="Lorem ipsum dolor sit amet."
        />
        <Card
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          body="Lorem ipsum dolor sit amet."
        />
        <Card
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          body="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
}

export default App;
