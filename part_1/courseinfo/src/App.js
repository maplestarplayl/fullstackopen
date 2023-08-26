const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercises = [
    10,
    7,
    14
  ];
  return (
    <div>
      <Header name={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}
const Part = (props) => (
  <div>
    <p>
      Exercise name {props.part} Exercise Number {props.num}
    </p>
  </div>
)
const Header = (props) => (
  <div>
    <p>
      The name of this course is {props.name}
    </p>
  </div>
)
const Content = (props) => {
  const [part1, part2, part3] = props.parts
  const [exercises1, exercises2, exercises3] = props.exercises

  return (
    <div>
      <Part part={part1} num={exercises1} />
      <Part part={part2} num={exercises2} />
      <Part part={part3} num={exercises3} />
    </div>
  )
}
const Total = (props) => (
  <div>
    <p>
      Total Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  </div>
)
export default App