// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_Dq76EZ_lU-HBDZAgY9qP5mO0PzwMyHk",
    authDomain: "getfit-bb42f.firebaseapp.com",
    projectId: "getfit-bb42f",
    storageBucket: "getfit-bb42f.appspot.com",
    messagingSenderId: "1023801549901",
    appId: "1:1023801549901:web:6fc99a74f3ece3cc16a804"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();

//   Signup Function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) => {
    // Prevent Default Form Submission Behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user", user.email);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code", errorCode);
        console.log("error Message", errorMessage);
        alert(errorMessage);
    });
});

let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
    // Prevent Default Form Submission Behaviour
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user", user.email);
        window.location = "home.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // alert("error code", errorCode)
        alert(errorMessage);
    });
});

// Lifecycle hooks
auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;

        var users = document.getElementById("user");
        var text = document.createTextNode(email);

        users.appendChild(text);

        console.log(users);
        // is signed in
    }else {
        // no user signed in
        // window.location = "index.html;"
    }
})