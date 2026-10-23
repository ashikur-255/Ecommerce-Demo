/* =========================================================
   CURRENT DATE & TIME
========================================================= */

function updateDateTime() {

    const dateElement =
        document.getElementById("currentDateTime");

    if (!dateElement) {
        return;
    }

    const now = new Date();

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const date =
        now.toLocaleDateString("en-US", options);

    const time =
        now.toLocaleTimeString("en-US");

    dateElement.textContent =
        `${date} | ${time}`;
}


updateDateTime();

setInterval(updateDateTime, 1000);


/* =========================================================
   CART
========================================================= */

let cartCount = 0;


function updateCartCount() {

    const cartElements =
        document.querySelectorAll(".cart-count");

    cartElements.forEach(function (element) {

        element.textContent = cartCount;

    });

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart() {

    const quantityInput =
        document.getElementById("quantity");

    let quantity = 1;

    if (quantityInput) {

        quantity =
            parseInt(quantityInput.value) || 1;

    }

    cartCount += quantity;

    updateCartCount();


    alert(
        `Product added to cart successfully!\nQuantity: ${quantity}`
    );
}


/* =========================================================
   QUANTITY
========================================================= */

function changeQuantity(amount) {

    const quantityInput =
        document.getElementById("quantity");

    if (!quantityInput) {
        return;
    }

    let quantity =
        parseInt(quantityInput.value) || 1;

    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    quantityInput.value = quantity;
}


/* =========================================================
   SEARCH
========================================================= */

function searchProduct() {

    const input =
        document.getElementById("searchInput");

    let searchValue = "";

    if (input) {
        searchValue = input.value.trim();
    }

    if (searchValue === "") {

        alert("Please enter a product name.");

        return;
    }

    alert(
        `Searching for: ${searchValue}`
    );
}


/* =========================================================
   SIGNUP FORM
========================================================= */

function handleSignup(event) {

    event.preventDefault();

    const form =
        document.getElementById("signupForm");

    if (!form) {
        return;
    }

    const firstName =
        form.elements["firstName"].value.trim();

    const lastName =
        form.elements["lastName"].value.trim();

    const email =
        form.elements["email"].value.trim();


    /*
        Confirmation popup
    */

    const confirmation =
        confirm(
            `Registration Confirmation\n\n` +
            `Name: ${firstName} ${lastName}\n` +
            `Email: ${email}\n\n` +
            `Do you want to create this account?`
        );


    if (confirmation) {

        alert(
            "Registration submitted successfully!"
        );

        form.reset();

    } else {

        alert(
            "Registration cancelled."
        );

    }

}


/* =========================================================
   LOGIN FORM
========================================================= */

function handleLogin(event) {

    event.preventDefault();

    const form =
        document.getElementById("loginForm");

    if (!form) {
        return;
    }

    const username =
        form.elements["username"].value.trim();


    const confirmation =
        confirm(
            `Login Confirmation\n\n` +
            `Username: ${username}\n\n` +
            `Do you want to continue?`
        );


    if (confirmation) {

        alert(
            "Login submitted successfully!"
        );

    } else {

        alert(
            "Login cancelled."
        );

    }

}