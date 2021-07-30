import { getOrders} from "./dataAccess.js"
import { orderedMetal, orderedSize, orderedStyle, orderedType} from "./foundOrderDetails.js";
const buildOrderListItem = (order) => {
    let typeMultiplier;
    switch (orderedType(order).id){
        case 1:
            typeMultiplier = 1.0
            break;
        case 2:
            typeMultiplier = 2.0
            break;
        case 3:
            typeMultiplier = 4.0
    }
    let totalCost = (orderedMetal(order).price + orderedStyle(order).price + orderedSize(order).price) * typeMultiplier ;
    let totalCostString = totalCost.toFixed(2).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and cost ${totalCostString}
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

