import Card from '../components/Card';


function Favourites({favItems, onAddToFavourite}) {
    return (
        <div className='content p-40'>
        <div className='mb-40 d-flex align-center justify-between'>
            <h1>Мои закладки</h1>
        </div>
  
          <div className="sneakers-cnt d-flex flex-wrap">
            {favItems.map((item, index) => (
                <Card key={index}
                favourited={true}
                onFavourite={onAddToFavourite}
                {...item}
                />
              ))}
          </div>
        </div>
    );
}

export default Favourites;