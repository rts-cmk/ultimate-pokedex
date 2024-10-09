// src/components/pokeList.js

import Link from "next/link"

export default function PokeList({pokemon}) {
	return (
		<ul>
			{pokemon.map(pokemon => (
				<li key={pokemon.name}>
					<Link href={"/pokemon/" + pokemon.name}>{pokemon.name}</Link>
				</li>
			))}
		</ul>
	)
}