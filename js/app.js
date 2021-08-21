
const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validar(){
    const email = document.querySelector(".container__email").value;
    const border = document.querySelector(".container__email");
    const img = document.querySelector(".container__email__img");
    const text = document.querySelector(".container__warnin");
    if (valid.test(email)) {
        alert("deu certo");
        border.classList.remove("container__email--error");
        img.classList.remove("container__email__img--active");
        text.classList.remove("container__warnin--active");
        return true;
    }
    border.classList.add("container__email--error");
    img.classList.add("container__email__img--active");
    text.classList.add("container__warnin--active");

    return false;
}