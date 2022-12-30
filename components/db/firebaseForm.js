// import { initializeApp } from "firebase/app";
// import { collection, doc, setDoc } from "firebase/firestore";
// import { getDatabase } from "firebase/database";
// import firebaseConfig from "./firebaseConfig";

// const db = getDatabase(app);


// const feedback = collection(db, "feedback");



// export default async function addQuestion({ children }) {
//     return (
//     await setDoc(doc(feedback, 'question'), {children}
//     ))
// }


import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

export default async function writeUserData(values) {
const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);
        console.log(db)
  return await set(ref(db, 'contact/'), values)
      .then(() => {
          alert("Thank you, for your contact!")
          return
})
.catch((error) => {
  alert(error)
});;
}