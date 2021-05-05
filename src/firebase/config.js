import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcSMklQhgYzmpo8_P_tgHO5kWBgpfNLQo",
    authDomain: "blog-setup-2b0f3.firebaseapp.com",
    projectId: "blog-setup-2b0f3",
    storageBucket: "blog-setup-2b0f3.appspot.com",
    messagingSenderId: "933011939645",
    appId: "1:933011939645:web:cf10d93f37822f88506554"
  };

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()

export { projectFirestore }