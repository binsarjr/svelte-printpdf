<script>
	import Page from '$lib/Page.svelte';
	import PrintPdf from '$lib/PrintPdf.svelte';

	let names = ['nama'];
	for (let i = 0; i < 50; i++) {
		names.push('nama ' + i);
	}

	let print = false;
</script>

<button on:click={() => (print = true)}>cetak</button>
<PrintPdf bind:print>
	<Page>
		<table>
			<tr>
				<th>No</th>
				<th>nama</th>
			</tr>
			<tbody>
				{#each names as name, i}
					<tr>
						<td>{i + 1}</td>
						<td>
							{name}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</Page>
	<Page>okei sip</Page>
</PrintPdf>
