document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');

    function toggleSidebar() {
        // Toggles the 'closed' class on the sidebar to hide/show it
        sidebar.classList.toggle('closed');
        // Toggles the 'active' class on the hamburger menu for the animation
        hamburger.classList.toggle('active');
    }

    // Event listener for the hamburger menu
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', toggleSidebar);
    }

    // Optional: Close sidebar after clicking a navigation link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the sidebar is open before attempting to close
            if (!sidebar.classList.contains('closed')) {
                toggleSidebar();
            }
        });
    });
});