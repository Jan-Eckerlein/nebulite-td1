<script>
	export let text;
	export let edit = false;
</script>

{#if edit}
	<input type="text" bind:value={text} />
{:else}
	{text}
{/if}