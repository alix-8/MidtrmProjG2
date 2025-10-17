
let colors = ["#a37187bd"];
let i = 0;

const footer = document.querySelector("footer");
const footerTop = footer.offsetTop;

document.onmousemove = function (e) {
    i++;
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("follower");
    // span.innerHTML = x+"x"+"<br>"+y+"y";
    span.style.zIndex = 1001;
    span.style.top = y + "px";
    span.style.left = x + "px";
    span.style.backgroundColor = colors[i - 1];

    if(y > 500){
        span.style.backgroundColor = "#698cb1bd";
    }
    if(y > 1000){
        span.style.backgroundColor = "#a37187bd";
    }

    if(y > footerTop){
        //stop na
        document.documentElement.style.cursor = "default";
        span.style.backgroundColor = "#ffffff00";
    }
    else{
        document.documentElement.style.cursor = "none";
    }

    document.body.appendChild(span);

    if (i == colors.length) i = 0;

    setTimeout(() => {
        span.remove();
    }, 1000);
}