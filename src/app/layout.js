import Header from "@/components/header"
import "./globals.css"
import SearchContextProvider from "@/context/filteredList"

export const metadata = {
  title: "Pokedex",
  description: "Gotta catch 'em all!",
}

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className="bg-background p-2 h-[100vh] overflow-y-hidden">
          <Header />
          <main className="">
              {children}
          </main>
        </body>
      </html>
    </SearchContextProvider>
  )
}
