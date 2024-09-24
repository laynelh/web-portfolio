console.log("JavaScript file is linked and running!");

const buttons = document.querySelectorAll('.color-btn');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Log which button was clicked
        const imageNumber = this.getAttribute('data-image');
        console.log(`Button clicked: Background ${imageNumber}`);

        // Identify the inner-wrapper element
        const innerWrapper = document.querySelector('.inner-wrapper');
        console.log('inner-wrapper element selected:', innerWrapper);

        // Remove 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        this.classList.add('selected');

        // Switch statement to handle specific background images for each button
        switch (imageNumber) {
            case '1': // Light Mode
                innerWrapper.style.backgroundImage = `url(images/background1.jpg)`;
                console.log('Background changed to: images/background1.jpg');
                break;
            case '2': // Dark Mode
                innerWrapper.style.backgroundImage = `url(images/background.jpg)`;
                console.log('Background changed to: images/background.jpg');
                break;
            default:
                innerWrapper.style.backgroundImage = `url(images/background1.jpg)`; // Default background
                console.log('Background changed to default: images/background1.jpg');
        }
    });
});