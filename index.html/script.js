async function loadBlogs(){
  const res = await fetch("/api/blogs");
  const blogs = await res.json();
  document.getElementById("blogs").innerHTML =
    blogs.map(b=>`<div><h3>${b.username}</h3><p>${b.text}</p></div>`).join("");
}
window.onload = loadBlogs;
