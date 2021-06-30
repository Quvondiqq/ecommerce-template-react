import React from 'react';

const Card = () => {

    return(
    <div className="card">
        <img className='heart-icon' src="/img/btn/heart-unliked.svg" alt="icon" />
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12999 руб.</b>
            </div>
            <button className='button'>
            <img height={11} width={11} src="/img/plus.svg" alt="" />
            </button>
        </div>
    </div>
    )
}

export default Card;