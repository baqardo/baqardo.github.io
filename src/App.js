import "./App.scss";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Navigation from "./containers/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
