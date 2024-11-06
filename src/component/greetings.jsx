const Greetings = () => {
  const greet = "Hey! Everyone";
  const date = new Date()
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date:{date.getDate()}</p>
    </div>
  );
};

export default Greetings;