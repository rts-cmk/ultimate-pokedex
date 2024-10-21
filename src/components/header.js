import Image from "next/image"
import Link from "next/link"
import Pokeball from "@/images/pokeball.svg"
import SearchForm from "./searchForm"

export default function Header() {
	return (
		<header className="text-foreground px-4 py-6">
			<Link href="/" className="flex gap-4 mb-2 items-center">
				<Image src={Pokeball} className="size-8"/>
				<span className="text-3xl font-bold">Pokédex</span>
			</Link>
			<SearchForm />
		</header>
	)
}
