// import Image from 'next/image';
import styles from './style/home/page.module.scss';

import Content1 from './content/home/content1';
import Content2 from './content/home/content2';
import Content3 from './content/home/content3';

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Content1 />
			<Content2 />
			<Content3 />
		</div>
	);
}
