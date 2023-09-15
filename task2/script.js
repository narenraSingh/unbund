// Add JavaScript to toggle the active option and display corresponding car listings
document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Remove 'active' class from all options
            options.forEach(o => o.classList.remove('active'));

            // Add 'active' class to the clicked option
            option.classList.add('active');
        });
    });
});
