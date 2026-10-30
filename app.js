document.addEventListener("DOMContentLoaded", function() {

let button = document.querySelector("button");
button.addEventListener("click", function(){
    $.get("superheroes.php", function(response) {
    alert(response); 
});
});

});