import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import Header from './components/Header';
import Drawer from './components/Drawer';
import {Route} from 'react-router-dom';

import Home from './pages/Home';
import Favourites from './pages/Favourites'


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItem, setFavouriteItem] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    axios.get("https://60e004336b689e001788c87f.mockapi.io/items").then(res => {
    setItems(res.data)
    })

    axios.get("https://60e004336b689e001788c87f.mockapi.io/cart").then(res => {
      setCartItems(res.data)
    })
    axios.get("https://60e004336b689e001788c87f.mockapi.io/favourites").then(res => {
      setFavouriteItem(res.data)
    })
    },[])

    const onAddToCart = async (obj) => {
      console.log(obj)
      try{
        const { data } = await axios.post("https://60e004336b689e001788c87f.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, data]);
      } catch(error) {
        alert("Unable to add items to Card")
      }

    }

    const onAddToFavourite = async(obj) => {
      console.log(obj)
      try{      
          if(favouriteItem.find(fav => fav.id === obj.id)) {
          axios.delete(`https://60e004336b689e001788c87f.mockapi.io/favourites/${obj.id}`)
        } else {
          const { data } = await axios.post("https://60e004336b689e001788c87f.mockapi.io/favourites", obj)
          setFavouriteItem(prev => [...prev, data]);
        }
      } catch(error) {
        alert("Unable to add to favourite")
      }

    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    const removeItem = (id) => {
      console.log(id)
      axios.delete(`https://60e004336b689e001788c87f.mockapi.io/cart/${id}`)
      setCartItems(prev => prev.filter(item => item.id !== id));
    }
 

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={removeItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path="/" exact>
          <Home 
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavourite={onAddToFavourite}
          />
      </Route>
      <Route path="/favourites" exact>
          <Favourites 
          favItems={favouriteItem}
          onAddToFavourite={onAddToFavourite}
          />
      </Route>
    </div>
  );
}

export default App;
