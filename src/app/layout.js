import Header from "@/components/header"
import "./globals.css"

export const metadata = {
  title: "Pokedex",
  description: "Gotta catch 'em all!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        <main
          className="bg-foreground rounded-xl w-[95%] mx-auto"
        >
          {children}
        </main>
      </body>
    </html>
  )
}
