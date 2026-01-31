// Select all buttons with the class 'favorite-icon'
const favoriteButtons = document.querySelectorAll('.favorite-icon');

// Add click event listener to each button
favoriteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the 'filled' class
        this.classList.toggle('filled');

        // Check if the button has the 'filled' class
        if (this.classList.contains('filled')) {
            // User Story 7: Change to filled heart
            this.innerHTML = '&#10084;';
        } else {
            // User Story 7: Change to empty heart
            this.innerHTML = '&#9825;';
        }
    });
});
