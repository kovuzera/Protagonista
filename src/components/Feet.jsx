import React from 'react'
import './Feet.css'
import { VscTwitter } from 'react-icons/vsc';
import { FaYoutube } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { ImLast } from 'react-icons/im';

export const Feet = () => {
    return <div className='Feet'>
        <div className='FeetContainer'>
            <p className='FeetItem'><a href='https://twitter.com/kovugod' target='blank'><VscTwitter className='FeetIcon'/>Twitter</a></p>
            <p className='FeetItem'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='blank'><FaYoutube className='FeetIcon'/>YouTube</a></p>
            <p className='FeetItem'><a href='https://www.youtube.com/watch?v=5tEaDGAlUhY' target='blank'><BsFillPeopleFill className='FeetIcon'/>Nossa equipe</a></p>
            <p className='FeetItem'><a href='https://www.youtube.com/watch?v=TVoGKvVBC6Q' target='blank'><ImLast className='FeetIcon'/>Sobre o Protagonista</a></p>
            <p className='Rights'>© 2020 Protagonista | Giovanne Marrone |</p>
        </div>
    </div>
}