export const ADD = (item, id) => {
    return {
        type: "add",
        items: { item: item, id: id }
    }
}
export const REMOVE = () => {
    return {
        type: "remove"
    }
}