function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Please enter your email address.");
        return false;
    }else{
        alert('Thanks for signing up!!\nWe will send you email about our updates.');
    }
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