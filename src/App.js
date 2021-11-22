import React from 'react';
import { Cta } from './components';
import { Header, Statistics } from './containers';

const App = () => {
  return (
    <div>
      <Header />
      <Statistics />
      <Cta />
    </div>
  );
}

export default App;
