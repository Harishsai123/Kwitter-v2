var firebaseConfig = {
    apiKey: "AIzaSyCl3f3iPDsFMLlFJSekco8uHm9-8mHptlM",
    authDomain: "kwitter---2-5368f.firebaseapp.com",
    databaseURL: "https://kwitter---2-5368f-default-rtdb.firebaseio.com",
    projectId: "kwitter---2-5368f",
    storageBucket: "kwitter---2-5368f.appspot.com",
    messagingSenderId: "986834429952",
    appId: "1:986834429952:web:beeec7690c29b50eb450e5",
    measurementId: "G-ZXV86BGBKK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("very_warm_welcome").innerHTML = "Welcome MR/MRS " + user_name + "!";
  function addroom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_page.html";
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room name -" + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
         document.getElementById("output").innerHTML +=row;
  
        });});}
  
  
        getData();
 

      function redirecttoroomname(name) {
          console.log(name)
          localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";
      }