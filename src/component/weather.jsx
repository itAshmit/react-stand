const Weather = () => {
  let temp=27   ;
  if(temp<15){
    return <h1>It's Cold outside</h1>
  } else if(temp>15 && temp<25){
    return <h1>It's Nice outside</h1>
  }else{
    return <h1>It's Hot outside</h1>
  }
}

export default Weather;