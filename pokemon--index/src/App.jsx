import PokemonApplication from "./PokemonApplication";
import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <main>
      <h1>Pokémon Index</h1>
      {started ? (
        <PokemonApplication />
      ) : (
        <button onClick={() => setStarted(true)}>Start POKéDEX</button>
      )}
    </main>
  );
}