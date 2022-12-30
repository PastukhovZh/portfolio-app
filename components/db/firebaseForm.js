import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { nanoid } from 'nanoid'

export default async function writeUserData(values) {
const app = initializeApp(firebaseConfig);
const id = nanoid()
    const db = getDatabase(app);
  return await set(ref(db, 'contact/' + id ), values)
      .then(() => {
          alert("Thank you for your feedback! I will answer you shortly.")
          return
})
.catch((error) => {
  alert(error)
});;
}