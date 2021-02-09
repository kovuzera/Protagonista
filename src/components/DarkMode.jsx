import React from 'react';
import useDarkMode from 'use-dark-mode';
import Moon from '../assets/moon.png';
import { FiSun } from 'react-icons/fi';
import { RiMoonClearFill } from 'react-icons/ri';
import './DarkMode.css';

const DarkMode = () => {
	const darkMode = useDarkMode(false);

	return (
		<div onClick={darkMode.toggle} className='DarkModeContainer'>
			{darkMode.value ? (
				<FiSun size={40} className="ThemeIcon" />
			) : (
				<RiMoonClearFill size={40} className="ThemeIcon" />
			)}
		</div>
	);
};

export default DarkMode;
