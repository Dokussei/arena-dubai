// import Image from 'next/image';
import styles from '../../style/home/page.module.scss';

export default function Content3() {
	return (
		<div className={styles.content3}>
			<div className={styles.wrap}>
				<div className={styles.text}>
					<div className={styles.subTitle}>
						<h5>Get in Touch</h5>
						<div className={styles.line}></div>
					</div>

					<h1 className={styles.tittle}>Interested To Know More?</h1>
				</div>

				<form className={styles.form}>
					<div className={styles.inputField}>
						<label htmlFor='name'>Name</label>
						<input name='name' type='text' />
					</div>
					<div className={styles.inputField}>
						<label htmlFor='Email'>Email</label>
						<input
							name='Email'
							type='text'
							pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
						/>
					</div>
					<div className={styles.inputField}>
						<label htmlFor='phone'>Phone Number</label>
						<div className={styles.phone}>
							<select className={styles.countryCode}>
								<option>🇦🇪 +971</option>
								<option>🇷🇺 +7</option>
							</select>
							<input
								className={`${styles.phoneField}`}
								type='text'
								minLength='9'
								maxLength='14'
								pattern='[0-9+]+'
								required
							/>
						</div>
					</div>
					<div className={`${styles.inputField} ${styles.phone}`}>
						<label htmlFor='Investment'>Investment Amount</label>
						<select>
							<option default>100.000 EUR</option>
							<option>200.000 EUR</option>
							<option>500.000 EUR</option>
							<option>1.000.000 EUR</option>
							<option>2.000.000 EUR</option>
						</select>
					</div>
					<div className={styles.areaField}>
						<label htmlFor='Message'>Message</label>
						<textarea name='Message' />
					</div>
					<button className={styles.btnForm} type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
