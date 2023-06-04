<!-- a simple VUE Hero section -->

<script lang="ts">

</script>

<template>
	<section class="w-full bg-gradient-to-br from-violet-600 to-blue-400">
		<div class="container flex  gap-8 py-32">
			<slot name="image" />
			<slot name="text" />
		</div>
	</section>
</template>