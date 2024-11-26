const Apps=()=>{
    return(
      <Person
          Name="Asmit Dwivedi"
          Age={21}
      />
    );
  };
  
  const Person=(props)=>{
      return(
        <section>
          <h1>{props.Name}</h1>
          <p>{props.Age}</p>
        </section>
      )
  }

  export default Apps;