import './style/rest.scss';
import './style/fonts/font.scss';
import './style/globals.scss';

import Header from './components/header/header';

export const metadata = {
	title: 'Arena',
	description: 'Create by Nikita Abalikhin',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
