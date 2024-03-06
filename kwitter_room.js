
var firebaseConfig = {
      apiKey: "AIzaSyBn1TGICLZc7mqgDNLnqC_SkwbDiekZcFA",
      authDomain: "kwitter-a1fe6.firebaseapp.com",
      databaseURL: "https://kwitter-a1fe6-default-rtdb.firebaseio.com",
      projectId: "kwitter-a1fe6",
      storageBucket: "kwitter-a1fe6.appspot.com",
      messagingSenderId: "745649170078",
      appId: "1:745649170078:web:f4268f679301fa9a843d8f"
    };
    
    // Initialize Firebase
  firebase. initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name");
  function addRoom()
  {
    room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html"
} 

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html"
}