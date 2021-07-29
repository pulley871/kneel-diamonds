import { getMetals, getOrders, getSizes, getStyles, getTypes } from "./dataAccess.js"

const buildOrderListItem = (order) => {
    const metals = getMetals();
    const styles = getStyles();
    const diamondSize = getSizes();
    const types = getTypes();
    const foundMetal = metals.find(
        (metal) =>{
            return metal.id === order.metalId
        }
    )
    const foundStyle = styles.find(
        (style) =>{
            return style.id === order.styleId
        }
    )
    const foundDiamondSize = diamondSize.find(
        (size) =>{
            return size.id === order.sizeId
        }
    )
    const foundType = types.find(
        (type) =>{
            return type.id === order.typeId
        }
    )
    let typeMultiplier;
    switch (foundType.id){
        case 1:
            typeMultiplier = 1.0
            break;
        case 2:
            typeMultiplier = 2.0
            break;
        case 3:
            typeMultiplier = 4.0
    }
    let totalCost = (foundMetal.price + foundStyle.price + foundDiamondSize.price) * typeMultiplier ;
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

