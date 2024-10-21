// src/components/pokeList.js
"use client"
import { filteredContext } from "@/context/filteredList"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export default function PokeList({pokemon}) {
	const { state } = useContext(filteredContext)
	const filteredList = pokemon.filter((pokemon) => pokemon.name.includes(state.toLowerCase()))

	return (
		<section className="bg-foreground rounded-xl w-full mx-auto p-2 h-[76vh] overflow-y-scroll">
			<ul className="grid grid-cols-3 gap-3">
				{filteredList.map(pokemon => {
					// ["https:","","pokeapi.co","api","v2","pokemon","1"]
					let id = pokemon.url.slice(0, -1).split("/").pop()
					return (
						<li key={pokemon.name} className="p-2 rounded-lg text-center shadow-[0_3px_6px_2px_rgba(0,0,0,0.3)] relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:rounded-lg before:bg-gray-200">
							<Link href={"/pokemon/" + pokemon.name}>
							<Image
								blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAdsAAAHbCAQAAAApc/i/AAAD7UlEQVR42u3TQQkAAAwDsdW/6Wnos5BIOLgcMCYSgG0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLdgWsC1gW7AtYFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BWwLtgVsC9gWbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbYSgG0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLdgWsC1gW7AtYFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BWwLtgVsC9gWbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbYSgG0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLdgWsC1gW7AtYFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BWwLtgVsC9gWbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbYSgG0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLdgWsC1gW7AtYFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BWwLtgVsC9gWbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbYSgG0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLdgWsC1gW7AtYFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbaAbQHbgm0B2wK2BWwLtgVsC9gWbAvYFrAt2BawLWBbsC1gW8C2YFvAtoBtwbYSgG0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLdgWsC1gW7AtYFvAtoBtwbaAbQHbgm0B2wK2BdsCtgVsC7YFbAvYFmwL2BawLWBbsC1gW8C2YFvAtoBtwbaAbYHSA8AkAdy6ZFnsAAAAAElFTkSuQmCC"
								placeholder="blur"
								height={475}
								width={475}
								className="relative z-10 mt-4"
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
								alt={pokemon.name}
							/>
							<span className="relative z-10 capitalize">{pokemon.name}</span>
							<span className="absolute top-2 right-2 z-20 text-sm text-gray-400">#{id.padStart(4, "0")}</span>
							</Link>	
						</li>
					)
				})}
			</ul>
		</section>
	)
}