

const Drawer = ({onCloseCart, items = [], onRemove} ) => {


    return(
        <div  className='overlay'>
            <div className="drawer d-flex flex-column">
                <div className="d-flex align-center justify-between mb-40">
                    <h2>Корзина</h2>
                    <img onClick={onCloseCart} className="cu-p" src="/img/btn/remove-drawer-item.svg" alt="123" />
                </div>

                {
                    items.length > 0 ? (
                    <div className="d-flex flex-column align-between h100p">
                        <div className="items mb-30">
                            {items.map((obj, index) => (
                            <div key={index} className="drawer__item d-flex justify-between align-center mb-20">
                                <div style={{backgroundImage: `url(${obj.imgUrl})`}} className='cartItem mr-15' alt="sneakers">
                                </div>
                                <div className='mr-20'>
                                <p className='mb-5'>{obj.name}</p>
                                <b>{obj.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className='removeBtn' src="/img/btn/remove-drawer-item.svg" alt="iconRemove" />
                            </div>
                            ))}
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
                    </div>) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img src="/img/empty-cart.jpg" alt="emptyCart" />
                        <h2>Корзина пустая</h2>
                        <p>Нет выбранных предметов</p>
                        <button className="cartEmpty__btn" onClick={onCloseCart}>
                            <img src="/img/btn/arrow-to-right.svg" alt="arrow" />
                            Вернуться назад
                        </button>
                    </div>)
                }
            </div>
          </div>
    )
}

export default Drawer;