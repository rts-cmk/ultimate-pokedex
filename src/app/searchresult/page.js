import PokeList from "@/components/pokeList"


export default async function SearchResult ( { searchParams }) {

    //console.log(searchParams.search)
    const search = searchParams.search

const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
    const json = await response.json()

     const found = search ? json.results.filter((pokemon) => pokemon.name.includes(search.toLowerCase())) : null

    return found.length ? (
        <PokeList pokemons={found} />
    ) : (
        <p>No Pokemon found! Search again!</p>
    )
}