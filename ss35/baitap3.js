const products = [
    { id: 1, name: 'Laptop Dell XPS 15', price: 35990000, image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0', description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.' },
    { id: 2, name: 'iPhone 15 Pro Max', price: 32990000, image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain', description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.' },
    { id: 3, name: 'Samsung Galaxy S24 Ultra', price: 28990000, image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain', description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.' },
    { id: 4, name: 'Tai nghe Sony WH-1000XM5', price: 7990000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_172_2.png', description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.' },
    { id: 5, name: 'Apple Watch Series 9', price: 11990000, image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all', description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.' },
    { id: 6, name: 'Loa JBL Charge 5', price: 3990000, image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain', description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.' }
];

if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(products));
}

function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

let productList = document.getElementById('product-list');

function renderProducts(products) {
    productList.innerHTML = '';
    for (let product of products) {
        const productElement = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-details">
                    <div class="product-title">${product.name}</div>
                    <div>${product.description}</div>
                    <div class="product-price">${product.price.toLocaleString()} VNĐ</div>
                    <button class="buy">buy</button>
                </div>
            </div>
        `;
        productList.innerHTML += productElement;
    }
}

renderProducts(getProducts());

let search = document.getElementsByClassName('search')[0];
search.onclick = function () {
    let searchValue = document.getElementById('search').value;
    let filteredProducts = [];
    let products = getProducts();
    for (let product of products) {
        if (product.name.includes(searchValue) ||
            product.description.includes(searchValue)) {
            filteredProducts.push(product);
        }
    }
    renderProducts(filteredProducts);
};