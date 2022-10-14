// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const dataHTML = data
    .map(
      (user) =>
        `
            <div class="user" onclick="showUserPosts(${user.id})">
                <div class="user-card">
                    <div class="user-card__container">
                        <h3>${user.name}</h4>
                        <p><b>Email:</b> ${user.email}</p>
                        <p><b>Phone:</b> ${user.phone}</p>
                        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                    </div>
                </div>
            </div>
        `
    )
    .join("");

  document.querySelector(".user-list").innerHTML = dataHTML;
}
main();

function showUserPosts(id) {
    localStorage.setItem('id', id);
    window.location.href = `${window.location.origin}/user.html`
}