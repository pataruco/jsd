'use strict';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD8hWUGcBcROU2bJuljo_YzNvELe2Sz1Zs',
  authDomain: 'london-jsd-14-test.firebaseapp.com',
  projectId: 'london-jsd-14-test',
  storageBucket: 'london-jsd-14-test.appspot.com',
  messagingSenderId: '867039899555',
  appId: '1:867039899555:web:b83f1a0ac8093a2761f416',
  databaseURL:
    'https://london-jsd-14-test-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// https://firebase.google.com/docs/reference/js/firebase.database
const db = getDatabase(app);

// create a section for messages data in your db
const messagesDatabase = ref(db, 'messages');

/**
 * CREATE the messages in the database
 */

// Element
const formElement = document.querySelector('#message-form');
const inputTextElement = document.querySelector('#message');

// Event
formElement.addEventListener('submit', createMessage);

// Execution
function createMessage(event) {
  // by default a form submit reloads the DOM which will subsequently reload all our JS
  // to avoid this we preventDefault()
  event.preventDefault();

  // grab user message input
  const { value: message } = inputTextElement;

  // clear message input (for UX purposes)
  inputTextElement.textContent = '';

  // use the push method to save data to the messages
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference#push
  push(messagesDatabase, {
    message,
    votes: 0,
  });
}

/**
 * READ messages in the database
 */

// Elements

const messageBoard = document.querySelector('.message-board');

// Event

window.addEventListener('DOMContentLoaded', getMessages);

function getMessages(_event) {
  onValue(messagesDatabase, (snapShot) => {
    const messages = snapShot.val();
    renderMessages(messages);
  });
}

function renderMessages(messages) {
  messageBoard.innerHTML = '';

  Object.entries(messages).forEach(([key, messageItem]) => {
    const { message, votes } = messageItem;
    const li = `<li data-id="${key}">
          ${message}
          ${votes}
          <i class="fa fa-trash pull-right delete"></i>
          <i class="fa fa-thumbs-down pull-right"></i>
          <i class="fa fa-thumbs-up pull-right"></i> 
        </li>`;
    messageBoard.innerHTML = messageBoard.innerHTML + li;
  });
}
