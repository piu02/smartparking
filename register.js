const firebaseConfig = {
  apiKey: "AIzaSyCZqgNaCur43WVAqTKPsY6tt0vzd04oDMs",
  authDomain: "parkingdatabase-11904.firebaseapp.com",
  databaseURL: "https://parkingdatabase-11904-default-rtdb.firebaseio.com",
  projectId: "parkingdatabase-11904",
  storageBucket: "parkingdatabase-11904.appspot.com",
  messagingSenderId: "596226145491",
  appId: "1:596226145491:web:0fdbb82fd9fa26dec7a826",
  measurementId: "G-1KZ737H14T"
};

firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('info');
document.getElementById('form').addEventListener('submit', submitForm);



function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var slot = getInputVal('slot');
  var phone = getInputVal('phone');
  var alpha = getInputVal('alpha');

  // Save message
  saveMessage(fname, lname,slot, phone, alpha);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(fname, lname, slot, phone, alpha){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    slot:slot,
    phone:phone,
    alpha:alpha
  });
}














  


