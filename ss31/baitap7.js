let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet george',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Organize office',
        completed: false,
    },
];
// Lấy phần tử danh sách (ul)
let ul = document.getElementById("myUL");

// Tạo danh sách công việc
let listHTML = "";

todoList.forEach(function (item) {
    let checkedClass = ""; 
    if (item.completed) {
        checkedClass = "checked"; 
    }
    listHTML += "<li class='" + checkedClass + "'>" + item.task + "</li>";
});
ul.innerHTML = listHTML;