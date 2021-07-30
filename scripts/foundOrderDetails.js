import { getOrderBuilder, getMetals, getSizes, getStyles, getTypes } from "./dataAccess.js";

//Checks the orderBuilder in the database and returns what ever 
//item they selected on the customization page
export const foundMetal = () =>{
    const order = getOrderBuilder();
    const foundMetal = getMetals().find(
        (metal) =>{
            return metal.id === order.metalId
        }
    )
    return foundMetal
}

export const foundSize= () =>{
    const order = getOrderBuilder();
    const foundSize= getSizes().find(
        (size) =>{
            return size.id === order.sizeId
        }
    )
    return foundSize
}

export const foundStyle = () =>{
    const order = getOrderBuilder();
    const foundStyle = getStyles().find(
        (style) =>{
            return style.id === order.styleId
        }
    )
    return foundStyle
}

export const foundType = () =>{
    const order = getOrderBuilder();
    const foundType = getTypes().find(
        (type) =>{
            return type.id === order.typeId
        }
    )
    return foundType
}


// Ordered Items that are checked with perm. database Resource of CustomerOrders
export const orderedMetal = (order)=>{
    const orderedMetal = getMetals().find((metal) => {return metal.id === order.metalId})
    return orderedMetal
}
export const orderedSize = (order)=>{
    const orderedSize = getSizes().find((size) => {return size.id === order.sizeId})
    return orderedSize
}
export const orderedStyle = (order)=>{
    const orderedStyle = getStyles().find((style) => {return style.id === order.styleId})
    return orderedStyle
}
export const orderedType = (order)=>{
    const orderedType = getTypes().find((type) => {return type.id === order.typeId})
    return orderedType
}