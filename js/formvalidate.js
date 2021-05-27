//sign up form

function Validate_sign_up() {

    var full_name = document.forms['signup']['full_name'].value;
    if (full_name == "" || full_name == null) {
        alert("UserName field can't be Empty");
        return false;
    }

    var your_email = document.forms['signup']['your_email'].value;
    if (your_email == "" || your_email == null) {
        alert("Email  field can't be Empty");
        return false;
    }


    var password = document.forms['signup']['password'].value;
    if (password == "" || password == null) {
        alert("password field can't be Empty");
        return false;
    }

    var passwordcnf = document.forms['signup']['comfirm_password'].value;
    if (passwordcnf == "" || passwordcnf == null) {
        alert("confirm password field can't be Empty");
        return false;
    }


    if (password != passwordcnf) {
        alert("password and confirm password is not matching");
        return false;
    }

}


//sign in form
function Validate_sign_in() {

    var full_name_1 = document.forms['signin']['full_name_1'].value;
    if (full_name_1 == "" || full_name_1 == null) {
        alert("UserName field can't be Empty");
        return false;
    }

    var your_email_1 = document.forms['signin']['your_email_1'].value;
    if (your_email_1 == "" || your_email_1 == null) {
        alert("Email  field can't be Empty");
        return false;
    }


    var password_1 = document.forms['signin']['password_1'].value;
    if (password_1 == "" || password_1 == null) {
        alert("password field can't be Empty");
        return false;
    }

}