document.addEventListener('DOMContentLoaded', function() {
    // Get all the input elements
    const currentGemsInput = document.getElementById('currentGems');
    const monthlyCardSelect = document.getElementById('monthlyCard');
    
    // Get result elements
    const totalGemsSpan = document.getElementById('totalGems');
    const estimatedPullsSpan = document.getElementById('estimatedPulls');

    // Add event listeners to inputs
    currentGemsInput.addEventListener('input', calculateResources);
    monthlyCardSelect.addEventListener('change', calculateResources);

    function calculateResources() {
        // Get current values
        const currentGems = parseInt(currentGemsInput.value) || 0;
        const hasMonthlyCard = monthlyCardSelect.value === 'yes';

        // Calculate monthly card gems (if active)
        const monthlyCardGems = hasMonthlyCard ? 3000 : 0;

        // Calculate total gems
        const totalGems = currentGems + monthlyCardGems;

        // Calculate estimated pulls (assuming 160 gems per pull)
        const estimatedPulls = Math.floor(totalGems / 160);

        // Update the display
        totalGemsSpan.textContent = totalGems;
        estimatedPullsSpan.textContent = estimatedPulls;
    }

    // Initial calculation
    calculateResources();
}); 