// Main JavaScript for Bootstrap Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initContactForm();
    initCommentForm();
});

// Contact Form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Comment Form handling
function initCommentForm() {
    const commentForm = document.getElementById('commentForm');
    if (!commentForm) return;

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"]');
        const name = this.querySelector('input[type="text"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        if (!name || !message) return;

        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Posting...';
        submitBtn.disabled = true;

        setTimeout(() => {
            const commentsList = document.querySelector('.comments-list');
            const newComment = document.createElement('div');
            newComment.className = 'd-flex mb-4';
            newComment.innerHTML = `
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=20c997&color=fff" class="rounded-circle me-3" width="50" height="50">
                <div>
                    <h6 class="fw-bold mb-1">${name} <small class="text-muted fw-normal ms-2">Just now</small></h6>
                    <p class="mb-2">${message}</p>
                </div>
            `;
            
            // Chèn comment mới lên đầu danh sách
            commentsList.insertBefore(newComment, commentsList.firstChild);

            commentForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}
