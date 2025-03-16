import Joke from "@/components/Jokes";
import jokes from "@/data/jokes";

export default function Home() {
  const jokesData = jokes.map((joke) => {
    return <Joke joke={{ setup: joke.setup, punchline: joke.punchline }}/>
  })

  return (
    <>
      { jokesData }
    </>
  );
}
