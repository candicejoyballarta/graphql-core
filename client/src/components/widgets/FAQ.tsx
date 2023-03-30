import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import makeItalic from '../../utils/makeItalic';
import styles from '../../styles/FAQ.module.scss';

interface IFAQ {
	txtQuestion: string;
	txtAnswer: string[];
}

const FAQ = ({ txtQuestion, txtAnswer }: IFAQ) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={styles.accordion}>
			<div className={styles.fullWidth}>
				<div className={styles.contentWrapper}>
					<motion.div
						initial={false}
						className={styles.header}
						onClick={() => setIsActive(!isActive)}
					>
						{makeItalic(txtQuestion, '')}
						<AnimatePresence>
							<div className={styles.icon}>
								{isActive ? (
									<>
										<div
											className={`${styles.line} ${styles.lineOne}`}
										></div>
										<motion.div
											key='arrow'
											className={`${styles.line} ${styles.lineTwo}`}
											initial='open'
											animate='collapsed'
											variants={{
												open: {
													scale: 1,
												},
												collapsed: {
													scale: 0.1,
												},
											}}
											transition={{
												duration: 0.1,
												ease: [0.04, 0.62, 0.23, 0.98],
											}}
										></motion.div>
									</>
								) : (
									<>
										<div
											className={`${styles.line} ${styles.lineOne}`}
										></div>
										<motion.div
											key='arrow'
											className={`${styles.line} ${styles.lineTwo}`}
											initial='collapsed'
											animate='open'
											variants={{
												open: {
													scale: 1,
												},
												collapsed: {
													scale: 0.1,
												},
											}}
											transition={{
												duration: 0.1,
												ease: [0.04, 0.62, 0.23, 0.98],
											}}
										></motion.div>
									</>
								)}
							</div>
						</AnimatePresence>
					</motion.div>

					<div className={styles.collapse}>
						<AnimatePresence>
							{isActive && (
								<motion.div
									key='answers'
									className={styles.answers}
									initial='collapsed'
									animate='open'
									exit='collapsed'
									variants={{
										open: { opacity: 1, height: 'auto' },
										collapsed: {
											opacity: 0,
											height: 0,
										},
									}}
									transition={{
										duration: 0.4,
										ease: [0.04, 0.62, 0.23, 0.98],
									}}
								>
									{txtAnswer.map((ans, index) => (
										<div key={index}>
											{makeItalic(ans, styles.ans)}
											<p className={styles.blank}></p>
										</div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
