fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) 
    .then(data => {
        const apiDataContainer = document.getElementById('api-data');
        data.slice(0, 5).forEach(post => { 
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            apiDataContainer.appendChild(postDiv); 
        });
    })
    .catch(error => console.error('Error fetching data:', error));
