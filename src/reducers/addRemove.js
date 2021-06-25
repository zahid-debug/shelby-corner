const initialState = {
    basket: [],
}

const Basket = (state = initialState, action) => {
    switch ((action.type)) {
        case "add": return { ...state, basket: [...state.basket, action.items.item], }
        case "remove":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            console.log(index)
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(` Can't remove the product (id: ${action.id}) as its not in basket!`)
            }
            console.log(newBasket)
            return {...state, basket: newBasket}
        default: return state 
    }
}

export default Basket;