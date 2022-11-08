<script>
	export let first = false;
</script>

<span class:break-before-always={!first} class:break-before-auto={first}>
	<slot />
</span>

<style>
	.break-before-always {
		page-break-before: always;
	}
	.break-before-auto {
		page-break-before: auto;
	}
</style>
