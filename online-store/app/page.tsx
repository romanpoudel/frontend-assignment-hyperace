import Image from 'next/image'
import HomePage from './components/HomePage'
import Search from './components/Search'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto bg-gray-50">
      <HomePage />
      <Search />
    </main>
  )
}
