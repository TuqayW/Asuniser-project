import React from 'react';
import { useTranslation } from 'react-i18next';
import './reset.css';
import Nav from './components/Nav/nav';
import { AnimatedBackground } from 'animated-backgrounds';
import Header from './components/Header/header';
import Overview from './components/Overview/overview';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <AnimatedBackground animationName="cosmicDust" />
      <Nav /> 
      <Header/>
      <Overview/>
    </div>
  );
};

export default App;
