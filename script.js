document.addEventListener('DOMContentLoaded', function() {
    // Handle comment submission for each post
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent page reload on form submission

            const nameInput = form.querySelector('input'); // Name input field
            const commentInput = form.querySelector('textarea'); // Comment input field
            const commentsSection = form.closest('.post').querySelector('.comments'); // Locate the comment section

            const name = nameInput.value.trim();
            const comment = commentInput.value.trim();

            // Check if name and comment are not empty
            if (name && comment) {
                // Create a new comment element
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;

                // Append the comment to the comment section
                commentsSection.appendChild(commentElement);

                // Clear the form inputs
                nameInput.value = '';
                commentInput.value = '';
            } else {
                alert('Please fill out both fields before submitting.');
            }
        });
    });
});
