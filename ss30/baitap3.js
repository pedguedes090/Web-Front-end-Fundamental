let cart = [];
let phones = [];

function addPhone() {
    let id = Number(prompt("Nhap ID dien thoai"));
    let name = prompt("Nhap ten dien thoai");
    let price = Number(prompt("Nhap gia dien thoai"));
    let quantity = Number(prompt("Nhap so luong dien thoai"));
    let brand = prompt("Nhap hang dien thoai");

    let newPhone = { id, name, price, quantity, brand };
    phones.push(newPhone);
    console.log(`Da them dien thoai: ${name}`);
}

function displayPhonesByBrand() {
    let brand = prompt("Nhap hang dien thoai muon xem");
    let filteredPhones = phones.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());

    if (filteredPhones.length === 0) {
        console.log("Khong co dien thoai trong hang nay.");
        return;
    }

    console.log(`Danh sach dien thoai trong hang ${brand}:`);
    filteredPhones.forEach(phone => {
        console.log(`ID: ${phone.id}, Ten: ${phone.name}, Gia: ${phone.price}, So luong: ${phone.quantity}`);
    });
}

function searchPhone() {
    let searchTerm = prompt("Nhap ten dien thoai hoac ID dien thoai muon tim");
    let foundPhones = phones.filter(phone => phone.name.toLowerCase().includes(searchTerm.toLowerCase()) || phone.id === Number(searchTerm));

    if (foundPhones.length === 0) {
        console.log("Khong tim thay dien thoai.");
        return;
    }

    foundPhones.forEach(phone => {
        console.log(`ID: ${phone.id}, Ten: ${phone.name}, Gia: ${phone.price}, So luong: ${phone.quantity}`);
    });
}

function buyPhone() {
    let id = Number(prompt("Nhap ID dien thoai muon mua"));
    let phone = phones.find(p => p.id === id);

    if (!phone) {
        console.log("Dien thoai khong ton tai.");
        return;
    }

    let quantity = Number(prompt(`Nhap so luong dien thoai ${phone.name} muon mua`));
    if (quantity > phone.quantity) {
        console.log(`Xin loi chi con ${phone.quantity} dien thoai ${phone.name} trong kho.`);
        return;
    }

    cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity: quantity });
    phone.quantity -= quantity;
    console.log(`Da mua ${quantity} dien thoai ${phone.name}.`);
}

function checkout() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    console.log(`Thanh toan thanh cong! Tong tien: ${total} VND`);
    cart = [];
}

function sortPhonesByPrice(order) {
    if (order === "asc") {
        phones.sort((a, b) => a.price - b.price);
    } else {
        phones.sort((a, b) => b.price - a.price);
    }
    console.log(`Da sap xep dien thoai theo gia ${order === "asc" ? "tang" : "giam"}.`);
}

let option;
do {
    option = prompt(`
Chon chuc nang:
1. Them dien thoai moi
2. Hien thi dien thoai theo hang
3. Tim kiem dien thoai
4. Mua dien thoai
5. Thanh toan
6. Sap xep dien thoai theo gia
7. Sap toi trong tuong lai se ra mat chuc nang nay
8. Sap toi trong tuong lai se ra mat chuc nang nay
9. Thoat
`);

    switch (option) {
        case "1":
            addPhone();
            break;
        case "2":
            displayPhonesByBrand();
            break;
        case "3":
            searchPhone();
            break;
        case "4":
            buyPhone();
            break;
        case "5":
            checkout();
            break;
        case "6":
            let order = prompt("Sap xep theo gia (asc/desc)?");
            sortPhonesByPrice(order);
            break;
        case "7":
            console.log("Chuc nang chua thuc hien duoc");
            break;
        case "8":
            console.log("Chuc nang chua thuc hien duoc");
            break;
        case "9":
            console.log("Thoat chuong trinh");
            break;
        default:
            console.log("Lua chon khong hop le. Vui long chon lai");
    }
} while (option !== "9");