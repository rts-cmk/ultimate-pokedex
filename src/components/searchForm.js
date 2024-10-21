"use client"

import { filteredContext } from "@/context/filteredList"
import { useContext } from "react"

export default function SearchForm() {
	const { setState } = useContext(filteredContext)

	function handler(event) {
		const keyword = event.target.value
		setState(keyword)
	}

	return (
		<form action="/searchresult" className="flex">
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search"
				onChange={handler}
				className="p-3 ps-12 w-full rounded-full text-black custom-shadow-inner"
			/>
		</form>
	)
}
