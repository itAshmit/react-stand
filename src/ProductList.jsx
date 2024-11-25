const ProductList = () => {
    const ProductLists=[{
        ID:1,
        Name:"Phone",
        Price:"45k"
    },{
        ID:2,
        Name:"Laptop",
        Price:"79k"
    },{
        ID:3,
        Name:"Tablet",
        Price:"30k"
    }]
  return (
    <div>
      {ProductLists.map(({ID,Name,Price})=>(
        <ul key={ID}>
            <li>ID: {ID}</li>
            <li>Name: {Name}</li> 
            <li>Price: {Price}</li>
        </ul>
      ))}
    </div>
  )
};

export default ProductList;