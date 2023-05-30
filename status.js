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

const container = document.querySelector('.container');
const slots = document.querySelectorAll('.container .box:not(.booked)');

populateUI();

function updateSelectedCount() {
  const selectedSlots = document.querySelectorAll('.container .box.selected');
  const slotsIndex = [...selectedSlots].map((box) => [...slots].indexOf(box));
  localStorage.setItem('selectedSlots', JSON.stringify(slotsIndex));
  //copy selected seats into arr
  // map through array
  //return new array of indexes
}
// get data from localstorage and populate ui
function populateUI() {
  const selectedSlots = JSON.parse(localStorage.getItem('selectedSlots'));
  if (selectedSlots !== null && selectedSlots.length > 0) {
    slots.forEach((box, index) => {
      if (selectedSlots.indexOf(index) > -1) {
        box.classList.add('selected');
      }
    });
  }
}

//Seat click event
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('box') && !e.target.classList.contains('booked')) {
      e.target.classList.toggle('selected');
      
        updateSelectedCount();      
  }
  });

firebase.initializeApp(firebaseConfig);
 var slotRef = firebase.database().ref('slot');

document.getElementById('parking').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();  
    
    
    const x  = document.querySelector('.container .box.selected');
    var slotNo = [x].map((box) => [slots].indexOf(box));
    
    
     saveMessage(slotNo); 
 }

function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(slotNo){
  var newSlotRef = slotRef.push();
  newMessageRef.set({
    slotNo:slotNo
  });
}


// // // Create a reference to the parking slot information
//  var slotsRef = firebase.database().ref('slot');

// // /// Add event listener to slot elements
//  var slot = document.getElementsByClassName('box');
//  for (var i = 0; i < slot.length; i++) {
//    slot[i].addEventListener('click', function(event) {
//      // Check if the slot is available
//      if (!this.classList.contains('booked')) {
//        // Update the slot status in the database to 'booked'
//        slotsRef.child(this.id).set({
//        status: 'booked'   
//        });

//        // Update the slot status on the webpage
//        this.classList.add('selected');
//        this.innerHTML = 'Selected';

//        updateSelectedCount(); 
//      }
//    });
//  }

// // Add event listener to booked slot elements
// var bookedSlots = document.getElementsByClassName('booked');
// for (var i = 0; i < bookedSlots.length; i++) {
//   bookedSlots[i].addEventListener('click', function(event) {
    
//     // Update the slot status in the database to 'available'
//       slotsRef.child(this.id).set({
//       status: 'available'
//     });

//     // Update the slot status on the webpage
//     this.classList.remove('booked');
//     this.innerHTML = 'Available';
  
//   });
// }



// // Fetch the status of the slots from Firebase
// slotsRef.on('value', function(snapshot) {
//   snapshot.forEach(function(childSnapshot) {
//     var slotId = childSnapshot.key;
//     var slotStatus = childSnapshot.val().status;
//     var slotElement = document.getElementById(slotId);


//     // Update the slot status on the webpage
//     if (slotStatus === 'selected') {
//       slotElement.classList.remove('selected');
//       slotElement.classList.add('booked');
//       slotElement.innerHTML = 'Booked';
//     } else {
//       slotElement.classList.remove('booked');
//       slotElement.innerHTML = 'Available';
//     }
//   });
// });





