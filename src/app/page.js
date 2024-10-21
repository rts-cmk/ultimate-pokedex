import PokeList from "@/components/pokeList"

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500")
  const json = await response.json()

  return (
    <PokeList pokemon={json.results} />
  )
}
