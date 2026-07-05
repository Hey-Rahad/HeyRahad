document.addEventListener('DOMContentLoaded', () => {
    // ১. চাঁদের আইকন খুঁজে বের করা
    const moonIcon = document.querySelector('.fa-moon');
    
    // ২. যদি চাঁদ আইকন পায়, তবে ক্লিক ফাংশন সেট করে দেওয়া
    if (moonIcon) {
        moonIcon.style.cursor = 'pointer';
        moonIcon.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // ৩. আগের মোড লোড করা
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
