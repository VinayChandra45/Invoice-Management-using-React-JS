export function SetCounterAction(data){
    return {
        type : "SET_COUNTER",
        payload:data
    }
}
export function RemovesCounterAction(data){
    return {
        type : "REMOVE_COUNTER",
        payload:data
    }
}