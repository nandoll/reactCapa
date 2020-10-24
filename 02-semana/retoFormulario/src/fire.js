import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDK0in1EB38VeMFLam9kW5vR8egmTaU2Ek",
    authDomain: "local-reactjs.firebaseapp.com",
    databaseURL: "https://local-reactjs.firebaseio.com",
    projectId: "local-reactjs",
    storageBucket: "local-reactjs.appspot.com",
    messagingSenderId: "716414057509",
    appId: "1:716414057509:web:226d104bffa4ae904413cc"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire