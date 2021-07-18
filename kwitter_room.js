var firebaseConfig = {
      apiKey: "AIzaSyDgD45oF6ipawkUi1rqOwRXCts4c8MbIIw",
      authDomain: "kwitter-888a0.firebaseapp.com",
      databaseURL: "https://kwitter-888a0-default-rtdb.firebaseio.com",
      projectId: "kwitter-888a0",
      storageBucket: "kwitter-888a0.appspot.com",
      messagingSenderId: "213477576191",
      appId: "1:213477576191:web:9c7eb0b7a823ca4c0bebca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });

}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}