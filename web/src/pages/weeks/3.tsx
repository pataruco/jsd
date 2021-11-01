import Week from '../../components/week';

const resources = [
  [
    'JavaScript Object Basics',
    'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics',
  ],
  [
    'Objects - The Modern JavaScript Tutorial',
    'https://javascript.info/object',
  ],
  [
    'Back To Basics: JavaScript Object Syntax',
    'https://www.sitepoint.com/back-to-basics-javascript-object-syntax/',
  ],
  [
    'JSON',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
  ],
];

const weekConfig = {
  firstLessonTitle: 'Objects and JSON',
  resources,
  secondLessonTitle: 'Slack Bot lab 🤖 🧪',
  weekNumber: 3,
  // homeworkPath: '/week-3/lesson-6#27',
};

const Week3 = () => <Week {...weekConfig} />;

export default Week3;
