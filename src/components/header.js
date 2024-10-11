import Image from "next/image"
import Link from "next/link"
import Pokeball from "@/images/pokeball.svg"

export default function Header() {
	return (
		<header className="text-foreground px-4 py-6">
			<Link href="/" className="flex gap-4 mb-2 items-center">
				<Image src={Pokeball} className="size-8"/>
				<span className="text-3xl font-bold">Pokédex</span>
			</Link>
			<form action="/searchresult" className="flex">		
				<input type="search" name="search" id="search" placeholder="Search" className="p-3 ps-12 w-full rounded-full text-black custom-shadow-inner" />	
			</form>
		</header>
	)
}