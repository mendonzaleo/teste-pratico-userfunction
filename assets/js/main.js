let currentPage = 1;
let posts = [];
const loadNewPage = document.getElementById("button");
const loadlastPage = document.getElementById("btn-last-page");
async function chamarAPI(){
    const url = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
    const resp = await fetch(url)
    if(resp.status == 200){
        posts = await resp.json();
        exibirPosts(posts);
    }else {
        console.error("Erro ao buscar os posts", resp.status);
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

function nextPage() {
    if(currentPage == 20){
        console.error("Não há mais páginas para mostrar!")
    }else{
        currentPage++;
        chamarAPI();
    }
}

function lastPage() {
    if(currentPage > 1){
        currentPage--;
        chamarAPI();
    }
}

loadNewPage.addEventListener("click", nextPage);
loadlastPage.addEventListener("click", lastPage);
chamarAPI();