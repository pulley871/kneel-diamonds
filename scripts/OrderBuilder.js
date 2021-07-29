import { getOrderBuilder, getMetals, getSizes, getStyles, getTypes } from "./dataAccess.js";


export const OrderGenerator = () =>{
    const order = getOrderBuilder()
    const metals = getMetals()
    const diamonSize = getSizes()
    const style = getStyles()
    const type = getTypes()
    const foundMetal = metals.find((metal) =>{return metal.id === order.metalId})
    const foundSize = diamonSize.find((size) =>{return size.id === order.sizeId})
    const foundStyle = style.find((style) =>{return style.id === order.styleId})
    const foundType = type.find((type) =>{return type.id === order.typeId})
    let runningTotal = 0
    let htmlString = `<h2> Selected Items</h2>`
    if (order.metalId !== undefined){
        htmlString += `<h3> Metal:${foundMetal.metal}   ||    Cost: $${foundMetal.price}`
        runningTotal += foundMetal.price
    }
    if (order.sizeId !== undefined){
        htmlString += `<h3> Size:${foundSize.carets}   ||    Cost: $${foundSize.price}`
        runningTotal += foundSize.price
    }
    if (order.styleId !== undefined){
        htmlString += `<h3> Style:${foundStyle.style}   ||    Cost: $${foundStyle.price}`
        runningTotal += foundStyle.price
    }
    if (order.typeId !== undefined){
        htmlString += `<h3> Type:${foundType.type}</h3>`   
        switch (foundType.id){
            case 1:
                runningTotal *= 1.0
                break;
            case 2:
                runningTotal *= 2.0
                break;
            case 3:
                runningTotal *= 4.0
        }
    }
    htmlString += `<h2 id="orderGenTotal">Estimated Total:$${runningTotal.toFixed(2)}</h2>`
    return htmlString
}