import { useState } from "react";
import PokemonApplication from "./PokemonApplication";
import "./App.css";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <main className="pokedex">
      <header className="pokedex-top">
        <span className="lens" aria-hidden="true"></span>
        <span className="light light-red" aria-hidden="true"></span>
        <span className="light light-yellow" aria-hidden="true"></span>
        <span className="light light-green" aria-hidden="true"></span>
        <h1>Pokédex</h1>
      </header>

      <div className="pokedex-body">
        {started ? (
          <PokemonApplication />
        ) : (
          <button className="btn btn-start" onClick={() => setStarted(true)}>
            Start Pokemon App
          </button>
        )}
      </div>
    </main>
  );
}