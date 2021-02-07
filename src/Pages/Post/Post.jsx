import React from 'react'
import './Post.css'
import { Author } from './Author'
import { AuthorAbout } from './AuthorAbout'
import { Comments } from './Comments'

export const Post = () => {
    return (
        <div className='PostPage'>
            <div className='PostTitle'>
                <h1>Disney+ anuncia a série oficial da Ahsoka como um spin-off de O Mandaloriano</h1>
            </div>
            <Author />
            <div className='PostContent'>
                <div className='SideInfo'>
                    <p className='SideDefault'>Tags:</p>
                    <p className='PostTags'>Disney+ / Ahsoka Tano / Série / Disney</p>
                    <p className='SideDefault'>Publicado em:</p>
                    <p className='PostDate'>05/02/2021 / 19:30</p>
                </div>
                <div className='PostText'>
                    <p>Conteúdo do post*</p>
                </div>
            </div>
            <AuthorAbout />
            <Comments/>
        </div>
    )
}