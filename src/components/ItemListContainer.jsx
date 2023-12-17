import React, { useState, useEffect } from 'react';
import Itemlist from './Itemlist';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, "productos");

      try {
        const snapshot = await getDocs(itemsCollection);
        const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(docs);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    } else {
      reject("No se encontraron productos");
    }
  });

  mostrarProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  const filterProductos = productos.filter((producto) => producto.categoria === categoria);
  console.log(filterProductos)
  return (
    <div>
      <Itemlist productos={filterProductos} />
    </div>
  );
};

export default ItemListContainer;
