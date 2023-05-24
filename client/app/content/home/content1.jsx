// import Image from 'next/image';
import styles from '../../style/home/page.module.scss';

export default function Content1() {
	return (
		<div className={styles.content1}>
			<div className={`${styles.block} ${styles.left}`}>
				<h1 className={`${styles.tittle}`}>Fixed Rate Bonds</h1>
				<h1 className={`${styles.subTittle}`}>
					With Risk-Free Guranteed Returns
				</h1>

				<p className={`${styles.paragraph}`}>
					Lorem ipsum dolor sit amet, consectetur
					<br /> adipiscing elit, sed do
				</p>

				<button className={`${styles.btn}`}>Fill Out a Questionnaire</button>
			</div>
			<div className={`${styles.block} ${styles.right}`}></div>
		</div>
	);
}
