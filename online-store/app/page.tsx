import Image from 'next/image'
import HomePage from './components/HomePage'
import Search from './components/Search'
import ProductDetails from './components/ProductDetails'

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <Search />
      <ProductDetails />
    </main>
  )
}
