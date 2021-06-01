chrome.browserAction.onClicked.addListener(function (tab) {
    let urls = ["https://www.jimms.fi/fi/Product/List/000-1N0/komponentit--naytonohjaimet--geforce-rtx-pelaamiseen?ob=8",
        "https://www.verkkokauppa.com/fi/catalog/706b/Naytonohjaimet/products?query=RTX+3070+Ti&sort=releaseDate%3Adesc",
        "https://www.gigantti.fi/INTERSHOP/web/WFS/store-gigantti-Site/fi_FI/-/EUR/ViewStandardCatalog-Browse?CategoryName=fi-tietokonekomponentit-naytonohjaimet&CategoryDomainName=store-gigantti-ProductCatalog&SearchParameter=%26%40QueryTerm%3D*%26ContextCategoryUUID%3DYlOsGQV5I1EAAAFa8VOVoDxg%26discontinued%3D0%26online%3D1&SortingAttribute=ACTdate-desc&select-sort-refine=ACTdate-desc",
        "https://www.proshop.fi/Naeytoenohjaimet?o=2304",
        "https://www.power.fi/c/3677/tietotekniikka/tietokonekomponentit/naytonohjaimet/",
        "https://www.nvidia.com/fi-fi/geforce/graphics-cards/30-series/rtx-3070-3070ti/#wtb"
    ]
    for (i = 0; i < urls.length; i++) {
        chrome.tabs.create({
            url: urls[i]
        })
    }
})