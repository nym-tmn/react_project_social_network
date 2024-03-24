import { createRoot } from 'react-dom/client';

import SociaNetworkApp from './App';

test('renders without crashing', () => {
	const div = document.createElement('div');
	const root = createRoot(div);
	root.render(<SociaNetworkApp />);
	root.unmount();
});
