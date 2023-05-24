import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image
					className={styles.item}
					src='/logo/logo.png'
					alt='Arena'
					width={211}
					height={47}
				/>
			</div>
			<ul className={styles.menu}>
				<li className={styles.item}>
					<Link className={styles.link} href='/'>
						Comparison
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href='/'>
						Bond
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href='/'>
						Testimonials
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href='/'>
						Contact
					</Link>
				</li>
			</ul>
			<a href='tel:+971123456789' className={`${styles.btn} ${styles.phone}`}>
				<Image
					className={styles.icon}
					src='/img/phone.png'
					alt='Phone icon'
					width={18}
					height={18}
				/>
				+971 12 345 6789
			</a>
		</header>
	);
}
