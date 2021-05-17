import "./App.css";
import { useCart } from "./context/state";
import { useState } from "react";

function App() {
  const addToCart = useCart((state) => state.addToCart);
  const items = useCart((state) => state.items);
  const totalPrice = useCart((state) => state.totalPrice);
  const removeFromCart = useCart((state) => state.removeFromCart);
  //   const counter = useStore(state=>state.counter);
  //   const increaseCounter = useStore(state=>state.increaseCounter);
  //   const decreaseCounter = useStore(state=>state.decreaseCounter);
  const [products, setProducts] = useState([
    { id: "1", name: "Bel-Aqua", price: 1.5 },
    { id: "2", name: "Exercise Books", price: 2 },
    { id: "3", name: "Voltic", price: 3 },
    { id: "4", name: "Marker", price: 1 },
    { id: "5", name: "Gobe", price: 5 },
  ]);

  return (
    <div className="App">
      {/* <h1>counter:{counter}</h1>
     <button onClick={increaseCounter}>+</button>
     <button onClick={decreaseCounter}>-</button> */}
      <h1>Products</h1>
      <hr />
      {products.map((product) => (
        <p>
          {product.name}-{product.price}
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </p>
      ))}
      <h1>Carts</h1>
      <h3>Total Price: {totalPrice}</h3>
      <hr />
      {items.length === 0 ? (
        <p>Not item in cart </p>
      ) : (
        items.map((item) => (
          <p>
            {item.name}-{item.price}-{item.qty}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </p>
        ))
      )}
    </div>
  );
}

export default App;
