const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users';

xhr.open('GET', url);
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const users = JSON.parse(xhr.response);
        const names = users.map(user => user.name);
        console.log('User Names:', names);
        // Output the names to the browser
        const output = document.createElement('div');
        output.innerHTML = '<h2>User Names:</h2>';
        const ul = document.createElement('ul');
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
        output.appendChild(ul);
        document.body.appendChild(output);
    } else {
        console.error('Error:', xhr.statusText);
    }
};
xhr.onerror = function () {
    console.error('Network Error!');
};
xhr.send();