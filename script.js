// Force reload logic for logo
document.querySelector('.nav-logo').addEventListener('click', function (e) {
    e.preventDefault();
    // Append timestamp to force browser to fetch a fresh version
    const url = new URL(window.location.href);
    url.searchParams.set('reload', new Date().getTime());
    window.location.href = url.toString();
});

function copyCode() {
    const code = document.getElementById('promoCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerText;
        btn.innerText = '복사완료!';
        btn.style.background = '#28a745';

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Add scroll reveal effect for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.quest-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`; // Staggered delay
        observer.observe(card);
    });
});
