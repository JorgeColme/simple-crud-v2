import { db } from './firebase';
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where } from "firebase/firestore";
import { async } from '@firebase/util';

const collectionName = 'items';
const itemsCollection = collection(db, collectionName);

export const savePersonName = async (name) => {
    console.log('first')
    await addDoc(collection(db, 'persons'), { name })
}

export const getPersons = async () => {
    const result = await getDocs(query(collection(db, 'persons')));
    return result
}

export const deletePerson = async (id) => {
    await deleteDoc(doc(db, 'persons', id))
}