// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.querySelector('.theme-toggle');
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggleBtn.classList.toggle('light', isLight);
    themeToggleBtn.classList.toggle('dark', !isLight);
}

// Function to load the saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggleBtn.classList.add('light');
    } else {
        themeToggleBtn.classList.add('dark');
    }
}

// Load the theme when the page is loaded
loadTheme();
