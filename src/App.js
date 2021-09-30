import { useEffect, useState } from "react";
import "./App.css";
import { Products, Navbar,Cart } from "./components";
import { commerce } from "./lib/commerce";
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId,quantity)=> {
    const {cart} = await commerce.cart.add(productId,quantity);

    setCart(cart);
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  
  const handleUpdateCartQty = async (productId,quantity) => {
    const {cart} = await commerce.cart.update(productId,{quantity});

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  }
  
  return (
    <Router>
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Switch>
        <Route exact path="/">
        <Products products={products} onAddToCart={handleAddToCart}/>
        </Route>
      <Route exact path="/cart">
      <Cart cart={cart}/>
      </Route>
    
      </Switch>
    
    </div>
    </Router>
  );
}

export default App;
