import React from 'react';
import '../styles/_faq.scss';

type Props = {};

const FAQ = (props: Props) => {
	return (
		<div className='one-column-layout-row main-placement-7'>
			<div className='container'>
				<div className='content'>
					<h2 className='title'>Frequently Asked Questions</h2>
					<div className='accordion'>
						<div className='full-width'>
							<div className='content-wrapper'>
								<div className='header'>
									<p>How much do Transition lenses cost?</p>
									<div className='icon'>
										<div className='line line-one'></div>
										<div className='line line-two'></div>
									</div>
								</div>
								<div
									className='collapse show'
									style={{ height: '194px' }}
								>
									<div className='answers'>
										<p>
											The price of Transitions lenses will
											vary because there are many factors
											that affect the price of the
											eyeglass lenses you purchase. The
											price is set by the retail store or
											eyecare professional’s office where
											you make your purchase.
										</p>
										<p className='blank'></p>
										<p>
											The final price takes into
											consideration the lens material,
											lens type (single-vision, bifocal,
											or progressive), your prescription
											and any coatings you opt to add, as
											well as any special promotions or
											discounts that are offered. Also,
											many insurance providers provide
											coverage for Transitions lenses as
											part of their vision care plan. It’s
											always a good idea to check with
											your insurance provider to see
											what’s covered before your exam, and
											it never hurts to ask your eyecare
											professional if any specials or
											coupons are available.
										</p>
										<p className='blank'></p>
										<p>
											Finally, be sure to ask your eyecare
											professional for authentic
											Transitions brand lenses and request
											the certificate of authenticity when
											you pick up your new glasses.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
