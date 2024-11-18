import React from 'react';
import { useTranslation } from 'react-i18next';
import './reset.css';
import Nav from './components/Nav/nav';
import { AnimatedBackground } from 'animated-backgrounds';


const App = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      {/* <AnimatedBackground animationName="cosmicDust" /> */}
      <Nav /> 
    </div>
  );
};

export default App;
