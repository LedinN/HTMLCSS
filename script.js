
const click = document.getElementById("clickbutton")
click.addEventListener('click', cbaction)

function cbaction() {
    alert("Hello world")
}

const redback = document.getElementById("redbut");
redback.addEventListener("click", redbackground);

function redbackground() {
    document.getElementById("homepagebody").style.backgroundColor="red";
}

const greenback = document.getElementById("greenbut");
greenback.addEventListener('click', greenbackground);

function greenbackground() {
    document.getElementById("homepagebody").style.backgroundColor="green";
}

const resetback = document.getElementById("resetbut");
resetback.addEventListener('click', resetbackground);

function resetbackground() {
    document.getElementById("homepagebody").style.backgroundColor="#f4f5cc";
}

const menubutton= document.getElementsById("hidemenu");
hidemenu.addEventListener('click', hidemenufunc)

function hidemenufunc() {
    var x = document.getElementsById("bodydiv");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else  {
        x.style.display = "none";
    }
} 