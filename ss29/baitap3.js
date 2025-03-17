let menu=[
    {id:'mon trang mieng',
        food:[
            {name:"mif toom ",price:10000, describe:"food"},
            {name:"banh bo",price:10000,describe:"food"},
            {name:"keo mut ",price:10000,describe:"food"}
        ]
    },
    {
        id:'mon chinh',
        food:[
            {name:"mif toom ",price:10000,describe:"food"},
            {name:"banh bo",price:10000,describe:"food"},
            {name:"keo mut ",price:10000,describe:"food"}
        ]
    },
    {
        id:'mon phu',
        food:[
            {name:"mif toom ",price:10000,describe:"food"},
            {name:"banh bo",price:10000,describe:"food"},
            {name:"keo mut ",price:10000,describe:"food"}
        ]
    }
]

let choice = 0;
let id=0;
let name;
do{
    choice=+prompt("moi nhap so");
    switch(choice){
        case 1:
            for(let i=0;i<menu.length;i++){
                console.log(`danh muc: ${menu[i].id}`);
                for(let j=0;j<menu[i].food.length;j++){
                    console.log(menu[i].food[j]);
                }
            }
            id = prompt("nhap ten danh muc");
            let index = menu.findIndex(x =>x.id==id);
            if(index!=-1){
                menu[index].food.push({name:prompt("nhap ten"),price:prompt("nhap gia"),describe:prompt("nhap mo ta")});
            }
            break;
        case 2:
            id = +prompt("nhap ten danh muc");
            name = prompt("nhap ten mon an");
            let index1 = menu.findIndex(x =>x.id==id);
            if(index1!=-1){
                let index2 = menu[index1].food.findIndex(x =>x.name==name);
                if(index2!=-1){
                    menu[index1].food.splice(index2,1);
                    
                }
            }
            break;
        case 3:
            name = prompt("nhap ten mon an");
            let found = false;
            for (let i = 0; i < menu.length; i++) {
                let foodIndex = menu[i].food.findIndex(food => food.name === name);
                if (foodIndex !== -1) {
                    menu[i].food[foodIndex] = {
                        name: prompt("nhap ten moi"),
                        price: prompt("nhap gia moi"),
                        describe: prompt("nhap mo ta moi")
                    };
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Khong tim thay mon an.");
            }
            break;
        case 4:
            for(let i=0;i<menu.length;i++){
                console.log(`danh muc: ${menu[i].id}`);
                for(let j=0;j<menu[i].food.length;j++){
                    console.log(menu[i].food[j]);
                }
            }
        case 5:
            name = prompt("nhap ten mon an");
            let found1 = false;
            for (let i = 0; i < menu.length; i++) {
                let foodIndex = menu[i].food.findIndex(food => food.name === name);
                if (foodIndex !== -1) {
                    console.log(menu[i].food[foodIndex]);
                    found1 = true;
                    break;
                }
            }
            if (!found1) {
                console.log("Khong tim thay mon an.");
            }
            break;
        case 6:
            console.log("exit");
            break;
        default:
            console.log("invalid choice");
            break
            
    }
}while(choice!=6)