import React from 'react';
import './App.css';
import ContentBlock from './Components/ContentBlock/ContentBlock';
import Header from './Components/Header/Header';
import Bunner from './Components/Bunner/Bunner';




function App() {



  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Bunner />
        <ContentBlock />
      </main>
    </div>
  );
}

export default App;
