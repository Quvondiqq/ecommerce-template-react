

const Header = ({onClickCart}) => {
   
    return(
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center '>
            <img height={40} width={40} src='/img/logo.png' alt="logo"/>
            <div>
                <h3 className='text-uppercase'>React Sneakers</h3>
                <p className='opacity-5'>Магазин для кросовок</p>
            </div>
            </div>
            <ul className='headerRight d-flex'>
            <li className='mr-30'>
                <img className="cu-p" onClick={onClickCart} height={18} width={18} src='/img/Cart.svg' alt="cart" />
                <span>1205 руб.</span>
            </li>
            <li>
                <img height={18} width={18} src='/img/User.svg' alt="user" />
            </li>
            </ul>
      </header>
    )
}

export default Header;