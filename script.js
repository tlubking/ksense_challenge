fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    let li = `<tr><th>Load Posts</th><th>Name</th><th>User Name</th><th>Email</th> <th>Phone</th><th>Website</th></tr>`;

    data.forEach((user) => {
      li += `<tr>
        <td onclick="${loadUserPosts(user.id)}"}>click to show</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
      </tr>`;
    });
    document.getElementById("users").innerHTML = li;
  });

function loadUserPosts(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      let li = `<tr><th>Title${id}</th><th>Body</th></tr>`;

      data.forEach((post) => {
        li += `<tr>
                  <td>${post.title} </td>
                  <td>${post.body}</td>
                </tr>`;
      });

      document.getElementById("userPosts").innerHTML = li;
    });
}
