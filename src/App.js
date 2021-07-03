import React, { useState, useEffect } from 'react';
import './index.scss';
import Header from './components/Header'
import Card from './components/Card';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://60e004336b689e001788c87f.mockapi.io/items")
    .then(res => res.json())
    .then(json => setItems(json))
    }, []
  )

  const onAddToCart = (obj) => {
    if(cartItems.includes(obj) === false) {
       setCartItems(prev => [...prev, obj])
      }
       
  }
 

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content p-40'>
      <div className='mb-40 d-flex align-center justify-between'>
          <h1>Все кроссовки</h1>
          <div className='d-flex align-center search-block'>
            <img className='search-block__icon' src="/img/search-icon.svg" alt="search-icon" />
            <input className='search-block__input' placeholder='Поиск...' />
          </div>
        </div>

        <div className="sneakers-cnt d-flex flex-wrap">
            {items.map((item, index) => (
              <Card key={index}
              title={item.name} 
              price={item.price} 
              imgURL={item.imgURL}
              onClickPlus={(obj) => onAddToCart(obj)}
              onClickFavourite={() => console.log('Najimali na serdechko')}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
