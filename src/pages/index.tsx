import Entry from "@/components/Entry";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="container">
        <Entry
          image={{src: 'https://scrimba.com/links/travel-journal-japan-image-url', alt: 'Mount Fuji'}}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/
            @35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!
            4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates={{from: new Date('January 12, 2021'), to: new Date('January 24, 2021') }}
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the
            single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
      </main>
    </>
  );
}
