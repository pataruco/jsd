import { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import Title from '../components/title';
import Loading from '../pages/loading';

// Lessons
// Path: week-n/lesson-n
export const lessonRoutes = [
  {
    path: '/week-1/lesson-0',
    component: () => (
      <>
        <Title week={1} lesson={0} />
        <SlidesDeck slidesDeckName="00-installfest" />
      </>
    ),
  },
  {
    path: '/week-1/lesson-1',
    component: () => (
      <>
        <Title week={1} lesson={1} />
        <SlidesDeck slidesDeckName="01-the-command-line-data-types" />
      </>
    ),
  },
  {
    path: '/week-2/lesson-2',
    component: () => (
      <>
        <Title week={2} lesson={2} />
        <SlidesDeck slidesDeckName="02-arrays-loops" />
      </>
    ),
  },
  {
    path: '/week-2/lesson-3',
    component: () => (
      <>
        <Title week={2} lesson={3} />
        <SlidesDeck slidesDeckName="03-conditionals-functions" />
      </>
    ),
  },
  {
    path: '/week-3/lesson-4',
    component: () => (
      <>
        <Title week={3} lesson={4} />
        <SlidesDeck slidesDeckName="04-objects-json" />
      </>
    ),
  },
  {
    path: '/week-3/lesson-5',
    component: () => (
      <>
        <Title week={3} lesson={5} />
        <SlidesDeck slidesDeckName="05-slackbot-lab" />
      </>
    ),
  },
  {
    path: '/week-4/lesson-6',
    component: () => (
      <>
        <Title week={4} lesson={6} />
        <SlidesDeck slidesDeckName="06-the-dom" />
      </>
    ),
  },
  {
    path: '/week-4/lesson-7',
    component: () => (
      <>
        <Title week={4} lesson={7} />
        <SlidesDeck slidesDeckName="07-dom-events" />
      </>
    ),
  },
];

// Weeks
// Path: week-n
export const weeks = new Array(4) // Set number of weeks
  .fill(1)
  .map((item, i) => item + i);

export const weekRoutes = weeks.map((weekNumber) => ({
  path: `/week-${weekNumber}`,
  component: () => {
    const Content = lazy(() => import(`../pages/weeks/${weekNumber}`));
    return (
      <>
        <Title week={1} />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
}));

// Bonus lessons
// Path: /bonus-lessons/n
export const bonusLessonRoutes = [
  {
    path: '/bonus-lessons/installfest-macos',
    component: () => (
      <>
        <Title title="Bonus Lesson | Installfest macOS" />
        <SlidesDeck slidesDeckName="bonus-lesson-installfest-macos" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/installfest-windows',
    component: () => (
      <>
        <Title title="Bonus Lesson | Installfest Windows" />
        <SlidesDeck slidesDeckName="bonus-lesson-installfest-windows" />
      </>
    ),
  },
  {
    path: '/bonus-lessons/jquery',
    component: () => (
      <>
        <Title title="Bonus Lesson | jQuery" />
        <SlidesDeck slidesDeckName="bonus-lesson-jquery" />
      </>
    ),
  },
];

// Final project
// Path: /final-project-brief
export const FinalProjectRoute = {
  path: '/final-project-brief',
  component: () => {
    const Content = lazy(() => import('../pages/final-project-brief'));
    return (
      <>
        <Title title="Final project brief" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};

// Bonus lessons pags
// Path: //bonus-lessons
export const BonusLessonsRoute = {
  path: '/bonus-lessons',
  component: () => {
    const Content = lazy(() => import('../pages/bonus-lessons'));
    return (
      <>
        <Title title="Bonus Lessons" />
        <Suspense fallback={<Loading />}>
          <Content />
        </Suspense>
      </>
    );
  },
};
