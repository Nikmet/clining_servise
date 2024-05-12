const CARDS = document.querySelector(".third-section__cards");
let owl = $(".owl-carousel");

const cart = [];

function openCart() {
    let total = 0;

    for (const product of cart) {
        total += Number(product.price.slice(0, product.price.length - 1));
    }

    const html = `
        <div class="cart">
            <div class="cart__title">
                <h4>Корзина</h4>
                <button id="cart_close">Закрыть</button>
            </div>
            <div class="cart__wrapper">

            </div>
            <div class="cart__line"></div>
            <div class="cart__footer">
                <p>ИТОГО:</p>
                <p>${total}₽</p>
            </div>
            <input type="phone" placeholder="Введите номер для оплаты">
            <button id="cart_buy">Оплатить</button>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);

    const CART_WRAPPER = document.querySelector(".cart__wrapper");
    for (const product of cart) {
        CART_WRAPPER.insertAdjacentHTML(
            "beforeend",
            `
            <div class="cart__stroke">
                <p>${product.header}</p>
                <p>${product.price}</p>
            </div>
        `
        );
    }

    document.querySelector("#cart_close").addEventListener("click", e => {
        e.preventDefault();
        document.body.style.overflowY = "scroll";
        document.querySelector(".cart").remove();
    });

    document.querySelector("#cart_buy").addEventListener("click", e => {
        e.preventDefault();
        const INPUT = document.querySelector("input");

        if (INPUT.value !== "") {
            document.querySelector(".cart").innerHTML = `
                Ожидаем оплату...
            `;

            setTimeout(() => {
                document.body.style.overflowY = "scroll";
                document.querySelector("header").style.filter = "blur(0px)";
                document.querySelector("main").style.filter = "blur(0px)";
                document.querySelector("footer").style.filter = "blur(0px)";
                document.querySelector(".cart").remove();
                alert("Оплата прошла успешно! Спасибо за покупку, наш менеджер свяжется с вами в течении суток.");
            }, 2000);
        } else {
            alert("Введите номер телефона!");
        }
    });
}

owl.owlCarousel({
    center: true,
    loop: true,
    margin: 1100,
    startPosition: 1,
    smartSpeed: 500,
    items: 1,
});
// Go to the next item
$(".slider__btn-right").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".slider__btn-left").click(function () {
    owl.trigger("prev.owl.carousel");
});

CARDS.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("add-to-cart")) {
        const header = e.target.closest(".third-section__card").querySelector("h3").innerHTML;
        const price = e.target.closest(".third-section__card").querySelector("p").innerHTML;
        cart.push({
            header,
            price,
        });
        alert(`Вы добавили ${header} в корзину`);
    }
});

$(".cart-btn").click(e => {
    e.preventDefault();
    document.body.style.overflowY = "hidden";
    document.querySelector("header").style.filter = "blur(5px)";
    document.querySelector("main").style.filter = "blur(5px)";
    document.querySelector("footer").style.filter = "blur(5px)";
    openCart();
});
