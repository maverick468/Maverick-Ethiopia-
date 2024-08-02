document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');
    const forwardButton = document.getElementById('forward-button');

    // Function to check navigation history
    function updateButtons() {
        backButton.disabled = !window.history.canGoBack();
        forwardButton.disabled = !window.history.canGoForward();
    }

    // Event listeners for buttons
    backButton.addEventListener('click', function() {
        window.history.back();
    });

    forwardButton.addEventListener('click', function() {
        window.history.forward();
    });

    // Initial check on page load
    updateButtons();

    // Update buttons on history changes
    window.addEventListener('popstate', updateButtons);
});
