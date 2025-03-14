import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Cat from '@/types/cat'

export default function Contact({cat}: {cat: Cat}) {
  return (
    <article className="contact-card">
      <img
        src={cat.image}
        alt={"Photo of " + cat.name}
      />
      <h3>{cat.name}</h3>
      <div className="info-group">
        <FontAwesomeIcon icon={faPhone}/>
        <p>{cat.number}</p>
      </div>
      <div className="info-group">
        <FontAwesomeIcon icon={faEnvelope}/>
        <p>{cat.email}</p>
      </div>
    </article>
  )
}
