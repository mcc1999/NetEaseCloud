/**
 * 假设设计稿是宽750px来做的，书写css方便计算考虑，根节点的font-size假定为100px，得出设备宽为7.5rem。设计稿中标注的任何px数值都可以换算成px/100的rem值。

 就是说，每一个设备的宽度都定为7.5个rem，然后宽度非750px的设备里，就需要用JS对font-size做动态计算。

 换算关系为：根节点的font-size=设备宽度/7.5。
 */
window.onload = function(){
    let html = document.querySelector("html");
    html.style.fontSize = html.offsetWidth / 750 * 100 + "px";
    addEventListener("resize",function(){
        html.style.fontSize = html.offsetWidth / 750 * 100 + "px";
    },false);
}
