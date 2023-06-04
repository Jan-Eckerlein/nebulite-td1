<script lang="ts">
	export let edit = false;
	export let src = 'https://www.mxwiki.com/password/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';
	export let alt = 'Image';
</script>

{#if edit}
	<div class="edit-wrapper">
		<img {src} {alt}>
		<div class="cms-edit-group">
			<h3 class="font-mono font-bold">Image Options:</h3>
			<label>
				<span class="font-mono">URL: </span>
				<input class="cms-edit" bind:value={src}>
			</label>
			<label>
				<span class="font-mono">Alt: </span>
				<input class="cms-edit" bind:value={alt}>
			</label>
		</div>
	</div>
{:else}
	<img {src} {alt}>
{/if}

<style>
	.edit-wrapper {
		position: relative;
		width: 100%;
	}
	
	img {
		width: 100%;
	}
	
	.cms-edit-group {
		background-color: #0000004A;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
</style>