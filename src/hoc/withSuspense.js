import { Suspense } from 'react';

import Preloader from '../components/common/Preloader/Preloader';

export const withSuspense = (WrappedComponent) => {
	return (props) => {
		return <Suspense fallback={<Preloader />}>
			<WrappedComponent {...props} />
		</Suspense>;
	};
};
