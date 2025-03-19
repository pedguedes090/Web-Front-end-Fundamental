let book = [
    { id: 1, name: "Sach1", price: 1000, quantity: 10, category: "Sex" },
    { id: 2, name: "Sach2", price: 1000, quantity: 10, category: "Human" },
    { id: 3, name: "Sach3", price: 1000, quantity: 10, category: "Sex" }
]
let name, price, quantity, category, id, index;
let cart = [];
let choice = 0;
do {
    console.log("1. Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).");
    console.log("2. Thêm sách mới vào kho");
    console.log("3. Tìm kiếm sách theo tên hoặc id.");
    console.log("4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).");
    console.log("5. Sắp xếp sách theo giá:");
    console.log("6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng");
    console.log("7. Hiển thị tổng số lượng sách trong kho");
    console.log("8. Thoát chương trình.");
    choice = +prompt("Enter your choice");
    switch (choice) {
        case 1:
            category = prompt("Enter category product");
            let bookFilter = book.filter(x => x.category == category);
            if (bookFilter.length > 0) {
                bookFilter.forEach(book => console.log(`ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}, Category: ${book.category}`));
            }

            break;
        case 2:
            name = prompt("Enter name");
            price = parseInt(prompt("Enter price"));
            quantity = parseInt(prompt("Enter quantity"));
            category = prompt("Enter category");
            id = book.length + 1;
            book.push({ id: id, name: name, price: price, quantity: quantity, category: category });
            break;
        case 3:
            let search = prompt("Enter name or id");
            let bookSearch = book.filter(x => x.name == search || x.id == search);
            if (bookSearch.length > 0) {
                bookSearch.forEach(book => console.log(`ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}, Category: ${book.category}`));
            }
            break;
        case 4:
            id = +prompt("Enter id product");
            index = book.findIndex(x => x.id == id);
            if (index != -1) {
                quantity = prompt("Enter quantity");
                if (book[index].quantity >= quantity) {
                    book[index].quantity -= quantity;
                    let cartIndex = cart.findIndex(x => x.id == id);
                    if (cartIndex == -1) {
                        cart.push(
                            {
                                id: book[index].id,
                                name: book[index].name,
                                price: book[index].price,
                                category: book[index].category,
                                quantity: quantity
                            }
                        )

                    } else {
                        cart[cartIndex].quantity += quantity;
                    }
                } else {
                    console.log("Không đủ hàng");
                    break;
                }
            } else {
                console.log("Không tìm thấy sản phẩm");
            }
            break;
        case 6:
            let totalQuantity = 0;
            let totalPrice = 0;
            cart.forEach(book => {
                totalQuantity += book.quantity;
                totalPrice += book.quantity * book.price;
            });
            console.log(`Total quantity: ${totalQuantity}, Total price: ${totalPrice}`);
            break;
        case 5:
            do {
                console.log("1. Sắp xếp tăng dần");
                console.log("2. Sắp xếp giảm dần");
                console.log("3. Thoát");
                choice = +prompt("Enter your choice");
                switch (choice) {
                    case 1:
                        book.sort((a, b) => a.price - b.price);
                        console.log(book);
                        break;
                    case 2:
                        book.sort((a, b) => b.price - a.price);
                        console.log(book);
                        break;
                }
            } while (choice != 3);
            break;
        case 7:
            let totalBook = 0;
            book.forEach(book => {
                totalBook += book.quantity;
            });
            console.log(`Total book: ${totalBook}`);
            break;


    }

} while (choice != 5)