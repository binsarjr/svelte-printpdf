# Svelte PrintPDF
My Component Print PDF support color,flexbox and grid system because using `window.print()` and css print. 

## Contributing
I'm happy if anyone has a PullRequest to my repo. You can add page number or etc if you think we need.


## Feature
- Full Support Css like flexbox,grid,color,etc (Browser Support)
- Auto Hide all element.only show PrintPdf when printing. [see PrintPdf.svelte file](./src/PrintPdf.svelte)

## Installation
```bash
npm install --save-dev svelte-printpdf
```

## Usage
[demo](https://svelte.dev/repl/ab8b266dda544e3f8cb6f90430c3e7ea?version=3.50.1)
```svelte
<script>
    import {PrintPdf, Page} from "svelte-printpdf"

    let print=false
</script>
<button on:click={() => {print=true}}>PRINT</button>
<PrintPdf bind:print={print}>
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