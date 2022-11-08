<script lang="ts">
	type Callback = (el: HTMLElement, i: number) => void | Promise<void>;
	export let print = false;
	const appId = `SveltePrintPDF_${Math.floor(Math.random() * 999999999999)}`;

	// 		storing display computed
	let displays: string[] = [];

	const selectorNotApp = `:not(#${appId}):not(#${appId} *):not(script):not(link)`;

	// temporary element store when find element
	let stackElements: Element[] = [];
	const findElementIsNotAppPdf = (
		el: Element,
		selector: string,
		callback: Callback,
		_props = { i: 0 } // need reference object
	) => {
		const recursive = (el: Element, selector: string, callback: Callback, _props = { i: 0 }) => {
			el.querySelectorAll(selector).forEach((el) => {
				if (el.querySelector('#' + appId)) {
					recursive(el, selectorNotApp, callback, _props);
				} else {
					if (!stackElements.includes(el)) {
						callback(el as HTMLElement, _props.i++);
						stackElements.push(el);
					}
				}
			});
		};
		recursive(el, selector, callback);
		// set to empty because is done
		stackElements = [];
	};

	$: if (print) {
		// Set to none all display element except AppPdf
		findElementIsNotAppPdf(document.body, `body > ${selectorNotApp}`, (el, i) => {
			displays[i] = window.getComputedStyle(el).display;
			el.style.display = 'none';
		});

		// 		print now
		window.print();

		// show them back
		findElementIsNotAppPdf(document.body, `body > ${selectorNotApp}`, (el, i) => {
			el.style.display = displays[i];
		});

		// reset display
		displays = [];
		print = false;
	}
</script>

<span id={appId} class="__printpdf">
	<slot />
</span>

<style>
	.__printpdf {
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}
	@media print {
		:global(table, img, svg, p) {
			page-break-inside: auto;
		}
	}
</style>
