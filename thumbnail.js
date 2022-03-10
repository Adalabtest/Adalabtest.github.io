var let ="targetImage";
document.addEventListener("DOMContentLoaded", function(event) {
    alert("Hello EVERY");
    let targetImage = document.querySelector("#smart-image");   
    targetImage.addEventListener("click", function() {
        //targetImage.classList.add("small");
        targetImage.classList.remove("small");
         alert("Come on!");
});
});

