import { useEffect, useState } from "react";

const LIST_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export default function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchList() {
      try {
        const res = await fetch(LIST_URL);
        if (!res.ok) throw new Error("Could not fetch the Pokémon list.");
        const data = await res.json();
        setPokemonList(data.results);
        setSelectedName(data.results[0].name);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchList();
  }, []);

  async function handleFetch() {
    const chosen = pokemonList.find((p) => p.name === selectedName);
    if (!chosen) return;

    try {
      const res = await fetch(chosen.url);
      if (!res.ok) throw new Error("Could not fetch that Pokémon.");
      const data = await res.json();
      setPokemonData(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  }

  if (loading) return <p>Loading Pokémon…</p>;

  return (
    <section>
      <select
        value={selectedName}
        onChange={(e) => setSelectedName(e.target.value)}
      >
        {pokemonList.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
      <button onClick={handleFetch}>Get Pokémon</button>

      {error && <p>{error}</p>}
      {pokemonData && <p>Fetched: {pokemonData.name}</p>}
    </section>
  );
}