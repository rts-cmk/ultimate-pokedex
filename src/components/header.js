import Image from "next/image"
import Link from "next/link"
import Pokeball from "@/images/pokeball.svg"

export default function Header() {
	return (
		<header className="text-foreground">
			<Link href="/" className="flex gap-4">
				<Image src={Pokeball} />
				<span className="text-[24px] font-semibold">Pokédex</span>
			</Link>
		</header>
	)
}