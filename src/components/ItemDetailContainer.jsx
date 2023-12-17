import React from 'react'
import ItemDetail from './ItemDetail'
import {getDoc, doc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("ID del producto:", id);
    const fetchData = async () => {
      const db = getFirestore();
      const oneItem = doc(db, "productos", `${id}`);
      try {
        const snapshot = await getDoc(oneItem);
        
        if (snapshot.exists()) {
          const data = snapshot.data();
          setProducto(data);
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [id]
  
  );

 


  return (
    <>
      <ItemDetail producto={producto} />
      
    </>
  );
};

export default ItemDetailContainer;

