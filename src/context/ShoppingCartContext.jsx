import React, { createContext, useState } from 'react';


export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [id, setId] = useState(null);

  const addItem = (product, quantity, productId) => {
    
    const existingProductIndex = cart.findIndex((item) => item.product.titulo === product.titulo);

    if (existingProductIndex !== -1) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + quantity,
        };
        console.log("Updated Cart:", updatedCart);
        return updatedCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity }]);
    }
  };

  const removeItem = (product, quantity = 1) => {
    const updatedCart = cart.map((item) => ({
      ...item,
      quantity: item.product.titulo === product.titulo ? Math.max(0, item.quantity - quantity) : item.quantity,
    }));
    console.log("Updated Cart:", updatedCart);
  
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };
  


  const clearCart = () => {
    setCart([]);
    setId(null); 
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, id }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
