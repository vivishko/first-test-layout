// const tempButton = document.getElementById("nav_click");
// const tempMenu = document.getElementById("nav_r");

// console.log("leuher")

document.getElementById("nav_click").addEventListener("click", function toggle(){
    // console.log("g",tempMenu.style.display)
    const tempMenu = document.getElementById("nav_r");
    tempMenu.style.display = (tempMenu.style.display === 'none') ? 'flex' : 'none'
});

