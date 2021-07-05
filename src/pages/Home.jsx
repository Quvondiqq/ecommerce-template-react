import Card from '../components/Card';

function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavourite
}) {
    return (
        <div className='content p-40'>
        <div className='mb-40 d-flex align-center justify-between'>
            <h1 className="title">{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
            <div className='d-flex align-center search-block'>
              <label htmlFor="searchInput">
                <img id="searchInput" className='search-block__icon' src="/img/search-icon.svg" alt="search-icon" />
                <input onChange={onChangeSearchInput} value={searchValue} className='search-block__input' placeholder='Поиск...' />
                {searchValue && <img className="clear" src="/img/btn/remove-drawer-item.svg" onClick={() => setSearchValue('')} alt="removeBtn" />}
              </label>
            </div>
          </div>
  
          <div className="sneakers-cnt d-flex flex-wrap">
              {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                <Card key={index}
                onClickPlus={(obj) => onAddToCart(obj)}
                onFavourite={(obj) => onAddToFavourite(obj)}
                {...item}
                />
              ))}
          </div>
        </div>
    );
}

export default Home;