let tasks = [
    { id: 1, name: "Task 1", description: "Description 1", startTime: "2023-10-01", status: "true" },
    { id: 2, name: "Task 2", description: "Description 2", startTime: "2023-10-02", status: "false" },
];

let choice = 0;

do {
    choice = +prompt(`
    1. Thêm công việc mới.
    2. Hiển thị tất cả các công việc.
    3. Cập nhật trạng thái công việc theo id.
    4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
    5. Sắp xếp các công việc theo trạng thái công việc.
    6. Exit
    Enter your choice:
    `);

    switch (choice) {
        case 1:
            tasks.push({
                id: tasks.length + 1,
                name: prompt("nhap task name"),
                description: prompt("nhap task description"),
                startTime: prompt("nhap task start time"),
                status: prompt("nhap task status true or false")
            })
        case 2:
            for (let i = 0; i < tasks.length; i++) {
                console.log(tasks[i]);
            }
            break;
        case 3:
            let id = +prompt("nhap task id");  
            let index = tasks.findIndex(x => x.id == id);
            if (index != -1) {
                tasks[index].status = prompt("nhap new status true or false");
            }
            break;
        case 4:
            let status = prompt("nhap task status true or false");
            let result = tasks.filter(x => x.status === status);
            for (let i = 0; i < result.length; i++) {
                console.log(result[i]);
            }
            break;
        case 5:
            tasks.sort((a, b) => (b.status === "true") - (a.status === "true"));
            for (let i = 0; i < tasks.length; i++) {
                console.log(tasks[i]);
            }
            break;
        case 6:
            console.log("exit");
            break;
        default:
            console.log("invalid choice");
            break;
        }
        
        

} while (choice !== 6);