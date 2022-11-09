# Svelte PrintPDF
Minimalistic Print PDF wrapped into svelte component, using `window.print()` and css print to support flexbox and grid layout.

## Contributing
We open to any contribution you could to support this project, you could help us on page numbering feature or you could propose new features to include.

## Features
= Full support on Flexbox, Grid Layout (Browser Support)
- Could translate various CSS
- Print specific `element.only`, read more on [PrintPdf.svelte](./src/PrintPdf.svelte)

## Installation
```zsh
// Yarn Installation
yarn install --dev svelte-printpdf

// or if you prefer NPM Installation
npm install --save-dev svelte-printpdf
```

## Usage Sample
See [demo](https://svelte.dev/repl/ab8b266dda544e3f8cb6f90430c3e7ea?version=3.50.1)

```svelte
<script>
  import {PrintPdf, Page} from "svelte-printpdf"

  let print = false
</script>
<button on:click={() => { print = true }}>PRINT</button>
<PrintPdf bind:print={ print }>
  <Page>
      <h1 class="heading">Page One</h1>
  </Page>
  <Page>
      <h1 style="color: text-red">Page Two</h1>
  </Page>
</PrintPdf>

<style>
  .heading {
      color: text-blue;
  }
</style>
```
