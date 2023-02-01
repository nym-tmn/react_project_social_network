
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Search from './components/Header/Search/Search';
import Notifications from './components/Header/Notifications/Notifications';
import News from './components/Header/News/News';
import Settings from './components/Header/Settings/Settings';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Photo from './components/Photo/Photo';
import Video from './components/Video/Video';
import Music from './components/Music/Music';
import Comunities from './components/Comunities/Comunities';
import Footer from './components/Footer/Footer';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<div className='app-continer'>
					<Nav />
					<div className='mainContent'>
						<Routes>
							<Route path='/search' element={<Search />} />
							<Route path='/notifications' element={<Notifications />} />
							<Route path='/news' element={<News />} />
							<Route path='/settings' element={<Settings />} />
							<Route path='/profile' element={<Profile
								posts={props.state.profilePage}
								followers={props.state.profilePage}
								followings={props.state.profilePage}/>} />
							<Route path='*' element={<Dialogs
								dialogItem={props.state.dialogsPage}
								messageToMe={props.state.dialogsPage}
								messageFromMe={props.state.dialogsPage} />} />
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
