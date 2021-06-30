

const Drawer = () => {
    return(
        <div style={{display: 'none'}} className='overlay'>
            <div className="drawer d-flex flex-column">
                <h2 className='mb-30'>Корзина</h2>
                <div className="items mb-30">
                    <div className="drawer__item d-flex align-center mb-20">
                        <img className='mr-15' width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
                        <div className='mr-20'>
                        <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn' src="/img/btn/remove-drawer-item.svg" alt="iconRemove" />
                    </div>
                    <div className="drawer__item d-flex align-center mb-20">
                        <img className='mr-15' width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
                        <div className='mr-20'>
                        <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn' src="/img/btn/remove-drawer-item.svg" alt="iconRemove" />
                    </div>
    
                </div>
                <div className="cartTotalBlock">
                    <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    </ul>
                    <button>Оформить заказ <img src="/img/btn/arrow-to-right.svg" alt="arrowIcon" /></button>
                </div>
            </div>
          </div>
    )
}

export default Drawer;