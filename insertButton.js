Ecwid.OnAPILoaded.add(function() {
    console.log('ecwid api loaded');

    // Insert CSS styles
    const styles = `
        .length-sizing-button {
            display: inline-block !important;
            padding: 6px 12px !important;
            width: 120px !important;
            background-color: #4CAF50 !important;
            color: white !important;
            border-radius: 4px !important;
            text-decoration: none !important;
            cursor: pointer !important;
            font-family: Arial, sans-serif !important;
            font-size: 12px !important;
            font-weight: bold !important;
            line-height: 1.2 !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2) !important;
            text-align: center !important;
        }
        .length-sizing-button:hover {
            background-color: #45a049 !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3) !important;
            transform: translateY(-1px) !important;
        }
        @media (max-width: 768px) {
            .length-sizing-button {
                width: 100px !important;
                font-size: 10px !important;
                padding: 5px 10px !important;
            }
        }
        @media (max-width: 480px) {
            .length-sizing-button {
                width: 80px !important;
                font-size: 9px !important;
                padding: 4px 8px !important;
            }
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);

    Ecwid.OnPageLoaded.add(function(page) {
        console.log('Page type is', page.type, "!!!");
        if (page.type === 'PRODUCT') {
            console.log(page.productId);
            var productIds = [55001151, 74102380, 506210440, 570262509, 94782479];
  
            // Check if the current product ID is in the allowed list
            if (!productIds.includes(page.productId)) {return;}
            
            const link = document.createElement('a');

            link.textContent = 'Click for sizing';

            link.href = 'https://www.grasssticks.com/skipolelengthcalc/';

            // Set the link to open in a new tab
            link.target = '_blank';

            // Add the class to the link
            link.className = 'length-sizing-button';

            // Insert the link into the DOM
            const placeholder = document.querySelector('.product-details-module.details-product-option.details-product-option--textfield.details-product-option--Length-0028cm-or-inches0029');
            const lengthInputDiv = placeholder.querySelector('.product-details-module__title');
            if (lengthInputDiv) {
                lengthInputDiv.appendChild(link);
                console.log('Link inserted');
            } else {
                console.error('Length input div not found');
            }
        }
    });
});