var firebaseConfig = {
  apiKey: 'AIzaSyDxiC1VczHI3Y88GMoYRhC64aLsXgF_cQ0',
  authDomain: 'contactresponsiveform.firebaseapp.com',
  databaseURL: 'https://contactresponsiveform.firebaseio.com',
  projectId: 'contactresponsiveform',
  storageBucket: 'contactresponsiveform.appspot.com',
  messagingSenderId: '738910218407',
  appId: '1:738910218407:web:fe13cbba0dfd678b299382',
  measurementId: 'G-80LNQPZMJF'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// references messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputValue('name');
  var company = getInputValue('company');
  var email = getInputValue('email');
  var phone = getInputValue('phone');
  var message = getInputValue('message');

  saveMessage(name, company, email, phone, message);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  document.getElementById('contactForm').reset();
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
