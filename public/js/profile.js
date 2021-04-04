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

};

document
    .querySelector('.new-blogPostForm')
    .addEventListener('submit', newFormHandler);
document
    .querySelector('.blogPost-list')
    .addEventListener('click', delButtonHandler);