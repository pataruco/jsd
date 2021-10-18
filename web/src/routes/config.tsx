import React, { lazy, Suspense } from 'react';
import SlidesDeck from '../components/slides-deck';
import Title from '../components/title';
import Loading from '../pages/loading';

// Lessons
// Path: week-n/lesson-n

export const lessonRoutes = [
  {
    path: '/week-1/lesson-1',
    component: () => (
      <>
        <Title week={1} lesson={1} />
        <SlidesDeck slidesDeckName="00-installfest" />
      </>
    ),
  },
  {
    path: '/week-1/lesson-2',
    component: () => (
      <>
        <Title week={1} lesson={2} />
        <SlidesDeck slidesDeckName="01-the-command-line-data-types" />
      </>
    ),
  },
  // {
  //   path: '/week-2/lesson-3',
  //   component: () => (
  //     <>
  //       <Title week={2} lesson={3} />
  //       <SlidesDeck slidesDeckName="03-box-model" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-2/lesson-4',
  //   component: () => (
  //     <>
  //       <Title week={2} lesson={4} />
  //       <SlidesDeck slidesDeckName="04-css-selectors-specificity-float" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-3/lesson-5',
  //   component: () => (
  //     <>
  //       <Title week={3} lesson={5} />
  //       <SlidesDeck slidesDeckName="05-flexbox" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-3/lesson-6',
  //   component: () => (
  //     <>
  //       <Title week={3} lesson={6} />
  //       <SlidesDeck slidesDeckName="06-positioning" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-4/lesson-7',
  //   component: () => (
  //     <>
  //       <Title week={4} lesson={7} />
  //       <SlidesDeck slidesDeckName="07-responsive" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-4/lesson-8',
  //   component: () => (
  //     <>
  //       <Title week={4} lesson={8} />
  //       <SlidesDeck slidesDeckName="08-responsive-lab" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-5/lesson-9',
  //   component: () => (
  //     <>
  //       <Title week={5} lesson={9} />
  //       <SlidesDeck slidesDeckName="09-intro-to-js" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-5/lesson-10',
  //   component: () => (
  //     <>
  //       <Title week={5} lesson={10} />
  //       <SlidesDeck slidesDeckName="10-document-object-model" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-6/lesson-11',
  //   component: () => (
  //     <>
  //       <Title week={6} lesson={11} />
  //       <SlidesDeck slidesDeckName="11-conditional-statements" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-6/lesson-12',
  //   component: () => (
  //     <>
  //       <Title week={6} lesson={12} />
  //       <SlidesDeck slidesDeckName="12-arrays-loops" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-7/lesson-13',
  //   component: () => (
  //     <>
  //       <Title week={7} lesson={13} />
  //       <SlidesDeck slidesDeckName="13-animations" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-7/lesson-14',
  //   component: () => (
  //     <>
  //       <Title week={7} lesson={14} />
  //       <SlidesDeck slidesDeckName="14-plugins" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-8/lesson-15',
  //   component: () => (
  //     <>
  //       <Title week={8} lesson={15} />
  //       <SlidesDeck slidesDeckName="15-forms" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-8/lesson-16',
  //   component: () => (
  //     <>
  //       <Title week={8} lesson={16} />
  //       <SlidesDeck slidesDeckName="16-api" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-9/lesson-17',
  //   component: () => (
  //     <>
  //       <Title week={9} lesson={17} />
  //       <SlidesDeck slidesDeckName="17-git-sass" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-9/lesson-18',
  //   component: () => (
  //     <>
  //       <Title week={9} lesson={18} />
  //       <SlidesDeck slidesDeckName="18-a11y-svg" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-10/lesson-19',
  //   component: () => (
  //     <>
  //       <Title week={10} lesson={19} />
  //       <SlidesDeck slidesDeckName="19-bootstrap" />
  //     </>
  //   ),
  // },
  // {
  //   path: '/week-10/lesson-20',
  //   component: () => (
  //     <>
  //       <Title week={10} lesson={20} />
  //       <SlidesDeck slidesDeckName="20-final-presentations" />
  //     </>
  //   ),
  // },
];

// Weeks
// Path: week-n
export const weekRoutes = [
  {
    path: '/week-1',
    component: () => {
      const Content = lazy(() => import('../pages/weeks/1'));
      return (
        <>
          <Title week={1} />
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        </>
      );
    },
  },
];

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
