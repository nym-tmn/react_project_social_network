
const Header = () => {
	return (
		<header className="header">
				<div className="header-logo">
				<a href="#">
					<img src="/img/art_space_logo.png" alt="art_space_logo" />
				</a>
				</div>
				<nav className="header-menu">
					<div><a href="#" className="header-link">Search</a></div>
					<div><a href="#" className="header-link">Notifications</a></div>
					<div><a href="#" className="header-link">News</a></div>
					<div><a href="#" className="header-link">Settings</a></div>
				</nav>
		</header>
	);
};

export default Header;