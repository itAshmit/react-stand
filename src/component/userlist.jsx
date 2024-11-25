const Userlist = () => {
    const users=[{Id:11,Name:"Alice",Age:23
    },{Id:12,Name:"Anthery",Age:25},{Id:13,Name:"John",Age:21}]
  return (
    <div>
      {users.map(({Id, Name, Age }) => (
        <ul key={Math.random()}>
            <li>ID: {Id}</li>
            <li>NAME: {Name}</li>
            <li>AGE: {Age}</li>
        </ul>
      ))}
    </div>
  )
}

export default Userlist;