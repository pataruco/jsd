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

// create a reference to our database
const db = firebase.database();

(function () {
  document
    .querySelector('#message-form')
    .addEventListener('submit', function (e) {
      e.preventDefault();

      const textarea = document.querySelector('#message');
      const message = textarea.value;
      textarea.value = '';

      const messagesReference = db.ref('messages');

      messagesReference.push({
        message: message,
        votes: 0,
      });
      console.log(messagesReference);
    });
  getPosts();
})();

function getPosts() {
  db.ref('messages').on('value', function (results) {
    const messages = results.val();
    const messageBoard = document.querySelector('.message-board');
    const messageElements = [];

    for (let msg in messages) {
      const message = messages[msg].message;
      const votes = messages[msg].votes;

      const messageListElement = document.createElement('li');
      messageListElement.setAttribute('data-id', msg);
      messageListElement.textContent = message;
      messageElements.push(messageListElement);

      const deleteElement = document.createElement('i');
      deleteElement.className = 'fa fa-trash pull-right delete';
      deleteElement.addEventListener('click', () => {
        db.ref('messages/' + msg).remove();
      });

      const upvoteElement = document.createElement('i');
      upvoteElement.className = 'fa fa-thumbs-up pull-right';

      const downvoteElement = document.createElement('i');
      downvoteElement.className = 'fa fa-thumbs-down pull-right';

      messageListElement.append(deleteElement);
      messageListElement.append(upvoteElement);
      messageListElement.append(downvoteElement);
    }

    messageBoard.innerHTML = '';
    messageElements.forEach((element) => {
      messageBoard.appendChild(element);
    });
  });
}
