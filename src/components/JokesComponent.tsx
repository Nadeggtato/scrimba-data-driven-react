import JokesProps from "@/types/props/jokes-componenet"

export default function JokesComponent(props: JokesProps) {
  return (
    <div>
      <strong>{ props.joke.setup }</strong>
      { props.joke.punchline && <p>{props.joke.punchline}</p> }
    </div>
  )
}
