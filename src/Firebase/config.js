import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyB5y1EKZgeA_z2GxVvGqTqOu0CMiqJSQ2o",
        authDomain: "cadastro-de-provas-gama.firebaseapp.com",
        projectId: "cadastro-de-provas-gama",
    })
}

export default firebase
