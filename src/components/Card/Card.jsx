import React from 'react'
import './Card.css'
import { useHistory } from 'react-router-dom'

export const Card = (props) => {
    const history = useHistory();
    
    return (
        <div className='RecentPost' onClick={() => history.push('/post')}>
            <img src={props.image} alt='Imagem' className='RecentPostImg' />
            <div className='RecentPostTitle'>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}