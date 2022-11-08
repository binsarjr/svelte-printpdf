<script>
	import Page from '$lib/Page.svelte';
	import PrintPdf from '$lib/PrintPdf.svelte';
	let print = false;
</script>

<button on:click={() => (print = true)}>print</button>
<PrintPdf bind:print>
	<Page>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</Page>
	<Page>wokei mantep</Page>
</PrintPdf>
