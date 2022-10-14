const id = localStorage.getItem('id');
const postListElem = document.querySelector('.post-list')

renderPosts(id);

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = await posts.json();
    postListElem.innerHTML = data.map(post => postHTML(post)).join("");
}

async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id);
}

function postHTML(post) {
    return `
        <div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>
    `
}