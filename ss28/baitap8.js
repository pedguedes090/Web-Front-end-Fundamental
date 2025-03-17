let employee = [
    { id: 1, name: "Nguyen Van a", position: "Developer", salary: 1000 },
    { id: 2, name: "Nguyen Van b", position: "Manager", salary: 10000 },
];
let id;
let name;
let position;
let salary;
let choice = 0;
let index;
do {
    console.log("1. Add employee");
    console.log("2. Delete employee");
    console.log("3. Update employee slary");
    console.log("4. Search employee");
    console.log("5. Exit");
    choice = prompt("Enter your choice");
    switch (choice) {
        case "1":
            id = prompt("Enter id");
            name = prompt("Enter name");
            position = prompt("Enter position");
            salary = prompt("Enter salary");
            newEmployee = { id: id, name: name, position: position, salary: salary };
            employee.push(newEmployee);
            break;
        case "2":
            id = prompt("Enter id");
            index = employee.findIndex(x => x.id == id);
            if (index != -1) {
                employee.splice(index, 1);
            }
            break;
        case "3":
            id = prompt("Enter id");
            index = employee.findIndex(x => x.id == id);
            if (index != -1) {
                let newSalary = prompt("Enter new salary");
                employee[index].salary = newSalary;
            }
            break;
        case "4":
            id = prompt("Enter id");
            index = employee.findIndex(x => x.id == id);
            if (index != -1) {
                console.log(employee[index]);
            }
            break;
        case "5":
            break;
        case 6:
            console.log(employee);
            break;    
    }


} while (choice != 5);