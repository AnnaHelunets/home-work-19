const header_container = document.querySelector(".js-header");
header_container.classList.add("flex");
const headerEl = `
        <div class="menu">
            <ul class="flex">
                <li><a href="#">WOMAN</a></li>
                <li><a href="#">MEN</a></li>
                <li><a href="#">ALL</a></li>
            </ul>
        </div>
            <h2><a href=""><span>YOUR</span>SNEAKER</a></h2>
        <div class="icons flex">
        <button class="btn-login-popup"><img src="./img/войти.png" alt=""></button>
        <button><img src="./img/поиск.png" alt=""></button>
        <button class="btn-cart"><img src="./img/корзина.png" alt=""></button>
        </div>
`;
header_container.insertAdjacentHTML("beforeend", headerEl);

const footer_container = document.querySelector(".js-footer");
footer_container.classList.add("flex");
const footerEl = `
        <div class="footer_menu">
            <ul>
            <li><a href="#">ALL</a></li>
            <li><a href="#">WOMAN</a></li>
            <li><a href="#">MEN</a></li>
        </ul>
        </div>
        <img src="./img/Group 65.png" alt="">
        <div class="footer_menu">
            <ul>
            <li><a href="#">WORCOUT</a></li>
            <li><a href="#">RUN</a></li>
            <li><a href="#">FOOTBALL</a></li>
        </ul>
        </div>
`;
footer_container.insertAdjacentHTML("beforeend", footerEl);


//task-2

const refs = {
btnLogin: document.querySelector(".btn-login-popup"),
modalLogin:document.querySelector(".modal"),
btnClose:document.querySelector(".btn-close"),
modalCart: document.querySelector(".modal-cart"),
btnCart: document.querySelector(".btn-cart"),
btnCloseCart: document.querySelector(".btn-close-cart")
}

refs.btnLogin.addEventListener('click', (e) => {
    refs.modalLogin.classList.add("active");
})
refs.btnClose.addEventListener('click', (e) => {
    refs.modalLogin.classList.remove("active");
})


refs.btnCart.addEventListener('click', (e) => {
    refs.modalCart.classList.add("active-cart")
})
refs.btnCloseCart.addEventListener('click', (e) => {
    refs.modalCart.classList.remove("active-cart")
})


//task-3

const shoes = document.querySelectorAll('.shoes img');
let rotate = true;

    function rotateImg() {
        shoes.forEach(img => {
            if (rotate) {
                img.classList.remove('rotate-right');
                img.classList.add('rotate-left');
            } else {
                img.classList.remove('rotate-left');
                img.classList.add('rotate-right');
            }
        });
        rotate = !rotate;
    }

    setInterval(rotateImg, 2000);

