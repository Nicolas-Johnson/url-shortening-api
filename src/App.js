import React from 'react';
import { Cta } from './components';
import { Header, Statistics, Footer } from './containers';

const App = () => {
  return (
    <div>
      <Header />
      <Statistics />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
