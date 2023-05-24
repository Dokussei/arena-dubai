// import Image from 'next/image';
import styles from './style/home/page.module.scss';

import Content1 from './content/home/content1';
import Content2 from './content/home/content2';

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<Content1 />
			<Content2 />
		</div>
	);
}
