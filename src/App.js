import "./App.css";
import logo from "./assets/images/logo.svg";
import Card from "./components/Card";
import TipContextProvider from "./context/TipContext";

function App() {
  return (
    <TipContextProvider>
      <div className='App'>
        <img src={logo} />

        <Card />
      </div>
    </TipContextProvider>
  );
}

export default App;
