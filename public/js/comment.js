const newFormHandler = async (event) => {
    event.preventDefault();

    const message = document.querySelector('#message-input').value.trim();

    if(message) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create comment');
        }
    }
};
const delButtonHandler = async (event) => {
    event.preventDefault();
    if(event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comments/${id}`, {
            method:'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete comment')
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
    
// document
//     .querySelector('.comment-list')
//     .addEventListener('click', delButtonHandler);