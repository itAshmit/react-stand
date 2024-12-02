const Greeting = ({timeOfDay}) => {
  return timeOfDay==="Morning"?<h1>Good Morning</h1>:<h1>Good Evening</h1>
}

export default Greeting;