import {
  collection,
  //Muchos
  getDocs,
  where,
  //Uno
  getDoc,
  doc,
  //busquedas
  query,
  limit,
  addDoc,
  updateDoc,
  writeBatch,
  increment,
  deleteDoc
} from "firebase/firestore";

import { db } from "./config";

const productsRef = collection(db, "Items");

export const getProducts = async (categoria) => {
  const products = [];

  const q = categoria
    ? query(productsRef, where("categoria", "==", categoria))
    : productsRef;

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  return products;
};

export const getProduct = async (productId) => {
  const document = doc(db, "Items", productId);

  const docSnap = await getDoc(document);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }

  return null;
};

export const updateProduct = async (id, item) => {
  const productDoc = await updateDoc(doc(db, "Items", id), item);
  return;
};

export const updateManyProducts = async (items) => {
  const batch = writeBatch(db);


  items.forEach(({id, qty})=>{
    const docRef = doc(db, "Items", id)
    batch.update(docRef, {stock: increment(-qty)})
  })


  
  batch.commit();

};

export const deleteProduct = async (id) => {
  const docRef = doc(db, "Items", id)
  const element =  await deleteDoc(docRef)
}