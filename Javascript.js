let newsletterform = document.getElementById("newsletterform");
const mobileNavSection = document.getElementById("mobilenav");
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
//Mobile Nav Menu//
const handleMobileNav = (e) => {
mobileNavSection.classList.toggle("hidden");
}
hamburgerMenu.addEventListener("click", handleMobileNav)

newsletterform.addEventListener("submit", (e) => {
e.preventDefault();
let firstname = document.getElementById("first-name");
let lastname = document.getElementById("last-name");
let email = document.getElementById("email-address");
let emailRegex = /\S+@\S+\.\S+/;

if (firstname.value.length <= 2 ||lastname.value.length <= 2 ) {
    document.getElementById("alertMessage").innerText = "Error: Please include more than 2 characters";
    document.getElementById("customAlert").style.display = "block";
}else if(!emailRegex.test(email.value)){
    document.getElementById("alertMessage").innerText = "Error:Enter a valid email address";
    document.getElementById("customAlert").style.display = "block";
}else {
    document.getElementById("alertMessage").innerText = "This form has been successfully submitted!";
    document.getElementById("customAlert").style.display = "block";
    console.log(
        `This form has a name of ${firstname.value} ${lastname.value} and email of ${email.value}`
    );
    firstname.value = "";
    lastname.value = "";
    email.value = "";
}

});
