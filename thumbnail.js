var let ="targetImage";
document.addEventListener("DOMContentLoaded", function(event) {
    alert("Hello JavaScript");
    let targetImage = document.querySelector("#smart-image");    
});
targetImage.addEventListener("click", function() {
   alert("点击了图片");
    targetImage.classList.add("small");
//  targetImage.classList.remove("small");
});
