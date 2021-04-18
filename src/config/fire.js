import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCayuSx223kijb021JRUkHzjaniwyxAti4",
    authDomain: "testing-authentication-b1171.firebaseapp.com",
    projectId: "testing-authentication-b1171",
    storageBucket: "testing-authentication-b1171.appspot.com",
    messagingSenderId: "206725575878",
    appId: "1:206725575878:web:fcaa20edd8ec3caeb153c7",
    measurementId: "G-LH3CDQ88FE"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;
