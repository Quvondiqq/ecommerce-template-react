import React from 'react';
import './index.scss';
import Header from './components/Header'
import Card from './components/Card';
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className='content p-40'>
      <div className='mb-40 d-flex align-center justify-between'>
          <h1>Все кроссовки</h1>
          <div className='d-flex align-center search-block'>
            <img className='search-block__icon' src="/img/search-icon.svg" alt="search-icon" />
            <input className='search-block__input' placeholder='Поиск...' />
          </div>
        
      </div>

        <div className="sneakers-cnt d-flex flex-wrap">
          <Card />
          <Card />

        </div>
      </div>
    </div>
  );
}

export default App;
