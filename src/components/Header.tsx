import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faEarthAmericas}/>
      <h1>My Travel Journal</h1>
    </header>
  )
}
