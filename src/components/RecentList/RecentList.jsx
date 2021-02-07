import React from 'react'
import './RecentList.css'

export const RecentList = (props) => {
    return (
        <div className='RecentList'>
            <img src={props.image} alt='Imagem' className='RecentListImg' />
            <div className='RecentListTitle'>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}