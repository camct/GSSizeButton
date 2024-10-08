Ecwid.OnAPILoaded.add(function() {
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
            link.className = 'sizing-button';

            // Insert the link into the DOM
            const placeholder = document.querySelector('.product-details-module.details-product-option.details-product-option--textfield.details-product-option--Length-0028cm-or-inches0029');
            if (placeholder) {
                placeholder.appendChild(link);
                console.log('Link inserted');
            } else {
                console.error('Button placeholder not found');
            }
        }
    });
});