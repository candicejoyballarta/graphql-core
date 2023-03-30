import React, { useState } from 'react';
import '../../styles/_faq.scss';
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
					<div
						className='header'
						onClick={() => setIsActive(!isActive)}
					>
						{makeItalic(txtQuestion, '')}
						<div className='icon'>
							{isActive ? (
								<div className='line line-one'></div>
							) : (
								<>
									<div className='line line-one'></div>
									<div className='line line-two'></div>
								</>
							)}
						</div>
					</div>

					<div className='collapse show'>
						{isActive && (
							<div className='answers'>
								{txtAnswer.map((ans, index) => (
									<div key={index}>
										{makeItalic(ans, '')}
										<p className='blank'></p>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
