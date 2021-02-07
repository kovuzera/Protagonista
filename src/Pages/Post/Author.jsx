import React from 'react'
import './Author.css'

export const Author = () => {
    return (
<div className='AuthorInfo'>
                <p className='PublishedBy'>Publicado por</p> 
            <img className='AuthorImg' src='https://secure.gravatar.com/avatar/3822355100b05a36e2347e3c30cce9c4?s=180&r=g' alt='AuthorImg' />
                    <p className='AuthorID'>Giovanne Marrone</p>
            </div>
    )
}