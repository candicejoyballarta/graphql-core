import React, { useState } from 'react';
import '../../styles/_faq.scss';
import { motion, AnimatePresence } from 'framer-motion';
import makeItalic from '../../utils/makeItalic';

interface IFAQ {
	txtQuestion: string;
	txtAnswer: string[];
}

const FAQ = ({ txtQuestion, txtAnswer }: IFAQ) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className='accordion'>
			<div className='full-width'>
				<div className='content-wrapper'>
					<motion.div
						initial={false}
						className='header'
						onClick={() => setIsActive(!isActive)}
					>
						{makeItalic(txtQuestion, '')}
						<AnimatePresence>
							<div className='icon'>
								{isActive ? (
									<>
										<div className='line line-one'></div>
										<motion.div
											key='arrow'
											className='line line-two'
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
										<div className='line line-one'></div>
										<motion.div
											key='arrow'
											className='line line-two'
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

					<div className='collapse'>
						<AnimatePresence>
							{isActive && (
								<motion.div
									key='answers'
									className='answers'
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
											{makeItalic(ans, '')}
											<p className='blank'></p>
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
