const firebaseConfig = {
    apiKey: "AIzaSyCX5Pp0-kHqkri7lbQIHxKFj7w9cEEY2Mc",
    authDomain: "c94-practice-97f23.firebaseapp.com",
    databaseURL: "https://c94-practice-97f23-default-rtdb.firebaseio.com",
    projectId: "c94-practice-97f23",
    storageBucket: "c94-practice-97f23.appspot.com",
    messagingSenderId: "332762340689",
    appId: "1:332762340689:web:257e375c74dd7d7a830770"
  };


//ADD YOUR FIREBASE LINKS

firebase.initializeApp(firebaseConfig);

function add_user(){
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user: " + user_name
    })
}