// let Category = [
//     {
//         id: "DM001" ,
//         name: "Quần áo ",
//         status: "Đang Hoạt Động"
//     },
//     {
//         id: "DM002",
//         name: "Kính mắt ",
//         status: "Ngừng Hoạt Động"
//     },
//     {
//         id: "DM003",
//         name: "Giày dép ",
//         status: "Đang Hoạt Động"
//     }

// ]
// localStorage.setItem("Category",JSON.stringify(Category));
let Category = JSON.parse(localStorage.getItem("Category")) || [];
let myTable = document.getElementById("myTable");
function renderCategory() {
    myTable.innerHTML = "";
    myTable.innerHTML += `
     <tr id="tr" class="row m-5">
                    <th class="col m-5">Mã Danh mục</th>
                    <th class="col m-5">Tên Danh mục</th>
                    <th class="col m-5">Trạng thái</th>
                    <th class="col m-5">Chức Năng</th>
    `
    Category.forEach((item) => {
        myTable.innerHTML += `
        
        <tr id="tr" class="row m-5">
        
                    <td class="col m-5">${item.id}</td>
                    <td class="col m-5">${item.name}</td>
                    <td class="col m-5">${item.status}</td>
                    <td class="col m-5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg></td>
                    <div id="myTable">

                    </div>
                </tr>
        `
    })

    
}

function getSelectedRadioValue(name) {
    let radios = document.getElementsByName(name);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null; 
}
function addCategory(event) {
    event.preventDefault();

    let idCategory = document.getElementById("idCategory");
    let nameCategory = document.getElementById("nameCategory");
    let status = getSelectedRadioValue("inlineRadioOptions");

    let idCategoryError = document.getElementById("idCategoryError");
    let nameCategoryError = document.getElementById("nameCategoryError");

    let isValid = true;

    if (!idCategory.value.trim()) {
        idCategory.classList.add("border-danger");
        idCategoryError.classList.remove("d-none");
        isValid = false;
    } else {
        idCategory.classList.remove("border-danger");
        idCategoryError.classList.add("d-none");
    }

    if (!nameCategory.value.trim()) {
        nameCategory.classList.add("border-danger");
        nameCategoryError.classList.remove("d-none");
        isValid = false;
    } else {
        nameCategory.classList.remove("border-danger");
        nameCategoryError.classList.add("d-none");
    }

    if (!status) {
        alert("Vui lòng chọn trạng thái!");
        return;
    }

    if (!isValid) return;

    let newCategory = {
        id: idCategory.value.trim(),
        name: nameCategory.value.trim(),
        status: status === "option1" ? "Đang Hoạt Động" : "Ngừng Hoạt Động"
    };

    Category.push(newCategory);
    localStorage.setItem("Category", JSON.stringify(Category));
    renderCategory();

    idCategory.value = "";
    nameCategory.value = "";
    document.querySelectorAll('input[name="inlineRadioOptions"]').forEach(radio => radio.checked = false);
}

renderCategory();



renderCategory();