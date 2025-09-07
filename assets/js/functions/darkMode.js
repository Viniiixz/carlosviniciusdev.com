const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorText: getStyle(html, "--color-text"),
    colorH: getStyle(html, "--color-h"),
    colorTitle: getStyle(html, "--color-title"),
    colorSubTitle: getStyle(html, "--color-SubTitle"),
    colorFooter: getStyle(html, "--color-footer"),
    bgFooter:getStyle(html, "--bg-footer"),
    bgIcons:getStyle(html, "--bg-icons"),
}

const darkMode = {
    bg: "#212121",
    bgPanel: "#333333",
    colorText: "#B5B5B5",
    colorH:"#0076b7",
    colorTitle:"#b0b7bf",
    colorSubTitle:"#5d8eaa",
    colorFooter:"#50a5d6",
    bgFooter:"#191919",
    bgIcons:"#50a5d6",
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})