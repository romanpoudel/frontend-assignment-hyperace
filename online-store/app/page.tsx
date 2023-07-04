import Image from 'next/image'
import HomePage from './components/HomePage'
import Search from './components/Search'
import ProductDetails from './components/ProductDetails'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Navbar />
      <HomePage />
      <Search />
      <ProductDetails />
    </main>
  )
}
