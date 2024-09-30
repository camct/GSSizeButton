Ecwid.OnAPILoaded.add(function() {
    Ecwid.OnPageLoaded.add(function(page) {
        console.log('Page type is', page.type, "!!!");
        if (page.type === 'PRODUCT') {
            console.log(page.productId);
            var productIds = [55001151, 74102380, 506210440, 570262509, 94782479];
  
            // Check if the current product ID is in the allowed list
            if (!productIds.includes(page.productId)) {return;}
            
            // Create a new anchor element
            const link = document.createElement('a');

            // Set the link text
            link.textContent = 'Click for sizing';

            // Set the href attribute
            link.href = 'https://www.grasssticks.com/skipolelengthcalc/';

            // Set the link to open in a new tab
            link.target = '_blank';

            // Create a style element for responsive design
            const style = document.createElement('style');
            style.textContent = `
                .sizing-button {
                    display: inline-block;
                    padding: 6px 12px;
                    width: 120px;
                    background-color: #4CAF50;
                    color: white;
                    border-radius: 4px;
                    text-decoration: none;
                    cursor: pointer;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 1.2;
                    transition: all 0.3s ease;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                    text-align: center;
                }
                .sizing-button:hover {
                    background-color: #45a049;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
                    transform: translateY(-1px);
                }
                @media (max-width: 768px) {
                    .sizing-button {
                        width: 100px;
                        font-size: 10px;
                        padding: 5px 10px;
                    }
                }
                @media (max-width: 480px) {
                    .sizing-button {
                        width: 80px;
                        font-size: 9px;
                        padding: 4px 8px;
                    }
                }
            `;

            // Add the style to the document head
            document.head.appendChild(style);

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