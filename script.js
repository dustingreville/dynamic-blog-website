const newPost = document.getElementById('submit');
const postTitle = document.getElementById('title');
const clearForm = document.getElementById('reset');
const postContent = document.getElementById('content');
const postImage = document.getElementById('image');
const displayNewPost = document.getElementById('blogs');


newPost.addEventListener("click", createPost);

function createPost(event) {
    event.preventDefault();

    const newTitle = postTitle.value;
    const newContent = postContent.value;
    const newImage = postImage.value;

    localStorage.setItem("title", newTitle);
    localStorage.setItem("content", newContent);
    localStorage.setItem("image", newImage);

    displayPost();
}

function displayPost(){
    const titleFromStorage = localStorage.getItem("title");
    const contentFromStorage = localStorage.getItem("content");
    const imageFromStorage = localStorage.getItem("image");
    const postFromStorage = titleFromStorage + contentFromStorage + imageFromStorage; 
        if (postFromStorage){
            displayNewPost.textContent = postFromStorage
};
}

displayPost();

