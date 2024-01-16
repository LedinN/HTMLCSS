
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

const menubutton= document.getElementById("hidemenu");
hidemenu.addEventListener('click', hidemenufunc)

function hidemenufunc() {
    var bodydiv = document.getElementById("bodydiv");
    if (bodydiv.style.visibility === "hidden") {
    bodydiv.style.visibility = "visible";
    } else {
        bodydiv.style.visibility = "hidden";
    }
} 

const menubutton2= document.getElementById("hidemenu2");
hidemenu2.addEventListener('click', hidemenufunc2)

function hidemenufunc2() {
    document.getElementById("bodydiv").classList.add("myStyle");
}