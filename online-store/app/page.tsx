import Image from 'next/image'
import HomePage from './components/HomePage'
import Search from './components/Search'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Navbar />
      <HomePage />
      <Search />
    </main>
  )
}
