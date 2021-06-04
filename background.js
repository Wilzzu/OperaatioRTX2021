chrome.browserAction.onClicked.addListener(function (tab) {
    let urls = ["https://www.jimms.fi/fi/Product/Search2?q=RTX+3070+Ti",
        "https://www.verkkokauppa.com/fi/search?query=RTX%203070%20ti",
        "https://www.proshop.fi/?s=RTX+3070+Ti&o=1028",
        "https://www.nvidia.com/fi-fi/geforce/graphics-cards/30-series/rtx-3070-3070ti/#wtb"
    ]
    for (i = 0; i < urls.length; i++) {
        chrome.tabs.create({
            url: urls[i]
        })
    }
})