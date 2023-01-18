
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='app-continer'>
				<Nav />
				<div className='mainContent'>
					<Profile />
					{/* <Dialogs /> */}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
