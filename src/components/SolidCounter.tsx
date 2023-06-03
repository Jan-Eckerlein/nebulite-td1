// write me a solidjs counter component

import { createSignal } from 'solid-js';

export default function SolidCounter() {
	const [count, setCount] = createSignal(0);

	return (
		<section class='container bg-blue-400'>
			<p>Count: {count()}</p>
			<button onClick={() => setCount(count() + 1)}>Increment</button>
			<button onClick={() => setCount(count() - 1)}>Decrement</button>
		</section>
	);
}