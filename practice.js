var firebaseConfig = {
    apiKey: "AIzaSyAW6dEWavzQFf8fBOfDDku_iWRPBGiVuaA",
    authDomain: "kwitter-5551b.firebaseapp.com",
    databaseURL: "https://kwitter-5551b-default-rtdb.firebaseio.com",
    projectId: "kwitter-5551b",
    storageBucket: "kwitter-5551b.appspot.com",
    messagingSenderId: "511757558449",
    appId: "1:511757558449:web:5e874c2243c8c0efd1f890"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    })
}