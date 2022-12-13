let btn = document.querySelector("button");
let num = document.getElementsByClassName('item')

btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'hsl(25, 97%, 53%)';
});

btn.addEventListener("mouseleave", function() {
    btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn.style.color = 'white';
});

// Números em "botões"
for (let i = 0; i < num.length; i++){ 
    num[i].addEventListener("mouseover", function () {
        num[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
        num[i].style.color = 'white';
    });
    num[i].addEventListener("mouseleave", function (){
        num[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
        num[i].style.color = 'hsl(217, 12%, 63%)';
    });
};


