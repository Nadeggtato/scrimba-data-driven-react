import Head from "next/head";
import Contact from '../components/Contact'
import JokesComponent from "@/components/JokesComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Driven React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contacts">
        <Contact cat={{
          name: 'Mr. Whiskerson',
          image: '/assets/images/whiskerson.png',
          number: '(212) 555-1234',
          email: 'mr.whiskaz@catnap.meow'
        }}/>
        <Contact cat={{
          name: 'Fluffykins',
          image: '/assets/images/fluffykins.jpg',
          number: '(212) 555-2345',
          email: 'fluff@me.com'
        }}/>
        <Contact cat={{
          name: 'Felix',
          image: '/assets/images/felix.png',
          number: '(212) 555-4567',
          email: 'thecat@hotmail.com'
        }}/>
        <Contact cat={{
          name: 'Pumpkin',
          image: '/assets/images/pumpkin.jpg',
          number: '(0800) CAT KING',
          email: 'pumpkin@scrimba.com'
        }}/>
      </div>
      <>
        <JokesComponent joke={{
          setup: 'I got my daughter a fridge for her birthday.',
          punchline: 'I can\'t wait to see her face light up when she opens it.'
        }}/>
        <JokesComponent joke={{
          setup: 'How did the hacker escape the police?',
          punchline: 'He just ransomware!'
        }}/>
        <JokesComponent joke={{
          setup: 'Why don\'t pirates travel on mountain roads?',
          punchline: 'Scurvy.'
        }}/>
        <JokesComponent joke={{
          setup: 'Why do bees stay in the hive in the winter?',
          punchline: 'Swarm'
        }}/>
        <JokesComponent joke={{
          setup: 'It\'s hard to explain puns to kleptomaniacs because they always take things literally.',
        }}/>
      </>
    </>
  );
}
