function  init (){
    password = document.getElementById(password);
    password = addEventListener("click", correctpassword);
}

function correctpasswprd () {
    let re = /^[A-ZÅÄÖ]{2}-\d{1}-[A-ZÅÄÖ]{1}\d{1}$/i;

    if (re.test(this.value)) window.location.href ="second.html";

}