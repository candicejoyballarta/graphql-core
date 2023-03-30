import React from 'react';

// Check if the word 'Transitions' is present in text
const makeItalic = (text: string, className: string) => {
	// Split text into array of strings
	let description = text.split(' ');
	return (
		<div className={className}>
			{/* Iterate through the array */}
			{description.map((word: string, index: number) => {
				// if word matches 'Transitions' word, then italicize
				if (word === 'Transitions') {
					return <i key={index}> {word}</i>;
				} else {
					// else, return only the word
					return <React.Fragment key={index}> {word}</React.Fragment>;
				}
			})}
		</div>
	);
};

export default makeItalic;
