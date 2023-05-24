'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
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
			<div className={`${styles.block} ${styles.right}`}>
				<div className={`${styles.wrapLeft}`}>
					<Swiper
						direction={'vertical'}
						slidesPerView={3}
						spaceBetween={20}
						speed={2000}
						loop={true}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className={styles.mainSwiper1}
					>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo4}`}
									src='/img/photo4.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo1}`}
									src='/img/photo1.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo4}`}
									src='/img/photo4.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo1}`}
									src='/img/photo1.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo4}`}
									src='/img/photo4.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo1}`}
									src='/img/photo1.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className={`${styles.wrapRight}`}>
					<Swiper
						direction={'vertical'}
						slidesPerView={2}
						spaceBetween={20}
						speed={2000}
						loop={true}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className={styles.mainSwiper2}
					>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo3}`}
									src='/img/photo3.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo2}`}
									src='/img/photo2.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo3}`}
									src='/img/photo3.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className={styles.img}>
								<Image
									className={`${styles.item} ${styles.photo2}`}
									src='/img/photo2.png'
									alt='photo1'
									width={420}
									height={570}
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}
