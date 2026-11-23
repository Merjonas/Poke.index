export default function Pokemon({data}) {
    const image = data.sprites.other?.["official-artwork"]?.front_default || data.sprites.front_default;

    return (
        <article>
            <h2>{data.name}</h2>
            <img src={image} alt={data.name} width="200" height="200" />
            <p>Types: {data.types.map((t) => t.type.name).join(", ")}</p>
            <p>Weight: {data.weight / 10} kg</p>
            <p>Height: {data.height / 10} m</p>
        </article>
    );
}