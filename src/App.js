import { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [cryptoState, setCryptoState] = useState({ crypto: [] });

  useEffect(() => {
    async function getCrypto() {
      try {
        const crypto = await fetch("http://localhost:3000/")
        .then(response => response.json())
        setCryptoState({ crypto })
      } catch (error) {
        console.log(error)
      }
    }
   getCrypto();
}, []);
    
return (
      <div className="App">
        <Home crypto={cryptoState.crypto} />
      </div>
    );
}

export default App;