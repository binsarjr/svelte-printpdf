import { writable } from 'svelte/store'
// for easy tracking page element in PrintPdf.svelte
export let pageClass = writable('___svelteprintpagepdf__')