let currentWebsite = window.location.toString()

let RTXIcon = document.createElement("img")
    RTXIcon.src = chrome.runtime.getURL("media/icon.png")
    RTXIcon.style.height = "35px"
    RTXIcon.style.width = "35px"
    RTXIcon.style.float = "left"


if (currentWebsite.includes("jimms")) {
    let addIcon = document.querySelector(".navbar-nav")
    addIcon.prepend(RTXIcon)

    document.querySelector(".btn.btn-success.btn-sm").addEventListener("click", function() {
        console.log("BRUH")
        chrome.tabs.create({url: "https://www.jimms.fi/fi/CheckOut/Customer"})
    })

    console.log("JIMMS")
}
else if (currentWebsite.includes("gigantti")){
    console.log("GIGANTTI")
}
