// ডার্ক মোড টগল করার ফাংশন
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // মোড সেভ করে রাখার জন্য লোকাল স্টোরেজ
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// পেজ লোড হওয়ার সময় আগের থিম চেক করা
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
