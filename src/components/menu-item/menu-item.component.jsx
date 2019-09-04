import React from 'react';
import './menu-item.styles.scss'


export const MenuItem = ({title, imageUrl, linkUrl, size})=>{
    return (
        <div style={{background:`url(${imageUrl})`}} className={`${size} menu-item`}>
            <div className='content'>
                <p className='title'>{title}</p>
                <span></span>
                <p className='subtitle'>SHOP NOW</p>
            </div>
        </div>
    )
}