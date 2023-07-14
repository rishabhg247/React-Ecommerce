import React,{useState,useEffect} from "react";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import { CartContext } from "./pages/ProductPage";


function App() {
  const [cartItem, setCartItem] = useState([]);
  const [isCartOpen,setIsCartOpen] = useState(false)
  const addToCart = (item) => {
  for(let i=0;i<cartItem.length;i++){
    if(cartItem[i].id===item.id){cartItem[i].quantity+=item.quantity;setCartItem([...cartItem]);return;}
  }
  setCartItem([...cartItem,item]);
  };
  const toggleCart = (value) => {setIsCartOpen(value)};
  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {setCartItem(savedCart);
    }
  }, []);
//Locl storage not working properly...bcos if in cart ,item remove,in apps js useeffect will not run immidiately..
  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);
  return (
    <CartContext.Provider value={{ cartItem, addToCart,isCartOpen,toggleCart }}>
      <NavBar/>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="categories" element={<CategoryPage />}/>
        <Route path="categories/product/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />}/>
      </Routes>
      {!isCartOpen?<Footer/>:null}
    </CartContext.Provider>
  );
}

export default App;
