import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_FAQS } from '../queries/rootQueries';
import FAQ from './FAQ';

const FAQs = (props: Props) => {
	const { loading, error, data } = useQuery(GET_FAQS);

	if (loading) {
		return <h1>loading</h1>;
	}

	if (error) {
		<h1>Error</h1>;
	}
	return (
		<>
			{!loading && !error && (
				<div className='one-column-layout-row main-placement-7'>
					<div className='container'>
						<div className='content'>
							<h2 className='title'>
								Frequently Asked Questions
							</h2>
							{data.faqs.map((faq, index) => (
								<FAQ
									key={index}
									txtQuestion={faq.txtQuestion}
									txtAnswer={faq.txtAnswer}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default FAQs;
