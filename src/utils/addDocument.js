import { db } from '../firebase/config';
import firebase from '../firebase/config';
export default function addDocument(colectionName, data) {
  const query = db.collection(colectionName);
  query.add({
    ...data,
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
