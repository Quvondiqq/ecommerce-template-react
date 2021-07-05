import {Link} from 'react-router-dom';

const Header = ({onClickCart}) => {
   
    return(
        <header className='d-flex justify-between align-center p-40'>
            <Link to="/">
                <div className='d-flex align-center '>
                <img height={40} width={40} src='/img/logo.png' alt="logo"/>
                <div>
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p className='opacity-5'>Магазин для кросовок</p>
                </div>
                </div>
            </Link>
            <ul className='headerRight d-flex justify-between align-center' style={{width: "20%"}}>
                <li onClick={onClickCart} className='cu-p'>
                    <img  height={18} width={18} src='/img/Cart.svg' alt="cart" />
                    <span>1205 руб.</span>
                </li>
                <li className='cu-p'>
                    <Link to="/favourites">
                        <img height={18} width={18} src="/img/favourite.svg" alt="favourite-icon" />
                    </Link>
                </li>
                <li className='cu-p'>
                    <img height={18} width={18} src='/img/User.svg' alt="user" />
                </li>
            </ul>
      </header>
    )
}

export default Header;