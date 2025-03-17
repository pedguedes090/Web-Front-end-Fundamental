let contact = [
    { id: 1, name: "Nguyen Van a", email: "Developer@gmail.com", phone: "0869975214" },
    { id: 2, name: "Nguyen Van b", email: "Manager@gmail.com ", phone: "0293727413" },
];
let id;
let name;
let email;
let phone;
let index=0;
let choice = 0;
do{
    choice = +prompt('moi nhap so')
    switch (choice) {
        case 1:
            id = prompt("Enter id");
            name = prompt("Enter name");
            email = prompt("Enter email");
            phone = prompt("Enter phone");
            newContact = { id: id, name: name, email: email, phone: phone };
            contact.push(newContact);
            break;
        case 2:
            for(let i=0; i<contact.length; i++){
                console.log(contact[i]);
            }
            break;
        case 3:
            id = prompt("Enter phone");
            index = contact.findIndex(x => x.phone == id);
            if (index != -1) {
                console.log(contact[index]);
            }
            break;
        case 4:
            id = prompt("Enter id");
            index = contact.findIndex(x => x.id == id);
            if (index != -1) {
                name = prompt("Enter name");
            email = prompt("Enter email");
            phone = prompt("Enter phone");
            newContact = {id :id, name, email: email, phone: phone };
            contact[index] = newContact;
            }
            break;
        case 5:
            id = prompt("Enter id");
            index = contact.findIndex(x => x.id == id);
            if (index != -1) {
                contact.splice(index, 1);
            }
            break;
        case 6:
            console.log("exit");
            break;
        default:
            break;
    }
}while(choice!=6)