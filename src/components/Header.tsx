import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faEarthAmericas}/>
      <h1 className={inter.className}>my travel journal.</h1>
    </header>
  )
}
