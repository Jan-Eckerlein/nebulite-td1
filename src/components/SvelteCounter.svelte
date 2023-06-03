<script>
	export let count = 0;
</script>

<section class="container bg-orange-500 text-white font-mono">
	<h1>Counter</h1>
	<p>Count: {count}</p>
	<button on:click={() => count++}>Increment</button>
	<button on:click={() => count--}>Decrement</button>
</section>