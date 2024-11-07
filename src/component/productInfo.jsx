const ProductInfo = () => {
    const product={
        name:'Laptop',
        price:1200,
        availabilty:'In Stock'
    };
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Availabilty: {product.availabilty}</p>
    </div>
  );
};

export default ProductInfo;