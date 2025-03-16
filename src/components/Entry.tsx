import EntryProps from "@/types/props/EntryProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Entry(props: EntryProps)
{
  const entryData = props.entries.map((entry) => {
    return (
      <article className="journal-entry" key={entry.id}>
        <div className="main-image-container">
          <img src={entry.image.src} alt={entry.image.alt} className="main-image" />
        </div>
        <div className="info-container">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span className="country">{entry.country}</span>
          <a href={entry.googleMapsLink} target="_blank">View on Google Maps</a>
          <p className="entry-title">{entry.title}</p>
          <p className="trip-dates">
            {entry.dates.from.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
            &nbsp;-&nbsp;
            {entry.dates.to.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
          </p>
          <p className="entry-text">{entry.text}</p>
        </div>
      </article>
    )
  })

  return (
    <>{ entryData }</>
  )
}
