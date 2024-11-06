const JSxrules = () => {
  return (
    <div>
      <h1>JSX Rules</h1>
      <p style={{
        backgroundColor:'black',
        color:'pink'
      }}>
        <li>JSX must return a <b>single parent element</b></li>
        <li>JSX element must be <b>properly closed</b></li>
        <li>JSX attributes are written using <b>camelCase</b> e.g, <mark>className</mark> instead <mark>class</mark></li>
      </p>
    </div>
  );
};

export default JSxrules;