// src/components/pokemon.js
import Link from "next/link";

export default function Pokemon({pokemon}) {

	const typeColors = {
		normal: 'bg-normal',
        grass: 'bg-grass',
        poison: 'bg-poison',
		bug: 'bg-bug',
        dark: 'bg-dark',
        dragon:'bg-dragon',
		electric: 'bg-electric',
		fairy: 'bg-fairy',
		fighting: 'bg-fighting'

	};
	return (
		<>
			
			<h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
			<img src={pokemon.sprites.other["official-artwork"].front_default} />
			<ul className="flex gap-4">
				{pokemon.types.map(object => (
					<li
						key={object.type.name}
						className={`${typeColors[object.type.name] || 'bg-gray-500'} rounded-full px-2`}
					>
						{object.type.name}
					</li>
				))}
			</ul>
			<h3 className="font-bold mb-2 mt-6 text-2xl">Abilities</h3>
			<ul>
				{pokemon.abilities.map((object) => (
					<li key={object.ability.name}>{object.ability.name}</li>
				))}
			</ul>
			<h3 className="font-bold mb-2 mt-6 text-2xl">Moves</h3>
			<ul>
				{pokemon.moves.map((object) => (
					<li key={object.move.name}>{object.move.name}</li>
				))}
			</ul>
		</>
	)
}