
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCT4K9Q-St0T-L86HXS6PUU1H272YdGFU4",
      authDomain: "practice-55ae3.firebaseapp.com",
      databaseURL: "https://practice-55ae3-default-rtdb.firebaseio.com",
      projectId: "practice-55ae3",
      storageBucket: "practice-55ae3.appspot.com",
      messagingSenderId: "196614530331",
      appId: "1:196614530331:web:ac8e9adfdfea9b2ece5fbe"
    };
    
    
   
   firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addroom(){
           room_name=document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
           localStorage.setItem("room_name",room_name);
           window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name="+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
      function redirecttoroomname(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}