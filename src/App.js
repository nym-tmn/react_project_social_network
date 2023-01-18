
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Photo from './components/Photo/Photo';
import Video from './components/Video/Video';
import Music from './components/Music/Music';
import Comunities from './components/Comunities/Comunities';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<div className='app-continer'>
					<Nav />
					<div className='mainContent'>
						<Routes>
							<Route path='*' element={<Profile />} />
							<Route path='/messages' element={<Messages />} />
							<Route path='/photo' element={<Photo />} />
							<Route path='/video' element={<Video />} />
							<Route path='/music' element={<Music />} />
							<Route path='/comunities' element={<Comunities />} />
						</Routes>
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
