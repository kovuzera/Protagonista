import React from 'react'
import './AuthorAbout.css'

 
export const AuthorAbout = () => {
    return (
        <div className='AuthorAbout' id='HeaderStatic'>
            <img className='AuthorAboutImg' src='https://secure.gravatar.com/avatar/3822355100b05a36e2347e3c30cce9c4?s=180&r=g' alt='AuthorImg' />
            <div className='AuthorContainer'>
                <div className='AuthorMain'>
                <div className='SocialLogos'>
                </div>
                <p className='AuthorInfoID'>Giovanne Marrone</p>
                </div>
                <p className='AuthorInfoDescriprion'>Apaixonado por games desde que se conhece por gente, Giovanne Marrone é o fundador do Protagonista e se aprofunda no mundo gamer aprendendo mais sobre ele todos os dias.</p>
            </div>
        </div>
    )
}