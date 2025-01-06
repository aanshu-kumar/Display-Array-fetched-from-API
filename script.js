document.addEventListener("DOMContentLoaded", () => {
  let box1 = document.querySelector(".box1");
  let box2 = document.querySelector(".box2");
  let box3 = document.querySelector(".box3");

  function PromiseAPI1() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        let response = await fetch("https://dummyjson.com/posts");
        let data = await response.json();
        console.log(data.posts);
        data.posts.map((item) => {
          box1.innerHTML += `
                    
                     <section class="posts" id=${item.id}>
                        <p>UserID : ${item.userId}</p>
                        <h2 class="title">${item.title}</h2>
                        <p class="body">${item.body}</p>
                        <div class="tags">
                            <p>Tags:</p>
                            <ul>
                                <li>${item.tags[0]}</li>
                                <li>${item.tags[1]}</li>
                                <li>${item.tags[2]}</li>
                            </ul>
                        </div>
                        <div class="reactions">
                            <div id="like">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#000"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.998 5.639c.272-1.29-.565-2.63-1.788-3.044-.593-.219-1.22-.17-1.744.01-.521.18-1.02.516-1.33.98l-3.64 5.418c.555.293.934.877.934 1.549v10.75H6.91h9.77c1.614 0 2.523-1.004 3.214-2.1.758-1.201 1.251-2.48 1.618-3.62.169-.527.313-1.032.443-1.484l.031-.11c.14-.487.26-.898.38-1.233.332-.926.227-1.848-.299-2.548-.52-.69-1.366-1.055-2.307-1.055h-4a.26.26 0 0 1-.2-.084c-.036-.04-.077-.117-.058-.256z"/><path d="M2.18 10.62c0-.59.448-1.068 1-1.068h3.5c.552 0 1 .478 1 1.068v10.682h-4.5c-.552 0-1-.479-1-1.068z"/></g></svg>         
                                <p>${item.reactions.likes}</p>
                            </div>
                        <div style="height: 20px; border-left: 2px solid black ;"></div>
                        <div id="dislike">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.609 5.5v10.16c0 .4-.12.79-.34 1.12l-2.73 4.06c-.43.65-1.5 1.11-2.41.77-.98-.33-1.63-1.43-1.42-2.41l.52-3.27c.04-.3-.04-.57-.21-.78a.93.93 0 0 0-.69-.31h-4.11c-.79 0-1.47-.32-1.87-.88-.38-.54-.45-1.24-.2-1.95l2.46-7.49c.31-1.24 1.66-2.25 3-2.25h3.9c.67 0 1.61.23 2.04.66l1.28.99a2 2 0 0 1 .78 1.58m3.181 12.108h1.03c1.55 0 2.18-.6 2.18-2.08V5.478c0-1.48-.63-2.08-2.18-2.08h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07" fill="#292D32"/></svg>
                            <p style="color: rgb(255, 207, 207);">${item.reactions.dislikes}</p>
                            </div>
                        </div>
                        <p style=" color: greenyellow; text-align: right; padding: 0px; margin: 0px;">${item.views} Views</p>
                    </section>
                    `;
        });
        resolve(true);
      }, 1000);
    });
  }

  function PromiseAPI2() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data.products[0]);
        data.products.map((item) => {
          box2.innerHTML += `
                    <section class="products">
        <div class="thumbnail">
            <img src=${item.images} style="height: 100%; width: 100%; object-fit: cover;">
        </div>
        <div class="overlay">
            <hr>
        <div class="details">
            <p id="product-price">$ ${item.price}</p>
            <p id="product-title">${item.title}</p>
            <p id="product-details">${item.description}</p>
            
        </div>
        </div>
        
    </section>
                    `;
        });
        resolve(true);
      }, 2000);
    });
  }

  function PromiseAPI3() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        let response = await fetch("https://dummyjson.com/todos");
        let data = await response.json();
        console.log(data.todos[0]);
        data.todos.map((item) => {
          box3.innerHTML += `
                    <section class="todo" style="background-color: ${
                      item.completed ? "white" : "rgb(225, 195, 86)"
                    } ;">
                        <p class="User">UserID : ${item.userId}</p>
                        <p class="task">"${item.todo}"</p>
                         <p class="status">Status : ${
                           item.completed ? "Completed" : "Pending"
                         }</p>
                    </section>
                    `;
        });
        resolve(true);
      }, 3000);
    });
  }

  document.getElementById("btn").addEventListener("click", () => {
    PromiseAPI1()
      .then((res) => {
        if (res) return PromiseAPI2();
      })
      .then(async (res) => {
        if (res) return PromiseAPI3();
      })
      .then((res) => {
        console.log(res);
      });
  });
});
