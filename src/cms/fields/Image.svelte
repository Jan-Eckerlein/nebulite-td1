<script lang="ts">
	import {editMode} from '../stores/editStore'
	
	export let src = 'https://www.mxwiki.com/password/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png';
	export let alt = 'Image';
	export let sizing = 'cover';
	export let positionX = 'center';
	export let positionY = 'center';

	let style = '';
	$: style = `object-fit: ${sizing}; object-position: ${positionX} ${positionY};`;
</script>

{#if $editMode}
	<div class="edit-wrapper">
		<img 
			{src} 
			{alt} 
			{style}
		/>
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
			<label>
				<span class="font-mono">Sizing: </span>
				<select class="cms-edit" bind:value={sizing}>
					<option value="cover">Cover</option>
					<option value="contain">Contain</option>
					<option value="auto">Auto</option>
				</select>
			</label>
			<label>
				<span class="font-mono">Position X, Y </span>
				<select class="cms-edit" bind:value={positionX}>
					<option value="left">Left</option>
					<option value="center">Center</option>
					<option value="right">Right</option>
				</select>
				<select class="cms-edit" bind:value={positionY}>
					<option value="top">Top</option>
					<option value="center">Center</option>
					<option value="bottom">Bottom</option>
				</select>
			</label>
		</div>
	</div>
{:else}
	<img 
		{src} 
		{alt} 
		{style}
	/>
{/if}

<style>
	.edit-wrapper {
		position: relative;
		width: 100%;
	}
	
	img {
		width: 100%;
		height: 100%;
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