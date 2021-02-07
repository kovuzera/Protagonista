import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useHistory } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Moon from '../assets/moon.png'
import './Header.css'

export const Header = () => {
    const history = useHistory();

    return <div className='Header' id='myHeader'>
        <div className='HeaderContainer'>
            <img src={Logo} alt='logo' className='Logo' onClick={() => history.push('/')} />
            <div className='Dropdown'>
                <a className='Item' href='/'>Games</a>
                <IoMdArrowDropdown className='DropdownButton' />
                <div class="DropdownContent">
                    <a href="/">Reviews</a>
                    <a href="/">e-Sports</a>
                    <a href="/">Guias</a>
                    <a href="/">PC</a>
                    <a href="/">PS5</a>
                    <a href="/">Xbox Series</a>
                    <a href="/">Xbox One</a>
                    <a href="/">PS4</a>
                    <a href="/">Switch</a>
                    <a href="/">Mobile</a>
                    <a href="/">Tudo em "Games"</a>
                </div>
            </div>
            <div className='Dropdown'>
                <a className='Item' href='/'>Animes</a>
                <IoMdArrowDropdown className='DropdownButton' />
                <div className="DropdownContent">
                    <a href="/">Naruto Shippuden</a>
                    <a href="/">Dragon Ball Super</a>
                    <a href="/">Attack on Titan</a>
                    <a href="/">Tudo em "Animes"</a>
                </div>
            </div>
            <div className='Dropdown'>
                <a className='Item' href='/'>Séries</a>
                <IoMdArrowDropdown className='DropdownButton' />
                <div className="DropdownContent">
                    <a href="/">Vikings</a>
                    <a href="/">The Flash</a>
                    <a href="/">Supernatural</a>
                    <a href="/">Grey's Anatomy</a>
                    <a href="/">Tudo em "Séries"</a>
                </div>
            </div>
            <div className='Dropdown'>
                <a className='Item' href='/'>Filmes</a>
                <IoMdArrowDropdown className='DropdownButton' />
                <div className="DropdownContent">
                    <a href="/">Críticas</a>
                    <a href="/">MCU</a>
                    <a href="/">DCEU</a>
                    <a href="/">Tudo em "Filmes"</a>
                </div>
            </div>
            <div className='Dropdown'>
                <a className='Item' href='/'>Listas</a>
                <IoMdArrowDropdown className='DropdownButton' />
                <div className="DropdownContent">
                    <a href="/">Naruto / Boruto</a>
                    <a href="/">Dragon Ball</a>
                    <a href="/">Supergirl</a>
                    <a href="/">The Flash</a>
                    <a href="/">Attack on Titan</a>
                    <a href="/">Tudo em "Listas"</a>
                </div>
            </div>
            <div className='RightContainer'>
                <div className='Searchbar'>
                    <input type="text" placeholder='Procurar...' className='Input' id="MyInput"/>
                </div>
                <img src={Moon} alt='moon' className='Moon' />
            </div>
        </div>
    </div>
}
