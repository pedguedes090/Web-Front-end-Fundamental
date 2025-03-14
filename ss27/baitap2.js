function menu() {
    let choice = 0;
    let arr=[];
    do{

        choice = +prompt(`1.nhap danh sach sinh vien
        2.hien thi danh sach sinh vien
        3.tin sinh vien theo ten
        4.xoá sinh vien
        5.thoat`);
        switch (choice) {
            case 1:
                let number = +prompt('moi nhap so luong sinh vien can nhap');
                for(let i = 0; i<number; i++){
                    let name = prompt('moi nhap ten sinh vien');
                    arr.push(name);
                }
                break;
            case 2:
                for(let i = 0; i<arr.length; i++){
                    console.log(arr[i]);
                }
                break;
            case 3:
                let count=0;
                let name = prompt('moi nhap ten sinh vien');
                for(let i = 0; i<arr.length; i++){
                    if(arr[i] === name){
                        console.log("sinh vien co ton tai");
                        count++;
                    }
                    if(count==0){
                        console.log('khong ton tai');
                    }
                }
                break;
            case 4:
                let name1 = prompt('moi nhap ten sinh vien');
                for(let i = 0; i<arr.length; i++){
                    if(arr[i] == name1){
                        arr.splice(i,1);
                        break;
                    }
                }
                break;
            case 5:
                console.log('thoat');
                break;
        }


    }while(choice!=5)
}
menu();