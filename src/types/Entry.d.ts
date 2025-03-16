import DateRange from '../DateRange'
import Image from './Image'

export default interface Entry {
  id: number,
  image: Image,
  title: string,
  country: string,
  googleMapsLink: string,
  dates: DateRange,
  text: string,
}
