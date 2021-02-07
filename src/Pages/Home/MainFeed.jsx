import React from 'react'
import './MainFeed.css'
import './RecentFeed.css'
import './ListFeed.css'
import { Card } from '../../components/Card/Card'
import { RecentList } from '../../components/RecentList/RecentList'
import { useHistory } from 'react-router-dom'

export const MainFeed = () => {
    const posts = [{
        image: 'https://tecnoblog.net/wp-content/uploads/2020/12/cyberpunk-2077-bugs.jpg',
        title: 'Cyberpunk - Vídeo comparando os gráficos do jogo com os de GTA V chama atenção na internet'
    }, {
        image: 'https://s.glbimg.com/po/tt2/f/original/2014/01/27/tr.png',
        title: 'Tomb Raider (2013) - Localização de todas as Relíquias'
    }, {
        image: 'https://conteudo.imguol.com.br/c/entretenimento/7a/2020/10/02/among-us-1601652253868_v2_1920x1080.jpg',
        title: 'Among Us - Como jogar de impostor'
    }, {
        image: 'https://theclutch.com.br/wp-content/uploads/2018/09/cfg-treino-csgo.jpg',
        title: 'CS:GO - Como subir de patente mais rápido'
    }, {
        image: 'https://bookstacked.com/wp-content/uploads/2017/04/Throne-of-Glass-High-res.jpg',
        title: 'Trono de Vidro - Como pronunciar o nome dos personagens'
    }, {
        image: 'https://blog-images.saraiva.com.br/fotos/2017/03/percyjacksonmovie.jpg',
        title: 'Afinal, o que podemos realmente aprender sobre Mitologia Grega ao lermos Percy Jackson?'
    }, {
        image: 'https://rocketleague.media.zestyio.com/rl_s2_core_1920x1080_no-logos.jpg',
        title: 'Rocket League - Como trocar itens com os seus amigos'
    }, {
        image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/06/harry_potter_warner_bros_1.jpg',
        title: 'Harry Potter - Estas são as diferenças mais marcantes entre os livros e filmes'
    }, {
        image: 'https://media.comicbook.com/2017/03/naruto-shippuden-episode-479-235857-1280x0.jpg',
        title: 'Todas as classes ninja e a diferença entre elas no universo de Naruto Shippuden'
    }]

    const lists = [{
        image: 'https://acessocultural.com.br/wp-content/uploads/2019/08/supergirl.jpg',
        title: 'Supergirl - Estes são os 5 melhores trajes da heroína'
    }, {
        image: 'https://www.denofgeek.com/wp-content/uploads/2017/11/justice_league_rosters_primary.jpg?resize=768%2C432',
        title: 'Liga da Justiça - Estes são todos os heróis que já fizeram parte da equipe'
    }, {
        image: 'https://projectfandom.com/wp-content/uploads/2015/10/supergirl-featured-image.jpg',
        title: 'Supergirl – 5 poderes esquisitos que você não sabia que Kara Danvers possui'
    }, {
        image: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/18/1525273508-avengers-2012-lineup.jpg',
        title: 'Vingadores - Estes são todos os heróis que já fizeram parte da equipe'
    }]

    const history = useHistory();

    return (
        <div className='MainFeedContainer'>
            <div className='Body'>
                <div className='MainContainer'>
                    <h1 className='MostRecent'>Mais Recente</h1>
                    <div className='MainPost'>
                        <img className='MainPostImg' onClick={() => history.push('/post')} src='https://cnet3.cbsistatic.com/img/Bmz2UspDFR_yTwvhnEgvMMOI0ro=/940x0/2020/12/01/3d2e6107-73df-4a5d-bcc7-6982b1fa2906/rosariopromo.jpg' alt='MainPostImage' />
                        <h2 className='MainPostTitle' onClick={() => history.push('/post')}>Ahsoka ganhará um seriado próprio na Disney+ como um spin-off de O Mandaloriano</h2>
                    </div>
                    <div className='RecentFeed'>
                        {posts.map(element => (<Card image={element.image} title={element.title} />))}
                    </div>
                    <div className='Older'>
                        <p>Mais Antigo >></p>
                    </div>
                </div>
                <div className='ListFeed'>
                    <h1 className='Listas'>Listas</h1>
                    {lists.map(element => (<RecentList image={element.image} title={element.title} />))}
                    <p className='SeeAllLists'>Ver tudo em "Listas"</p>
                </div>
            </div>
        </div>
    )
}