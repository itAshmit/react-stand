//import Header from "./component/header";
//import Main from "./component/mainn";
//import Footer from "./component/footer";
//import Article from "./component/article";
//import WelcomeMessage from "./component/WelcomeMessage";
//import JSxrules from "./component/JSxrules";
//import Greetings from "./component/greetings";
//import Userlist from "./component/userlist";
//import ProductInfo from "./component/productInfo";
//import ProductList from "./ProductList";
//import Apps from "./component/Apps";
//import Product from "./component/Product";
import Weather from "./component/weather";
import UserStatus from "./component/UserStatus";
function App() {
  return (
    <div>
      {/*<Header/>
            <Main/>
            <Article/>
            <Footer/>
            <WelcomeMessage/>
            <JSxrules/>
            <Greetings/>
      <ProductInfo />
      <Userlist />
      <ProductList/>
      <Apps/>
      <Product/> */}
      <Weather/>
      <UserStatus loggedIn={true} isAdmin={false}/>
    </div>
  );
}

export default App;