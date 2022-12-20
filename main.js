document.getElementById("btn").addEventListener("click", btnClicked);



function btnClicked() {
    let user =  document.getElementById("user").value;
    let pass =  document.getElementById("pass").value;
    // if
    if (user === "admin" && pass === "1234") {
        alert("login succesful");
    } else if (user === "admin") {
        alert("wrong pass");
    } else {
        alert("wrong user")
    }
    
}