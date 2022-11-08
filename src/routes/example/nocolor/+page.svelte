<script>
	import Page from '$lib/Page.svelte';
	import PrintPdf from '$lib/PrintPdf.svelte';
	let print = false;
</script>


<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<button on:click={() => (print = true)}>print</button>
<PrintPdf bind:print>
	<Page first>
		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</Page>
	<Page>wokei mantep</Page>
</PrintPdf>
