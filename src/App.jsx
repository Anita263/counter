
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import React from 'react';
import './styles/style.css';
import './styles/style.sass';
import Counter from './component/Main/Counter';



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Counter />
      <Footer />
       
       </div>
  );
}

export default App;

