let username = prompt("Nhập tên đăng nhập:");  

if (username === "ADMIN") {  
    let password = prompt("Nhập mật khẩu:");  
    
    if (password === "TheMaster") {  
        console.log("Welcome");  
    } else if (password === "") {  
        console.log("Cancelled");  
    } else {  
        console.log("Wrong password");  
    }  
} else if (username === "") {  
    console.log("Cancelled");  
} else {  
    console.log("I Don’t know you");  
}  