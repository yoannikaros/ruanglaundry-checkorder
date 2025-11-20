<script lang="ts">
	import '../app.css';
	import { app, initializeAnalytics } from '$lib/firebase';
	import { onMount } from 'svelte';
	
	let { children } = $props();

	// Initialize Firebase Analytics on client side
	onMount(async () => {
		await initializeAnalytics();
	});
</script>

{@render children()}
