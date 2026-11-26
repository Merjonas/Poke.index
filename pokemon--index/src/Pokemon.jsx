export default function Pokemon({ data }) {
  const image =
    data.sprites.other?.["official-artwork"]?.front_default ||
    data.sprites.front_default;

  return (
    <article className="screen">
      <h2>
        <span className="dex-number">#{String(data.id).padStart(3, "0")}</span>{" "}
        {data.name}
      </h2>

      <div className="screen-image">
        <img src={image} alt={data.name} width="200" height="200" />
      </div>

      <ul className="types">
        {data.types.map((t) => (
          <li key={t.type.name} className={`type type-${t.type.name}`}>
            {t.type.name}
          </li>
        ))}
      </ul>

      <dl className="stats">
        <dt>Weight</dt>
        <dd>{data.weight / 10} kg</dd>
        <dt>Height</dt>
        <dd>{data.height / 10} m</dd>
      </dl>
    </article>
  );
}