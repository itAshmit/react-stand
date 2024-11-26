const Product=()=>{
    return(
        <Pro
        name="Chocolate"
        price={5}
        />
    );
};

const Pro=(props)=>{
    return(
    <section>
        <h1>{props.name}</h1>
        <h2>${props.price}</h2>
    </section>
    )
}

export default Product;