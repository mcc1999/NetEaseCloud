let imgList = document.getElementsByClassName("pic");
let pointList = document.getElementsByClassName("point");
let index = 0;
// console.log(imgList);
let goIndex = function () {
    clearShow();
    imgList[index].className = "pic show";
    // imgList[index].classList.add('show');
    pointList[index].className = "point show"
}
let clearShow = function () {
    for(let i=0; i<imgList.length; i++){
        imgList[i].className = "pic";
    }
    for(let i=0; i<pointList.length; i++){
        pointList[i].className = "point";
    }
}

goIndex();
for(let i=0; i<pointList.length; i++){
    pointList[i].addEventListener("click", function () {
        let pointIndex = this.getAttribute("date-index");
        index = pointIndex;
        goIndex();
    })
}

setInterval(function () {
    if(index == imgList.length - 1){
        index = 0;
    }
    else{
        index++;
    }
    goIndex();
},3000);

