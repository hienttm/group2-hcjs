//CHECK EMAIL INPUT
function validateForm() {
    alert('Thanks for your message!! We will contact you soon.');
}
function validateFormBottom() {
    let y = document.forms["myFormBottom"]["emailBottom"].value;
    if (y == "") {
        alert("Please enter your email address.");
        return false;
    }else{
        alert('Thanks for signing up!!\nWe will send you email about our updates.');
    }
}

//COLLAPSE-EXPAND CONTENT
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}