import JokeProps from "@/types/props/JokeProps";

export default function Joke(props: JokeProps) {
  return (
    <>
      {props.joke.setup && <p className="setup">Setup: {props.joke.setup}</p>}
      <p className="punchline">Punchline: {props.joke.punchline}</p>
      <hr />
    </>
  )
}
