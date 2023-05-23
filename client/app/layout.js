import './style/rest.scss';
import './style/globals.scss';
import { Montserrat } from 'next/font/google';

// import SocialSide from './components/socialSide/socialSide';
// import Footer from './components/footer/footer';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'Arena',
	description: 'Create by Nikita Abalikhin',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				{/* <SocialSide /> */}
				<main>{children}</main>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
