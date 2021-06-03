let currentWebsite = window.location.toString()

let RTXIcon = document.createElement("img")
RTXIcon.src = chrome.runtime.getURL("media/icon.png")
RTXIcon.style.height = "35px"
RTXIcon.style.width = "35px"
RTXIcon.style.marginRight = "1px"
RTXIcon.style.float = "left"

if (currentWebsite.includes("proshop")) {
    let addToBasket = setInterval(() => {
        if (document.querySelector(".site-btn-addToBasket-lg")) {
            document.querySelector(".site-btn-addToBasket-lg").click()
            clearInterval(addToBasket)
        }
    }, 1);

    let goToCheckout = setInterval(() => {
        if (document.querySelector("a.btn.btn-lg.pull-right.btn-success")) {
            document.querySelector("a.btn.btn-lg.pull-right.btn-success").click()
            clearInterval(goToCheckout)
        }
    }, 1);

    let acceptTerms = setInterval(() => {
        if (document.querySelector("#traidConditionsAnswer")) {
            document.querySelector("#traidConditionsAnswer").click()
            clearInterval(acceptTerms)
        }
    }, 1);

    if (currentWebsite.includes("Delivery")) {
        let deliveryButton = setInterval(() => {
            if (document.querySelector(".btn.btn-success")) {
                document.querySelector(".btn.btn-success").click()
                clearInterval(deliveryButton)
            }
        }, 1);
    }

    if (currentWebsite.includes("Payment")) {
        let mobilepayButton = setInterval(() => {
            if (document.querySelector("#form-checkout > div > div.panel-body.site-checkOut-paymentoptions > div:nth-child(2) > div > ul > li:nth-child(4)")) {
                let payButton = document.querySelector("#form-checkout > div > div.panel-body.site-checkOut-paymentoptions > div:nth-child(2) > div > ul > li:nth-child(4)")
                payButton.querySelector(".btn.btn-success").click()
                clearInterval(mobilepayButton)
            }
        }, 1);
    }

    if (!currentWebsite.includes("Basket")) {
        let addLogo = setInterval(() => {
            if (document.querySelector(".form-horizontal")) {
                RTXIcon.style.float = "right"
                document.querySelector(".form-horizontal").prepend(RTXIcon)
                clearInterval(addLogo)
            }
        }, 1);
    }
} 

else if (currentWebsite.includes("bambora")) {
    let addPhone = setInterval(() => {
        if (document.querySelector("#phonenumber")) {
            document.querySelector("#phonenumber").value = "452309725"
            document.querySelector("#mobilePayContinueBtn").disabled = false
            document.querySelector("#mobilePayContinueBtn").click()
            clearInterval(addPhone)
        }
    }, 1);
} 

else if (currentWebsite.includes("jimms")) {
    if (currentWebsite.includes("jimms.fi/fi/CheckOut") || currentWebsite.includes("jimms.fi/fi/ShoppingCart")) {
        let basketNext = setInterval(() => {
            if (document.querySelector("#cart").className == "tab-pane active") {
                document.querySelectorAll(".btn.btn-success")[2].click()
                clearInterval(basketNext)
            }
        }, 1);

        let infoNext = setInterval(() => {
            if (document.querySelector("#customer").className == "tab-pane active") {
                document.querySelectorAll(".btn.btn-success")[4].click()
                clearInterval(infoNext)
            }
        }, 1);

        let deliveryNext = setInterval(() => {
            if (document.querySelector("#delivery").className == "tab-pane active" && document.querySelector("#delivery h4") && !document.querySelector("#delivery > div.alert.alert-info")) {
                document.querySelector("#DeliveryMethodID").remove()
                document.querySelector("#DeliveryMethodID").remove()
                document.querySelector("#DeliveryMethodID").remove()
                document.querySelector("#DeliveryMethodID").checked = "true"
                document.querySelectorAll(".btn.btn-success")[6].click()
                clearInterval(deliveryNext)
            }
        }, 1);

        let postNext = setInterval(() => {
            if (document.querySelector("#delivery").className == "tab-pane active" && document.querySelector("#delivery h3")) {
                document.querySelector("#SPID").checked = "true"
                document.querySelectorAll(".btn.btn-success")[7].click()
                clearInterval(postNext)
            }
        }, 1);


        let paymentNext = setInterval(() => {
            if (document.querySelector("#delivery").className == "tab-pane active" && document.querySelector("#delivery h4") && document.querySelector("#delivery > div.alert.alert-info")) {
                document.querySelector("#PaymentMethodID").checked = "true"
                document.querySelectorAll(".btn.btn-success")[6].click()
                clearInterval(paymentNext)
            }
        }, 1);

        let mobilepayNext = setInterval(() => {
            if (document.querySelector("#verify").className == "tab-pane active") {
                document.querySelectorAll(".btn-payment.payment-image")[11].click()
                clearInterval(mobilepayNext)
            }
        }, 1);
    } 
    
    else {
        let basketButtons = document.getElementsByClassName("btn btn-success btn-sm")
        for (i = 0; i < basketButtons.length; i++) {
            basketButtons[i].addEventListener("click", function () {
                window.open("https://www.jimms.fi/fi/CheckOut/Customer")
            })
        }
        let addIcon = document.querySelector(".navbar-nav")
        addIcon.prepend(RTXIcon)
    }
}

else if (currentWebsite.includes("mobilepay")) {
    let mobilepayPayment = setInterval(() => {
        if (document.querySelector("body > app-shell")) {
            if (document.querySelector("body > app-shell").shadowRoot.querySelector("request-page")) {
                if (document.querySelector("body > app-shell").shadowRoot.querySelector("request-page").shadowRoot.querySelector("standard-page > section:nth-child(2) > box-content").shadowRoot.querySelector("core-button").shadowRoot.querySelector("a")) {
                    let button = document.querySelector("body > app-shell").shadowRoot.querySelector("request-page").shadowRoot.querySelector("standard-page > section:nth-child(2) > box-content").shadowRoot.querySelector("core-button").shadowRoot.querySelector("a")
                    button.click()
                    clearInterval(mobilepayPayment)
                }
            }
        }
    }, 1);
}