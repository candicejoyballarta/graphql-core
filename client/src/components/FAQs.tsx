import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FAQS } from '../queries/rootQueries';
import FAQ from './widgets/FAQ';
import styles from '../styles/FAQ.module.scss';

const FAQs = () => {
	const { loading, error, data } = useQuery(GET_FAQS);

	if (error) {
		<h1>Error</h1>;
	}
	return (
		<>
			{!loading && !error && (
				<div className='one-column-layout-row main-placement-7'>
					<div className={styles.container}>
						<div className={styles.content}>
							<h2 className={styles.title}>
								Frequently Asked Questions
							</h2>
							{data.faqs.map(
								(
									faq: {
										txtQuestion: string;
										txtAnswer: string[];
									},
									index: number
								) => (
									<FAQ
										key={index}
										txtQuestion={faq.txtQuestion}
										txtAnswer={faq.txtAnswer}
									/>
								)
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default FAQs;
