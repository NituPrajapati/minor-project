let b = document.querySelectorAll(".clr button");
b.forEach(btn =>{
    btn.addEventListener("click",() => {
        if(btn.textContent ==="red"){
            document.body.style.backgroundColor = "red";
        }
        else if(btn.textContent ==="blue"){
            document.body.style.backgroundColor = "blue";
        }
        else if(btn.textContent === "black"){
            document.body.style.backgroundColor = "black";
        }
        else {
            document.body.style.backgroundColor = "yellow";
        }
    });

});