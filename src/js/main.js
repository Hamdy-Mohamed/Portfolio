let btn = document.querySelector(".animate");
let html_icon = document.querySelector(".html");
let css_icon = document.querySelector(".css");
let js_icon = document.querySelector(".js");
let bs_icon = document.querySelector(".bs");
let sass_icon = document.querySelector(".sass");
let react_icon = document.querySelector(".react");
btn.onclick = ()=>{
    window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/overlay/background-image/")    
};
html_icon.onclick = ()=>{
    window.open("https://developer.mozilla.org/en-US/docs/Web/HTML")    
};
css_icon.onclick = ()=>{
    window.open("https://developer.mozilla.org/en-US/docs/Web/CSS")    
};
js_icon.onclick = ()=>{
    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript")    
};
js_icon.onclick = ()=>{
    window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript")    
};
bs_icon.onclick = ()=>{
    window.open("https://getbootstrap.com")
}
sass_icon.onclick = ()=>{
    window.open("https://sass-lang.com")
}
react_icon.onclick = ()=>{
    window.open("https://reactjs.org")
}

alert("if you want to change background double click in any space😄 😄")

let curoser = document.querySelector(".curoser");
let curoser_lazy = document.querySelector(".curoser-lazy");
let editCuroser = function editCuroser(event){
    curoser.style.left = event.clientX + 'px';
    curoser.style.top = event.clientY + 'px';
    curoser_lazy.style.left = event.clientX + 'px';
    curoser_lazy.style.top = event.clientY + 'px';
}

window.addEventListener('mousemove', editCuroser)



let media = document.querySelector(".container")
let change = document.addEventListener('dblclick', function(event){
    let mouseX = event.clientX;
    let mouseY = event.clientY;
  
    let red = mouseX % 256;
    let green = mouseY % 256;
    let blue = (mouseX + mouseY) % 256;
  
    document.body.style.backgroundColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
});

