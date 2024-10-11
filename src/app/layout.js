import Header from "@/components/header"
import "./globals.css"

export const metadata = {
  title: "Pokedex",
  description: "Gotta catch 'em all!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background p-2">
      <Header />
      <main className="bg-foreground rounded-xl w-full mx-auto p-2 min-h-[80vh]">
          {children}
          </main>
      </body>
    </html>
  )
}
