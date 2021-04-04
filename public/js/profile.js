const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogPost-title').value.trim();
    const message = document.querySelector('#message-input').value.trim();

    if(title && message) {
        const response = await fetch('/api/blogPosts', {
            method: 'POST',
            body: JSON.stringify({ title, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create blog post');
        }
    }
};
const delButtonHandler = async (event) => {
    event.preventDefault();
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogPosts/${id}`, {
            method:'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete blog post')
        }
    }
};

document
    .querySelector('.new-blogPost-form')
    .addEventListener('submit', newFormHandler);
document
    .querySelector('.blogPost-list')
    .addEventListener('click', delButtonHandler);