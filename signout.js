const firebaseConfig = {
    apiKey: "AIzaSyA_Dq76EZ_lU-HBDZAgY9qP5mO0PzwMyHk",
    authDomain: "getfit-bb42f.firebaseapp.com",
    projectId: "getfit-bb42f",
    storageBucket: "getfit-bb42f.appspot.com",
    messagingSenderId: "1023801549901",
    appId: "1:1023801549901:web:6fc99a74f3ece3cc16a804"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

console.log(auth);

auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;

        var users = document.getElementById("user");
        var text = document.createTextNode(email);
        
        users.appendChild(text);

        console.log(users);
        // is signed in
    }   else {
        // no user signed in
        alert("user not authenciated, kindly login or signup");
        window.location = "index.html";
    }
});

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
    // Prevent Default Submission Behaviour
    e.preventDefault();
    console.log("clicked");

    auth.signOut();
    alert("Signed Out");
    window.location = "index.html";
});