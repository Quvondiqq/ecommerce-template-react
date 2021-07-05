import React, { useState } from 'react'
import styles from './Card.module.scss'

const Card = ({id, name, price, imgUrl, onClickPlus, onFavourite, favourited = false}) => {

    const [isAdded, setIsAdded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(favourited)

    const onClickAdd = () => {
        onClickPlus({name, price, imgUrl});
        setIsAdded(!isAdded);
    };

    const onAddClickFavourite = () => {
        onFavourite({id, name, price, imgUrl});
        setIsFavourite(!isFavourite);
    }

    return(
    <div className={styles.card}>
        {isFavourite ? <img onClick={onAddClickFavourite} className={styles['heart-icon']} src="/img/btn/heart-liked.svg" alt="icon"/> : <img   className={styles['heart-icon']} src="/img/btn/heart-unliked.svg" onClick={onAddClickFavourite} alt="icon"  />}
        <img width={133} height={112} src={imgUrl} alt="sneakers" />
        <h5>{name}</h5>
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