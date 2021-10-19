import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import styled from 'styled-components';
import Title from '../components/title';
import Page from '../components/page';

const Weeks = [
  'Installfest, The Command Line & Data Types',
  'Collections,Loops, Conditionals & Functions',
  // 'Scope, Variables, Objects & JSON',
  // 'Slackbot Lab & The DOM & jQuery',
  // 'JavaScript Events, AJAX & APIs',
  // 'Asynchronous JavaScript, Callbacks & Advanced APIs',
  // 'APIs Lab & Prototypal Inheritance',
  // 'Closures, this & Intro to CRUD and Firebase Lab',
  // 'Deploying Your App & Student Choice',
  // 'Final Project Lab & Final Project Presentations ',
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
      <h1>Welcome to JSD London 🇬🇧 </h1>
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
