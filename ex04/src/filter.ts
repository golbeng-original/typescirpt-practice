
const filter = <T>(array:T[], callback:(value:T) => boolean) : T[] => {

    let newArray: T[] = []
    for(let element of array) {

        if(callback(element) == false) {
            continue
        }

        newArray = [...newArray, element]
    }
    
    return newArray
}

export default filter