import React from 'react';

export default function SecondHero(props) {
	return (
		<section className="w-full bg-blue-500">
			<div className="container grid grid-cols-2 gap-8 py-32">
				{props.text}
				{props.image}
			</div>
		</section>
	);
}