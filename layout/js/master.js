let iconclick = document.querySelector('#img-setting');
let msg = document.querySelector('.setting-menu');
let body = document.querySelector('.contace-cms');




iconclick.addEventListener('click', function () {

    msg.classList.toggle("show");

});


body.addEventListener("click", function () {

    if (msg.classList.contains("show")) {

        msg.classList.remove("show");


    } else {
        console.log("not found");
    }

});

// End nav bar top




// Start navbar-right

let iconnavright = document.getElementById("iconnavbarleft");
let navbarright = document.querySelector(".navbar-right");


iconnavright.addEventListener('click', function () {

    navbarright.classList.toggle("navbar-right-show");
});


// End navbar-right

//

/* ================== page chang password ===================
   ================= Start Form Valfoter ===================
   ========================================================= 
*/


let errorEl = document.querySelector(".error");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let formchangpassword = document.getElementById("formchangpassword");


if (formchangpassword) {
    formchangpassword.addEventListener("submit", function (event) {

        let error = [];
        if (password1.value === '' || password2.value == null) {

            error.push(' يرجي ادخال كلمة المرور');
        }
        else if (password1.value.length < 10 || password2.value.length < 10) {

            error.push('يجب  ان تكون كلمة المرور اطول من 10 احرف');
        }
        else if (password1.value != password2.value) {

            error.push('كلمة المرور غير مطابقة ');
        }
        if (error.length > 0) {
            event.preventDefault();

            errorEl.innerHTML = error.join('<br>');


        }
    });
}

/* =========================================================
   ================= End Form Valfoter =====================
   ================page chang pawword  ===================== 
*/

let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let age = document.getElementById("age");
let addmebersvalidoter = document.getElementById("addmebersvalidoter");


if (addmebersvalidoter) {
    addmebersvalidoter.addEventListener("submit", function (event) {

        let error = [];
        if (username.value === '') {

            error.push('يرجي ادخال اسم المستخدم');
        } else if (username.value.length < 8) {

            error.push('يجب ان يكون اسم المستخدم اطول من 8 حروف ');
        }
        else if (email.value = "") {

            error.push(' برجي ادخال البريد الالكتروني');
        }
        else if (password.value.length < 10) {

            error.push('يجب  ان تكون كلمة المرور اطول من 10 احرف');
        }
        else if (age.value == "") {

            error.push(' يرجي ادخال العمر ');
        }

        if (error.length > 0) {
            event.preventDefault();

            errorEl.innerHTML = error.join('<br>');


        }
    });

}
/* =========================================================
   ================= Start Form Valfoter =====================
   ================ page add mebers   ===================== 
*/




/* =========================================================
   ================= End Form Valfoter =====================
   ================page add mebers   ===================== 
*/