import { getTypes,setType } from "./dataAccess.js";
import { getOrderBuilder } from "./dataAccess.js";



export const Types = () =>{
    const type = getTypes();
    const order = getOrderBuilder();
    let htmlString = "<ul>"
    const mappedTypes = type.map(
        (type) =>{
            if (type.id === order.typeId){
                return `<li><input type="radio" name="type" value="${type.id}" checked/> ${type.type}</li>`
            }else{
                return `<li><input type="radio" name="type" value="${type.id}"/> ${type.type}</li>`
            }
        }
    )
    htmlString += mappedTypes.join("")
    htmlString += "</ul>"
    return htmlString
}

document.addEventListener(
    "change",
    (event) =>{
        if(event.target.name === "type"){
            setType(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
            // window.alert(`You chose style ${event.target.value}`)
        }
    }
)