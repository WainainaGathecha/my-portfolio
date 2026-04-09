// Cursor spotlight glow
document.addEventListener('mousemove', function(e){
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            // Remove active from links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            // Add active to the matching link
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, {
    rootMargin: '-40% 0px -60% 0px'
});

sections.forEach(function(section){
    observer.observe(section);
})
