import { KneelDiamonds } from "./KneelDiamonds.js"
import { getOrderBuilder } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
    console.log(getOrderBuilder())
})
