let crud =[
    {id:1,name:"mif toom ",price:10000,category:"food",quantity:2},
    {id:2,name:"bim bim ",price:10000,category:"food",quantity:1},
    {id:3,name:"keo mut ",price:10000,category:"food",quantity:3},
]
let choice = 0;
let id=0;

do{
    choice = +prompt("moi nhap so");
    switch(choice){
        case 1:
            crud.push({id:crud.length+1,name:prompt("nhap ten"),price:prompt("nhap gia"),category:prompt("nhap loai"),quantity:prompt("nhap so luong")});
            break;
        case 2:
            for(let i=0;i<crud.length;i++){
                console.log(crud[i]);
            }
            break;
        case 3:
            id = +prompt("nhap id");
            let index = crud.findIndex(x =>x.id==id);
            if(index!=-1){
                console.log(crud[index]);
            }
            break;
        case 4:
            id = +prompt("nhap id");
            crud.findIndex(x =>x.id==id);
            if(index!=-1){
                crud.push({id:id,name:prompt("nhap ten"),price:prompt("nhap gia"),category:prompt("nhap loai"),quantity:prompt("nhap so luong")});

            }
            break;
        case 5:
            id = +prompt("nhap id");
            crud.findIndex(x =>x.id==id);
            if(index!=-1){
                crud.splice(index,1);
            }
            break;
        case 6:
            let min = +prompt("nhap gia min");
            let max = +prompt("nhap gia max");
            let result = crud.filter(x => x.price>=min && x.price<=max);
            for(let i=0;i<result.length;i++){
                console.log(result[i]);
            }
            break;
        case 7:
            console.log("exit");
            break;
        default:
            console.log("invalid choice");
            break
    }
}while(choice!=7)