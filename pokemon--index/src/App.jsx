import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <main>
      <h1>Pokémon Index</h1>
      {started ? (
        <p>Poke app</p>
      ) : (
        <button onClick={() => setStarted(true)}>Start POKéDEX</button>
      )}
    </main>
  );
}