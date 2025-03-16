import EntryProps from "@/types/props/EntryProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Entry(props: EntryProps)
{
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.image.src} alt={props.image.alt} className="main-image" />
      </div>
      <div className="info-container">
        <FontAwesomeIcon icon={faLocationDot}/>
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
        <p className="entry-title">{props.title}</p>
        <p className="trip-dates">
          {props.dates.from.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
          &nbsp;-&nbsp;
          {props.dates.to.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
        </p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  )
}
