

const newFormHandler = async (event) => {
    event.preventDefault();
console.log('Clicked')
    const message = document.querySelector('#message-input').value.trim();
    
console.log(message, "message")
console.log(blogPost_id, "BP")
    if(message && blogPost_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ message, blogPost_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(message, blogPost_id, 'message and id')
console.log(response, 'response!')
        if (response.ok) {
            document.location.replace(`/blogPost/${blogPost_id}`);
        } else {
            alert('Failed to create comment');
        }
    }
};

 


document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
    
 