/**
 * New Kid Theme JavaScript
 * Handles theme-specific functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Handle back button functionality for block patterns
    const backButtons = document.querySelectorAll('a[href="#"]');
    
    backButtons.forEach(function(button) {
        // Check if the button text contains "GO BACK"
        if (button.textContent.includes('GO BACK') || button.textContent.includes('← GO BACK')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                window.history.back();
            });
            
            // Add cursor pointer for better UX
            button.style.cursor = 'pointer';
        }
    });
    
});
