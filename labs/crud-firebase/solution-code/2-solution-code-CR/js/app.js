'use strict';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCqBuLm5kOAIOCjfy-woJDf34pvMHRcKfY',
  authDomain: 'jsd-12-test.firebaseapp.com',
  projectId: 'jsd-12-test',
  storageBucket: 'jsd-12-test.appspot.com',
  messagingSenderId: '1066246814692',
  appId: '1:1066246814692:web:a02f6555d18f7de0bc65f1',
  measurementId: 'G-2LNZZ4PQL2',
  databaseURL: 'https://jsd-12-test-default-rtdb.firebaseio.com/',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// https://firebase.google.com/docs/reference/js/firebase.database
const db = firebase.database();

// set up the messages in the database
(function () {
  document
    .querySelector('#message-form')
    .addEventListener('submit', function (event) {
      // by default a form submit reloads the DOM which will subsequently reload all our JS
      // to avoid this we preventDefault()
      event.preventDefault();

      // grab user message input
      const message = document.querySelector('#message').value;

      // clear message input (for UX purposes)
      document.querySelector('#message').textContent = '';

      // create a section for messages data in your db
      const messagesReference = db.ref('messages');

      // use the push method to save data to the messages
      // https://firebase.google.com/docs/reference/js/firebase.database.Reference#push
      messagesReference.push({
        message: message,
        votes: 0,
      });
      console.log(messagesReference);
    });
  getPosts();
})();

function getPosts() {
  // retrieve messages data when .on() initially executes
  // and when its data updates
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  // https://firebase.google.com/docs/database/web/read-and-write#listen_for_value_events
  // on listeners responds to clients every time the database changes
  db.ref('messages').on('value', function (results) {
    const messageBoard = document.querySelector('.message-board');
    let messages = [];

    const allMsgs = results.val();
    // iterate through results coming from database call; messages
    for (let msg in allMsgs) {
      const message = allMsgs[msg].message;
      const votes = allMsgs[msg].votes;

      // create message element
      const messageListElement = document.createElement('li');
      messageListElement.setAttribute('data-id', msg);
      messageListElement.textContent = message;
      // $messageListElement.attr('data-id', msg)
      // .text(message)

      // create delete element
      // DELETE: https://fontawesome.com/v4.7.0/icon/trash
      const deleteElement = document.createElement('i');
      deleteElement.className = 'fa fa-trash pull-right delete';

      // create up vote element
      // UP VOTE: https://fontawesome.com/v4.7.0/icon/thumbs-up
      const upvoteElement = document.createElement('i');
      upvoteElement.className = 'fa fa-thumbs-up pull-right';

      // create down vote element
      // DOWN VOTE: https://fontawesome.com/v4.7.0/icon/thumbs-down
      const downvoteElement = document.createElement('i');
      downvoteElement.className = 'fa fa-thumbs-down pull-right';

      messageListElement.appendChild(deleteElement);
      messageListElement.appendChild(upvoteElement);
      messageListElement.appendChild(downvoteElement);
      // messageBoard.appendChild(messageListElement);
      messages.push(messageListElement);
    }

    // remove lis to avoid dupes
    // .empty() is a jQuery method to remove all child nodes
    // http://api.jquery.com/empty/
    messageBoard.innerHTML = '';
    messages.forEach((element) => {
      messageBoard.append(element);
    });
  });
}