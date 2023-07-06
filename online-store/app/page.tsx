/**
 * The Home function returns a main element with a maximum width and a background color, containing the
 * HomePage component.
 * @returns The Home component is returning a main element with the className "max-w-xs sm:max-w-xl
 * md:max-w-4xl mx-auto bg-gray-50". Inside the main element, it is rendering the HomePage component.
 */
import Image from 'next/image'
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <main className="max-w-xs sm:max-w-xl md:max-w-4xl mx-auto bg-gray-50">
      <HomePage />
    </main>
  )
}
