
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals} from "./Metals.js"
import {addCustomOrder} from "./dataAccess.js"
import {Types} from "./jewelryType.js"
import {OrderGenerator} from "./OrderBuilder.js"
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>
        <article class="choices__types options">
            <H2>Types</h2>
            ${Types()}
        </article>
        <article>
            <section class= orderGen>
                ${OrderGenerator()}
            </section>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

