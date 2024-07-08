export const loadState=()=>{
    try {
        const serializedData=localStorage.getItem("cart");
        if(serializedData === null){
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error("Could not load state",error)
        return undefined
    }
}

export const saveState=(state)=>{
    try {
        const serializedData=JSON.stringify(state);
        localStorage.setItem("cart",serializedData)
        
    } catch (error) {
        console.error("Could not save state", error);
    }
}