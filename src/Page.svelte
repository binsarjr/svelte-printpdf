<span class="AppPdf-class-page">
    <slot />
</span>

<style>
    span {
        page-break-after: always;
    }
    :global(.AppPdf-class-page:last-child) {
        /* last page must be auto,no need blank page in the last page */
        page-break-after: auto;
    }
</style>
