<script>
	export let text = 'Default Text';
</script>
<div class="bg-red-300 rounded-xl p-8">
	<h2>Own state:</h2>
	<p>{text}</p>
	<button on:click={() => text = 'New Text'}>Change Text</button>
	<input type="text" bind:value={text}>
	<h2>Inserted Component:</h2>
	<slot></slot>
</div>