<script>
	import {editMode} from '../stores/editStore'

	export let value = '';
	export let minRows = 1;
	export let maxRows = null;
	
	$: minHeight = `${1 + minRows * 1.2}em`;
	$: maxHeight = maxRows ? `${1 + maxRows * 1.2}em` : `auto`;
</script>

{#if $editMode}
	<div class="edit-wrapper">
		<pre
			aria-hidden="true"
			style="min-height: {minHeight}; max-height: {maxHeight};"
		>{value + '\n'}</pre>
		<textarea class="cms-edit" bind:value></textarea>
	</div>
{:else}
	<p>{value}</p>
{/if}

<style>
	.edit-wrapper {
		position: relative;
		width: 100%;
	}
	
	pre, textarea, p {
		font-family: inherit;
		padding: 0;
		box-sizing: border-box;
		line-height: 1.2;
		overflow: hidden;
	}

	pre {
		visibility: hidden;
	}
	
	textarea {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		resize: none;
	}
</style>