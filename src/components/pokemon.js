// src/components/pokemon.js

export default function Pokemon({pokemon}) {
	return (
		<>
			<h2 className="text-xl">{pokemon.name}</h2>
			<img src={pokemon.sprites.other["official-artwork"].front_default} />
			<ul className="flex gap-4">
				{pokemon.types.map(object => (
					<li
						key={object.type.name}
						className={`bg-${object.type.name} rounded-full px-2`}
					>
						{object.type.name}
					</li>
				))}
			</ul>
			<h3>Abilities</h3>
			<ul>
				{pokemon.abilities.map((object) => (
					<li key={object.ability.name}>{object.ability.name}</li>
				))}
			</ul>
			<h3>Moves</h3>
			<ul>
				{pokemon.moves.map((object) => (
					<li key={object.move.name}>{object.move.name}</li>
				))}
			</ul>
		</>
	)
}