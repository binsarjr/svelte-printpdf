<script>
    export let print = false;
    // manual edit in style tag
    const appId = "PrintPdf-hooh-id";

    // 		storing display computed
    let displays = [];

    const selectorNotApp = `:not(#${appId}):not(#${appId} *):not(script):not(link)`;

    // temporary element store when find element
    let stackElements = [];
    const findElementIsNotAppPdf = (
        el,
        selector,
        callback,
        _props = { i: 0 } // need reference object
    ) => {
        el.querySelectorAll(selector).forEach((el) => {
            if (el.querySelector("#" + appId)) {
                findElementIsNotAppPdf(el, selectorNotApp, callback, _props);
            } else {
                if (!stackElements.includes(el)) {
                    callback(el, _props.i++);
                    stackElements.push(el);
                }
            }
        });
    };

    $: if (print) {
        // Set all display element except AppPdf to none
        findElementIsNotAppPdf(
            document.body,
            `body > ${selectorNotApp}`,
            (el, i) => {
                displays[i] = window.getComputedStyle(el).display;
                el.style.display = "none";
            }
        );
        // set to empty because is done
        stackElements = [];

        // 		print now
        window.print();

        // show them back
        findElementIsNotAppPdf(
            document.body,
            `body > ${selectorNotApp}`,
            (el, i) => {
                el.style.display = displays[i];
            }
        );
        // set to empty because is done
        stackElements = [];

        // reset display
        displays = [];
        print = false;
    }
</script>

<span id={appId}>
    <slot />
</span>

<style>
    @media print {
        #PrintPdf-hooh-id {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        :global(table, img, svg, p) {
            page-break-inside: auto;
        }
    }
</style>
