import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div class="container">
      <Weather defaultCity="Sydney"/>
      <Forecast />
      </div>
    </div>
    
    
  );
}

export default App;
