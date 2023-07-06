import Image from 'next/image'
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <main className="max-w-xs sm:max-w-xl md:max-w-4xl mx-auto bg-gray-50">
      <HomePage />
    </main>
  )
}
