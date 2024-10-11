// src/components/pokeList.js

import Link from "next/link"

export default function PokeList({pokemons}) {

	return (
		<ul className="grid grid-cols-3 gap-3">
			{pokemons.map(pokemon => {
				// ["https:","","pokeapi.co","api","v2","pokemon","1"]
				let id = pokemon.url.slice(0, -1).split("/").pop()
				return (<li key={pokemon.name} className="p-2 rounded-lg text-center shadow-[0_3px_6px_2px_rgba(0,0,0,0.3)] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:rounded-lg before:bg-gray-200">
					<Link href={"/pokemon/" + pokemon.name}>
					<img className="relative z-10 mt-4" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemon.name} />
					<span className="relative z-10 capitalize">{pokemon.name}</span>
					<span className="absolute top-2 right-2 z-20 text-sm text-gray-400">#{id.padStart(4, "0")}</span>
					
					</Link>
					
				</li>)
			})}
		</ul>
	)
}