import Week from '../../components/week';

const resources = [
  [
    'MDN: for...in',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in',
  ],
  [
    'MDN: prototype call ',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call',
  ],
];

const weekConfig = {
  firstLessonTitle: 'Prototypal Inheritance',
  resources,
  secondLessonTitle: 'Closures & this',
  weekNumber: 8,
};

const Week8 = () => <Week {...weekConfig} />;

export default Week8;
