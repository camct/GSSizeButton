document.addEventListener('DOMContentLoaded', function() {
    insertButton();
});


function insertButton() {
    const link = document.createElement('a');

    link.textContent = 'Click for sizing';

    link.href = 'https://www.grasssticks.com/skipolelengthcalc/';

    // Set the link to open in a new tab
    link.target = '_blank';

    // Add the class to the link
    link.className = 'sizing-button';

    // Insert the link into the DOM
    const placeholder = document.querySelector('#lengthInputDiv');
    if (placeholder) {
        placeholder.appendChild(link);
        console.log('Link inserted');
    } else {
    console.error('Button placeholder not found');
    }
}

