import './App.css';
import StudioApp from './StudioApp.tsx';
import { useEffect } from "react";
import { initGA, logPageView } from "./ga4";


function App() {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);
  return (
    <div className="App">
      <header className="App-header">
          <StudioApp />
      </header>
    </div>
  );
}


export default App;
