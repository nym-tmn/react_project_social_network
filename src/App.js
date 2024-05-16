import React, { useEffect/* , lazy */ } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';

import store from './redux/redux_store';
import Header from './components/Header/Header';
import SearchUsersContainer from './components/Header/Search_users/Search_users_container';
import Notifications from './components/Header/Notifications/Notifications';
import News from './components/Header/News/News';
import Settings from './components/Header/Settings/Settings';
import ProfileContainer from './components/Profile/Profile_container';
import DialogsContainer from './components/Dialogs/Dialogs_container';
import Nav from './components/Nav/Nav';
import Photo from './components/Photo/Photo';
import Video from './components/Video/Video';
import Music from './components/Music/Music';
import Comunities from './components/Comunities/Comunities';
import SignInContainer from './components/Sign_in/Sign_in_container';
import Footer from './components/Footer/Footer';
import { initializeAppThunkCreator } from './redux/app_reducer';
import Preloader from './components/common/Preloader/Preloader';
import { getInitialized } from './redux/app_selectors';
// import { withSuspense } from './hoc/withSuspense';

import './App.css';

// const ProfileContainer = withSuspense(lazy(() => import('./components/Profile/Profile_container')));
// const DialogsContainer = withSuspense(lazy(() => import('./components/Dialogs/Dialogs_container')));

const App = ({
	initializeApp,
	initialized,
}) => {

	useEffect(() => {

		initializeApp();

	}, [initializeApp]);

	return (
		<>
			{!initialized ? <Preloader />
				: <div className='app-wrapper'>
					<Header />
					<div className='app-container'>
						<Nav />
						<div className='mainContent'>
							<Routes>
								<Route path='/search' element={<SearchUsersContainer />} />
								<Route path='/notifications' element={<Notifications />} />
								<Route path='/news' element={<News />} />
								<Route path='/settings' element={<Settings />} />
								<Route path=':userId?' element={<ProfileContainer />} />
								<Route path='/profile' element={<ProfileContainer />} />
								<Route path='/dialogs' element={<DialogsContainer />} />
								<Route path='/photo' element={<Photo />} />
								<Route path='/video' element={<Video />} />
								<Route path='/music' element={<Music />} />
								<Route path='/comunities' element={<Comunities />} />
								<Route path='/sign_in' element={<SignInContainer />} />
							</Routes>
						</div>
					</div>
					<Footer />
				</div>}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		initialized: getInitialized(state),
	};
};

const connector = connect(mapStateToProps, {
	initializeApp: initializeAppThunkCreator,
});

const AppContainer = connector(App);

const SociaNetworkApp = () => {
	return <React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<AppContainer />
			</HashRouter>
		</Provider>
	</React.StrictMode>;
};

export default SociaNetworkApp;
