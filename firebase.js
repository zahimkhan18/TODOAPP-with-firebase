  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getFirestore, collection, addDoc,doc,updateDoc, getDocs,deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAh61hBgHnt6okZ9ddzlClKPeWAowipj5Q",
    authDomain: "todo-app-2aae4.firebaseapp.com",
    projectId: "todo-app-2aae4",
    storageBucket: "todo-app-2aae4.appspot.com",
    messagingSenderId: "803830379907",
    appId: "1:803830379907:web:36f36796f05991da4772b6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 
// Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  export{
    app,
    db,
    collection,
    doc,
    addDoc,
    updateDoc,
    getDocs,
    deleteDoc
  }

