import { getSizes, setSize, getOrderBuilder } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            // window.alert(`You chose size ${event.target.value}`)
        }
    }
)

export const DiamondSizes = () => {
    const sizes = getSizes()
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if (size.id === orderBuilder.sizeId){
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked/> ${size.carets}
            </li>`
        }else{
            return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
            </li>`
        }
        
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

