let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
]
let number = 0;
let carts = [];
let choice = 0;
let categories = [];
let quantity = 0;
let sum = 0;
let cartsindex = 0;
do {
    choice = +prompt('moi nhap so');
    switch (choice) {
        case 1:
            for (let product of products) {
                if (!categories.includes(product.category)) {
                    categories.push(product.category);
                }
            }
            for (let category of categories) {
                console.log(`Danh mục: ${category}`);
                for (let product of products) {
                    if (product.category === category) {
                        console.log(`id ${product.id} , Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}`);
                    }
                }
            }
            break;
        case 2:
            number = +prompt('nhap id san pham');
            let index = products.findIndex(x => x.id == number);
            if (index != -1) {
                if (products[index].quantity < 0) {
                    console.log('het hang');
                }
            }
            quantity = +prompt('nhap so luong');
            if (quantity > products[index].quantity) {
                console.log('khong du so luong');
            } else if (!carts.findIndex(x => x.id == number)) {
                carts[index].quantity += quantity;
                products[index].quantity -= quantity;
                console.log('them vao gio hang thanh cong');
            }
            else {
                products[index].quantity -= quantity;
                carts.push({ id: products[index].id, name: products[index].name, price: products[index].price, quantity: quantity });
                console.log('them vao gio hang thanh cong');
            }
            for (let i = 0; i < carts.length; i++) {
                console.log(carts[i]);
            }
            break;
        case 3:
            let flag = 0;
            flag = +prompt('1. sap xep tu be den lon\n2. sap xep tu lon den be');
            if (flag == 1) {
                products.sort((a, b) => a.price - b.price);
            } else {
                products.sort((a, b) => b.price - a.price);
            }
            for (let i = 0; i < products.length; i++) {
                console.log(products[i]);
            }
            break;
        case 4:
            for (let i = 0; i < carts.length; i++) {
                sum += carts[i].price * carts[i].quantity;
            }
            console.log(sum);
            break;
    }
} while (choice != 5)
