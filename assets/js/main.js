let currentPage = 1;
const url = `https://jsonplaceholder.typicode.com/posts?userId=${currentPage}`
let posts = [];

async function chamarAPI(url){
    const resp = await fetch(url)
    if(resp.status == 200){
        posts = await resp.json();
        exibirPosts(posts);
    }
}
function exibirPosts(posts){
    const container = document.getElementById("post-container");
    container.innerHTML = "";

    posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `
    container.appendChild(postDiv);
        
    });
}

function updatePage(){
        currentPage++;
        chamarAPI(url);
}
document.querySelector("#button").addEventListener("click", updatePage);
chamarAPI(url);

    
