import DateRange from '../DateRange'
import Image from './Image'

export default interface EntryProps {
  image: Image,
  title: string,
  country: string,
  googleMapsLink: string,
  dates: DateRange,
  text: string,
}
