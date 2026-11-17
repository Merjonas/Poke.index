import { use, useEffect, useState } from "react";

const LIST_URL ="https://pokeapi.co/api/v2/pokemon?limit=151";

export default function PokemonApplication() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchList() {
            try {
                const res = await fetch(LIST_URL);
                if (!res.ok) throw new Error("Could not fetch the POKéDEX");
                const data = await res.json();
                setPokemonList(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchList();
    }, []);

    if (loading) return <p>Loading Pokémon...</p>;
    if (error) return <p>{error}</p>

    return <p>Fetched {pokemonList.length} Pokémon</p>;
}
            
    