import './App.scss';

import Header from "./Components/header/Header";
import LandingPages from "./Components/landingpages/LandingPages";
import Endpoint from "./Components/endpoint/Endpoint";

function App() {

  
  return (
    <div className="App">
      <Header />
      <LandingPages />
      <Endpoint />
    </div>
  );
}

export default App;
