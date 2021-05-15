import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./containers/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
    </div>
  );
}

export default App;
