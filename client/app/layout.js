import './style/rest.scss';
import './style/fonts/font.scss';
import './style/globals.scss';

// import SocialSide from './components/socialSide/socialSide';
// import Footer from './components/footer/footer';

export const metadata = {
	title: 'Arena',
	description: 'Create by Nikita Abalikhin',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{/* <SocialSide /> */}
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
