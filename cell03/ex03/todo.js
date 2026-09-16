const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

loadTodos();

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        addTodo(text.trim());
        saveTodos();
    }
});

function addTodo(text) {
    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function() {
        if (confirm('Do you really want to remove this TO DO?')) {
            div.remove();
            saveTodos();
        }
    });

    ftList.prepend(div);
}

function saveTodos() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    items.forEach(item => {
        todos.push(item.textContent);
    });

    const jsonStr = JSON.stringify(todos);
    document.cookie = `ft_list=${encodeURIComponent(jsonStr)};path=/;max-age=31536000`;
}

function loadTodos() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('ft_list='));

    if (todoCookie) {
        try {
            const jsonStr = decodeURIComponent(todoCookie.split('=')[1]);
            const todos = JSON.parse(jsonStr);
            for (let i = todos.length - 1; i >= 0; i--) {
                addTodo(todos[i]);
            }
        } catch (e) {
            console.error('Error loading cookies:', e);
        }
    }
}