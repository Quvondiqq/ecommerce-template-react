import React, { useState, useEffect } from 'react'
import styles from './Card.module.scss'

const Card = ({title, price, imgURL, onClickPlus, onClickFavourite}) => {

    const [isAdded, setIsAdded] = useState(false);

    const onClickAdd = () => {
        onClickPlus({title, price, imgURL});
        setIsAdded(!isAdded);
    };

    useEffect(() => {
       
    }, [isAdded])

    return(
    <div className={styles.card}>
        <img className={styles['heart-icon']} src="/img/btn/heart-unliked.svg" onClick={onClickFavourite} alt="icon" />
        <img width={133} height={112} src={imgURL} alt="sneakers" />
        <h5>{title}</h5>
        <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{price}</b>
            </div>
            <img className={styles.addBtn} height={11} width={11} src={isAdded ? './img/btn/checked-btn.svg' : './img/btn/default-add-btn.svg'} onClick={onClickAdd} alt="plusIcon" />
        </div>
    </div>
    )
}


export default Card;