import React from 'react'

const Item = ({item}) => {

    // Destructuring an item of the menu
    const {id, title, category, price, img, desc} = item;

    // Return a menu item
    return (
        <div className='menu-item'>
            <h4>{title}</h4>
            <div className='image-container'>
                <img src={img} alt={title} />
            </div>
            <p className='category'>{category}</p>
        </div>
    )
}

export default Item