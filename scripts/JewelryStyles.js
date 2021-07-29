import { getStyles, setStyle, getOrderBuilder } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "styles"){
            setStyle(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            // window.alert(`You chose style ${event.target.value}`)
        }
    }
)

export const JewelryStyles = () => {
    const styles = getStyles()
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style =>{
        if (style.id === orderBuilder.styleId){
            return`<li>
        <input type="radio" name="styles" value="${style.id}" checked /> ${style.style}
    </li>`
        } else{
            return`<li>
        <input type="radio" name="styles" value="${style.id}" /> ${style.style}
    </li>`
        }
        
    })


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

