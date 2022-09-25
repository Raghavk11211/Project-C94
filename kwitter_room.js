const firebaseConfig = {
    apiKey: "AIzaSyAAmWbzJ0fWbpNikl7RpsNFnSR3-R6Etdc",
    authDomain: "letschat-de4ab.firebaseapp.com",
    databaseURL: "https://letschat-de4ab-default-rtdb.firebaseio.com",
    projectId: "letschat-de4ab",
    storageBucket: "letschat-de4ab.appspot.com",
    messagingSenderId: "600713173540",
    appId: "1:600713173540:web:e6619768070d515a1a16b1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
    window.location = "index.html"
}
