import React from 'react'
import './Comments.css'
import { FaPenNib } from 'react-icons/fa';

export const Comments = () => {
    return (
        <div className='CommentSection'>
            <div className='CommentsTitle'>
                <h2>Comentários</h2>
                <FaPenNib className='CommentsIconPen' size={20}/>
            </div>
            <textarea type='text' placeholder='Adicionar um comentário...' className='CommentInput' id="MyInput" />
            <div className='CommentArea'>
                <img className='AuthorIcon' src='https://i2.wp.com/www.cycat.io/wp-content/uploads/2018/10/Default-user-picture.jpg' alt='Essa imagem não pôde ser carregada' />
                <div className='CommentText'>
                    <h3 className='CommentAuthor'>Autor do Comentário</h3>
                    <p className='Comment'>Teste de comentário</p>
                </div>
            </div>
            <div className='CommentArea'>
                <img className='AuthorIcon' src='https://i2.wp.com/www.cycat.io/wp-content/uploads/2018/10/Default-user-picture.jpg' alt='Essa imagem não pôde ser carregada'/>
                <div className='CommentText'>
                    <h3 className='CommentAuthor'>Autor do Comentário</h3>
                    <p className='Comment'>Teste de comentário mais longo blablabla naruto mais forte q pastel em cima de um copo ao cubo fazendo natação.</p>
                </div>
            </div>
            <div className='CommentArea'>
                <img className='AuthorIcon' src='https://i2.wp.com/www.cycat.io/wp-content/uploads/2018/10/Default-user-picture.jpg' alt='Essa imagem não pôde ser carregada'/>
                <div className='CommentText'>
                    <h3 className='CommentAuthor'>Autor do Comentário</h3>
                    <p className='Comment'>Teste de comentário mais longo blablabla naruto mais forte q pastel em cima de um copo ao cubo fazendo natação. Mas chega o sasuke puto da vida com o olho roxo dos inferno e lança um copão de pepsi pra ganhar energia</p>
                </div>
            </div>
        </div>
    )
}