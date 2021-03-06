import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import styled from 'styled-components';
import Title from '../components/title';
import Page from '../components/page';

const Weeks = [
  'Installfest, the command Line & data Types',
  'Arrays, loops, conditionals & functions',
  'Objects & JSON, Slack bot lab ๐ค ๐งช',
  'The DOM',
  'Asynchronous programming & TfL API lab ๐ ๐งช',
  'Template and Feedr lab ๐งช',
  'Intro to Firebase and CRUD',
  'Prototypal inheritance & closures & this',
  'Deploying your app & student choice',
  'Final project lab ๐งช & Final project Presentations ๐',
];

const StyledMain = styled.main`
  padding: 1.25rem;

  li {
    margin-bottom: 0.5rem;
  }
`;

const Home: React.FC = () => (
  <Page>
    <Title title="Home" />
    <Header />
    <StyledMain>
      <h1>Welcome to JSD London ๐ฌ๐ง </h1>
      <nav>
        <ul>
          {Weeks.map((week, i) => (
            <li key={i}>
              Week {i + 1}:{' '}
              <Link key={i} to={`week-${i + 1}`}>
                {week}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledMain>
    <Footer />
  </Page>
);

export default Home;
