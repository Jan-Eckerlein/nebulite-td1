// Write a simple vue component with a button that triggers an alert when clicked. also make an input field with two data binding to a p

// Path: src/components/VueAlertComponent.vue

<script>
	export default {
		data() {
			return {
				inputText: 'default text'
			}
		},
		methods: {
			alertMe() {
				alert('Hello World');
			}
		}
	}
</script>

<template>
	<div class="bg-green-500 p-8">
		<h3>VUEJS</h3>
		<button @click="alertMe">Click Me</button>
		<input type="text" v-model="inputText" />
		<p>{{ inputText }}</p>
	</div>
</template>