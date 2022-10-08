import { app } from "./init";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

const dbRef = ref(getDatabase());

const db = getDatabase();
const starCountRef = ref(db, 'dua/0');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  updateStarCount(postElement, data);
});