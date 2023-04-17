import React from 'react';
import { /* BrowserRouter */ HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import SearchUsersContainer from './components/Header/Search_users/Search_users_container';
import Notifications from './components/Header/Notifications/Notifications';
import News from './components/Header/News/News';
import Settings from './components/Header/Settings/Settings';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/Dialogs_container';
import Photo from './components/Photo/Photo';
import Video from './components/Video/Video';
import Music from './components/Music/Music';
import Comunities from './components/Comunities/Comunities';
import Footer from './components/Footer/Footer';

const App = () => {

	return (
		<HashRouter>
			<div className='app-wrapper'>
				<Header />
				<div className='app-continer'>
					<Nav />
					<div className='mainContent'>
						<Routes>
							<Route path='/search' element={<SearchUsersContainer />} />
							<Route path='/notifications' element={<Notifications />} />
							<Route path='/news' element={<News />} />
							<Route path='/settings' element={<Settings />} />
							<Route path='/' element={<Profile />} />
							<Route path='/dialogs' element={<DialogsContainer />} />
							<Route path='/photo' element={<Photo />} />
							<Route path='/video' element={<Video />} />
							<Route path='/music' element={<Music />} />
							<Route path='/comunities' element={<Comunities />} />
						</Routes>
					</div>
				</div>
				<Footer />
			</div>
		</HashRouter>
	);
};

export default App;
