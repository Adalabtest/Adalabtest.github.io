var let ="targetImage";
document.addEventListener("DOMContentLoaded", function(event) {
    alert("Hello JavaScript");
    let targetImage = document.querySelector("#smart-image");   
    targetImage.addEventListener("click", function() {
        targetImage.classList.add("small");
         alert("Come on!");
});
});

