'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../../style/home/page.module.scss';
import '../../style/home/swiper.scss';

export default function Content2() {
	const [property, setProperty] = useState(null);
	const [quantity, setQuantity] = useState(3);
	const serverPublic = 'http://127.0.0.1:8080/public';
	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`http://127.0.0.1:8080/api/property/getData`);
			const data = await res.json();
			await setProperty(data);
			console;
		};

		getData();
	}, []);

	const handleClick = () => {
		setQuantity(9);
	};

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
					{property &&
						property.slice(0, quantity).map((item, id) => {
							const photoUrls = item.url.split(';');

							return (
								<div className={styles.card} key={id}>
									<div className={styles.img}>
										<Swiper
											pagination={{
												clickable: true,
											}}
											modules={[Pagination]}
											className={styles.cardSwiper}
										>
											{photoUrls.map((url, index) => (
												<SwiperSlide key={index}>
													<Image
														className={styles.item}
														src={serverPublic + url}
														alt={`photo${index + 1}`}
														width={412}
														height={252}
													/>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
									<div className={styles.content}>
										<h3 className={styles.tittle}>{item.name}</h3>
										<p className={styles.description}>{item.description}</p>
										<div className={styles.wrapPrice}>
											<h3 className={styles.price}>
												<span>AED</span> {item.price.toLocaleString()}
											</h3>
											<h5 className={styles.category}>{item.category}</h5>
										</div>
										<div className={styles.wrapQuarterly}>
											<div className={styles.left}>
												<p className={styles.tittle}>{item.paid}</p>
												<p className={styles.paragraph}>paid returns</p>
											</div>
											<div className={styles.right}>
												<p className={styles.tittle}>{item.annualYield}</p>
												<p className={styles.paragraph}>annual yield</p>
											</div>
										</div>
										<div className={styles.flex}>
											<button className={styles.btn}>Enquire Now</button>
										</div>
									</div>
								</div>
							);
						})}
				</div>

				<div
					className={`${styles.flex} ${
						quantity !== 3 ? `${styles.unVisible}` : ''
					}`}
				>
					<button className={styles.moreBtn} onClick={handleClick}>
						Load More
						<Image
							className={styles.item}
							src='/img/Triangle.png'
							alt='Triangle'
							width={9}
							height={7}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
