// import Image from 'next/image';
import styles from '../../style/home/page.module.scss';

export default function Content2() {
	return (
		<div className={styles.content2}>
			<div className={styles.wrap}>
				<div className={styles.text}>
					<div className={styles.subTitle}>
						<h5>Book Now</h5>
						<div className={styles.line}></div>
					</div>

					<h1 className={styles.tittle}>Our Properties</h1>
					<p className={styles.paragraph}>
						Choose from our spectacular range of iconic properties in Dubai
						starting from AED 1,000,000 only. <br />
						<span>20% Guaranteed Rental Income Per Annum*</span>
					</p>
				</div>

				<div className={styles.wrapContent}>
					<div className={styles.card}>
						<div className={styles.img}></div>
						<div className={styles.content}>
							<h3 className={styles.tittle}>Consectetur Adipiscing</h3>
							<p className={styles.description}>Lorem ipsum dolor sit</p>
							<div className={styles.wrapPrice}>
								<h3 className={styles.price}>
									<span>AED</span> 600,000
								</h3>
								<h5 className={styles.category}>On-plan</h5>
							</div>
							<div className={styles.wrapQuarterly}>
								<div className={styles.left}>
									<p className={styles.tittle}>Quarterly</p>
									<p className={styles.paragraph}>paid returns</p>
								</div>
								<div className={styles.right}>
									<p className={styles.tittle}>20%</p>
									<p className={styles.paragraph}>annual yield</p>
								</div>
							</div>
							<div className={styles.flex}>
								<button className={styles.btn}>Enquire Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}